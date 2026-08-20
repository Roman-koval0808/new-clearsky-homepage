// Page-level tracking: initialises the telemetry client and captures passive
// (page_load, scroll_*, dwell_*) plus any declarative data-attribute signals.

import { getTelemetry } from './client';

const A2P_BASE =
	import.meta.env?.VITE_A2P_BASE_URL ||
	(import.meta.env?.DEV ? 'http://localhost:3005' : 'https://a2p.viewroom.ca');

// The a2p company (tenant) this marketing site belongs to. Override with
// VITE_A2P_TENANT_SLUG. Matches the owner of the embedded viewroom / leadbox.
const TENANT_SLUG = import.meta.env?.VITE_A2P_TENANT_SLUG || 'cmkwntxej0004g1tiwmwbgazn';

const endpoint = `${A2P_BASE}/api/v1/telemetry/signals`;

const telemetry = getTelemetry({ endpoint, tenantSlug: TENANT_SLUG });

const scrollFired = { 25: false, 50: false, 75: false, 90: false };
const dwellFired = { 30: false, 60: false, 120: false };

function scrollPercent() {
	const doc = document.documentElement;
	const max = doc.scrollHeight - window.innerHeight;
	if (max <= 0) return 100;
	return Math.round((window.scrollY / max) * 100);
}

function onScroll() {
	const p = scrollPercent();
	for (const threshold of [25, 50, 75, 90]) {
		if (p >= threshold && !scrollFired[threshold]) {
			scrollFired[threshold] = true;
			telemetry.track(`scroll_${threshold}`, { percent: p });
		}
	}
}

function scheduleDwell() {
	[30, 60, 120].forEach((sec) => {
		setTimeout(() => {
			if (!dwellFired[sec]) {
				dwellFired[sec] = true;
				telemetry.track(`dwell_${sec}`, { seconds: sec });
			}
		}, sec * 1000);
	});
}

function parsePayload(raw) {
	if (!raw) return {};
	try {
		return JSON.parse(raw);
	} catch {
		return {};
	}
}

export function initTracker() {
	if (typeof window === 'undefined' || typeof document === 'undefined') return telemetry;

	telemetry.track('page_load', { url: window.location.pathname, title: document.title });

	window.addEventListener('scroll', onScroll, { passive: true });
	scheduleDwell();

	// Declarative signals: any element can carry `data-clearsky-signal="hero_cta_click"`
	// (optional `data-clearsky-payload='{"foo":"bar"}'`).
	document.addEventListener('click', (e) => {
		const el = e.target && e.target.closest ? e.target.closest('[data-clearsky-signal]') : null;
		if (el) {
			telemetry.track(el.getAttribute('data-clearsky-signal'), parsePayload(el.getAttribute('data-clearsky-payload')));
		}
	});

	// Field-focus signals: `data-clearsky-focus="form_phone_focus"` (fires once per field).
	document.addEventListener('focusin', (e) => {
		const el = e.target && e.target.closest ? e.target.closest('[data-clearsky-focus]') : null;
		if (el && !el.dataset.clearskyFocusFired) {
			el.dataset.clearskyFocusFired = '1';
			telemetry.track(el.getAttribute('data-clearsky-focus'));
		}
	});

	return telemetry;
}

export { telemetry, endpoint, TENANT_SLUG };
