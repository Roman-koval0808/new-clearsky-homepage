// Browser telemetry client: batches deterministic signals and posts them to the a2p backend.

import { isKnownSignal } from './signals';
import { captureBrowserAttribution } from './attribution';

const DEFAULT_ENDPOINT = '/api/v1/telemetry/signals';

function randomSessionId() {
	return `sess_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

function readUrlFingerprint() {
	if (typeof window === 'undefined') return null;
	try {
		return new URLSearchParams(window.location.search).get('fp') || null;
	} catch {
		return null;
	}
}

function readStoredFingerprint() {
	if (typeof window === 'undefined') return null;
	try {
		const v =
			window.localStorage.getItem('fingerprintId') ||
			window.localStorage.getItem('fingerprint') ||
			window.localStorage.getItem('fp');
		// FingerprintJS ids are 12 chars; shorter values are the old canvas fallback, so ignore them.
		return v && v.length >= 12 ? v : null;
	} catch {
		return null;
	}
}

function readFingerprint() {
	return readUrlFingerprint() || readStoredFingerprint();
}

/** Last-resort fingerprint when FingerprintJS is unreachable. */
function generateFallbackFingerprint() {
	try {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		let seed = [
			navigator.userAgent,
			navigator.language,
			screen.width,
			screen.height,
			new Date().getTimezoneOffset(),
			!!navigator.hardwareConcurrency
		].join('|');
		if (ctx) {
			ctx.fillText('clearsky-fp', 4, 12);
			seed += '|' + canvas.toDataURL().slice(0, 200);
		}
		let h = 0;
		for (let i = 0; i < seed.length; i++) {
			h = (h << 5) - h + seed.charCodeAt(i);
			h |= 0;
		}
		return Math.abs(h).toString(16).padStart(12, '0');
	} catch {
		return Math.random().toString(16).slice(2, 14);
	}
}

/**
 * Resolve the visitor fingerprint. Matches the a2p viewroom exactly: `?fp=` first, then the stored
 * FingerprintJS id, then FingerprintJS itself (`visitorId.slice(0, 12)`), so the marketing site and
 * the viewroom recognise the same person across origins.
 */
async function loadFingerprint() {
	const existing = readFingerprint();
	if (existing) return existing;

	try {
		const FPJS_URL = 'https://openfpcdn.io/fingerprintjs/v4';
		const mod = await import(/* @vite-ignore */ FPJS_URL);
		const agent = await (mod.default || mod).load();
		const result = await agent.get();
		const fp = result.visitorId.slice(0, 12);
		try {
			window.localStorage.setItem('fingerprintId', fp);
		} catch {
			/* ignore */
		}
		return fp;
	} catch {
		return generateFallbackFingerprint();
	}
}

export class TelemetryClient {
	/** @param {{endpoint?:string, tenantSlug?:string|null, sessionId?:string|null, fingerprintId?:string|null, flushSize?:number, flushIntervalMs?:number}} [options] */
	constructor(options = {}) {
		this.endpoint = options.endpoint ?? DEFAULT_ENDPOINT;
		this.tenantSlug = options.tenantSlug ?? null;
		this.sessionId = options.sessionId ?? randomSessionId();
		this.fingerprintId = options.fingerprintId ?? readFingerprint();
		this.fpPromise = null;
		this.name = null;
		this.email = null;
		this.phone = null;
		this.attribution = captureBrowserAttribution();
		this.buffer = [];
		this.flushSize = options.flushSize ?? 20;
		this.flushIntervalMs = options.flushIntervalMs ?? 5000;
		this.timer = null;
		this.flushing = false;

		if (!this.fingerprintId && typeof window !== 'undefined') {
			this.fpPromise = this.resolveFingerprint();
		}

		if (typeof window !== 'undefined') {
			this.startAutoFlush();
			window.addEventListener('pagehide', () => this.flushBeacon());
			document.addEventListener('visibilitychange', () => {
				if (document.visibilityState === 'hidden') this.flushBeacon();
			});
		}
	}

	setTenant(tenantSlug) {
		this.tenantSlug = tenantSlug;
	}

	setFingerprint(fingerprintId) {
		this.fingerprintId = fingerprintId;
	}

	async resolveFingerprint() {
		const fp = await loadFingerprint();
		this.fingerprintId = fp;
		return fp;
	}

	async ensureFingerprint() {
		if (this.fingerprintId) return this.fingerprintId;
		if (!this.fpPromise) this.fpPromise = this.resolveFingerprint();
		return this.fpPromise;
	}

	/** @param {{name?:string|null, email?:string|null, phone?:string|null}} identity */
	identify(identity) {
		if (identity.name) this.name = identity.name;
		if (identity.email) this.email = identity.email;
		if (identity.phone) this.phone = identity.phone;
	}

	track(name, payload) {
		if (!isKnownSignal(name)) {
			if (typeof console !== 'undefined') console.warn(`[telemetry] Unknown signal dropped: ${name}`);
			return;
		}
		this.buffer.push({
			name,
			occurredAt: new Date().toISOString(),
			payload: payload ?? {}
		});
		if (this.buffer.length >= this.flushSize) {
			void this.flush();
		}
	}

	startAutoFlush() {
		if (this.timer) clearInterval(this.timer);
		this.timer = setInterval(() => {
			if (this.buffer.length > 0) void this.flush();
		}, this.flushIntervalMs);
	}

	buildBody() {
		return JSON.stringify({
			tenantSlug: this.tenantSlug,
			sessionId: this.sessionId,
			fingerprintId: this.fingerprintId,
			name: this.name,
			email: this.email,
			phone: this.phone,
			attribution: this.attribution,
			signals: this.buffer
		});
	}

	async flush() {
		if (this.flushing || this.buffer.length === 0) return false;
		this.flushing = true;
		const snapshot = this.buffer;
		this.buffer = [];
		try {
			await this.ensureFingerprint();
			const body = JSON.stringify({
				tenantSlug: this.tenantSlug,
				sessionId: this.sessionId,
				fingerprintId: this.fingerprintId,
				name: this.name,
				email: this.email,
				phone: this.phone,
				attribution: this.attribution,
				signals: snapshot
			});
			const res = await fetch(this.endpoint, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body,
				keepalive: true
			});
			this.flushing = false;
			return res.ok;
		} catch {
			// Re-queue on failure so no signal is silently lost.
			this.buffer = [...snapshot, ...this.buffer];
			this.flushing = false;
			return false;
		}
	}

	flushBeacon() {
		if (this.buffer.length === 0 || typeof navigator === 'undefined') return;
		const body = this.buildBody();
		this.buffer = [];
		try {
			navigator.sendBeacon(this.endpoint, new Blob([body], { type: 'application/json' }));
		} catch {
			/* nothing more we can do on unload */
		}
	}
}

let client = null;

/** @param {{endpoint?:string, tenantSlug?:string|null}} [options] */
export function getTelemetry(options = {}) {
	if (!client) client = new TelemetryClient(options);
	if (options.tenantSlug) client.setTenant(options.tenantSlug);
	if (options.fingerprintId) client.setFingerprint(options.fingerprintId);
	return client;
}
