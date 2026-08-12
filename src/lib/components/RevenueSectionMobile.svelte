<script>
  /* ════════════════════════════════════════════════════════════════
     ClearSky — Mobile Revenue section (locked)
     "How much revenue is your business leaving for your competitors?"

     Separate mobile component (NOT responsive). Frame: 390px.
     Desktop is a two-column card (copy + video); mobile stacks to one
     column: copy on top, dark video poster below.

     ── DECISIONS BAKED IN ─────────────────────────────────────────
     • Two middle body paragraphs REMOVED for mobile
       (hook → guarantee, no "marketing problem" / "ClearSky fixes it").
       NOTE: desktop RevenueSection.svelte still carries both — left
       as-is unless told to sync.
     • CTA arrow points DOWN (toward the poster).
     • Poster uses the DARK version (navy #1F2A44, white play button,
       navy triangle) — matches the current home-page build.

     ── SECTION ────────────────────────────────────────────────────
     tinted #F7F9FC · padding 36 top / 48 bottom · 20px sides
     title .. Inter 600 / 23px / #4267AD / centered

     ── ASSET ──────────────────────────────────────────────────────
     videoHref + the platform video are still placeholder (#).
     ════════════════════════════════════════════════════════════════ */

  export let title = 'How much revenue is your business leaving for your competitors?';
  export let ctaLabel = 'View Entire Platform';
  export let ctaHref = '#';
  export let videoHref = '#';
</script>

<section class="rev">
  <h2 class="title">{title}</h2>

  <div class="card">
    <p class="hook">"Every customer who didn't book with you today chose <span class="o">someone else.</span>"</p>

    <p class="guarantee">Guaranteed <span class="o">20% revenue growth</span> in your first six months. Don't grow? Get up to 100% back.</p>

    <div class="close">
      <p class="price">Price is the first thing you'll hear — not the last.</p>
      <a class="cta" href={ctaHref}>
        <span>{ctaLabel}</span>
        <svg width="18" height="40" viewBox="0 0 18 40" fill="none" aria-hidden="true">
          <line x1="9" y1="0" x2="9" y2="32" stroke="#F5841F" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M3 26 L9 36 L15 26" stroke="#F5841F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
      </a>
    </div>

    <div class="video">
      <a class="poster" href={videoHref} aria-label="Play the platform video">
        <div class="corner"></div>
        <div class="poster-head">
          <div class="poster-title">Here's what <span class="o b">$200</span> gets you.</div>
          <div class="poster-underline"></div>
        </div>
        <div class="platform-card">
          <svg width="42" height="28" viewBox="0 0 40 28" fill="none" aria-hidden="true"><path d="M10 22h20a7 7 0 0 0 0-14 9 9 0 0 0-17-2 6 6 0 0 0-3 16z" stroke="#6B9BD1" stroke-width="2"/></svg>
          <div class="wordmark"><span class="cs-clear">Clear</span><span class="cs-sky">SKY</span></div>
          <div class="wordmark-sub">BUSINESS PLATFORM</div>
        </div>
        <div class="play">
          <span class="play-ring"></span>
          <span class="play-btn"><span class="play-tri"></span></span>
        </div>
      </a>
    </div>
  </div>
</section>

<style>
  .rev { width: 100%; background: #F7F9FC; padding: 36px 20px 48px; }

  .title {
    font-family: 'Inter', sans-serif; font-weight: 600; font-size: 23px; line-height: 1.25;
    color: #4267AD; text-align: center; margin: 0 0 22px;
  }

  .card {
    width: 100%; background: #fff; border: 1px solid #dbe3ee; border-radius: 12px;
    padding: 26px 24px 28px; font-family: 'Inter', sans-serif;
  }

  .o { color: #F5841F; }
  .o.b { font-weight: 700; }

  .hook { font-weight: 700; font-size: 19px; line-height: 1.38; color: #1e3a5f; margin: 0 0 18px; }
  .guarantee { font-weight: 700; font-size: 16px; line-height: 1.45; color: #1e3a5f; margin: 0 0 22px; }

  .close { display: flex; flex-direction: column; gap: 16px; }
  .price { font-weight: 700; font-size: 16px; line-height: 1.45; color: #1e3a5f; margin: 0; }
  .cta { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; }
  .cta span { font-weight: 700; font-size: 16px; color: #F5841F; white-space: nowrap; }

  /* dark video poster */
  .video { margin-top: 24px; }
  .poster {
    position: relative; display: block; width: 100%; height: 250px;
    border-radius: 12px; overflow: hidden; background: #1F2A44;
    border: 1px solid #2a3a57; text-decoration: none; cursor: pointer;
  }
  .corner { position: absolute; top: 0; right: 0; width: 150px; height: 150px; background: #26354f; opacity: .7; border-bottom-left-radius: 100%; }

  .poster-head { position: absolute; top: 20px; left: 22px; right: 22px; z-index: 3; }
  .poster-title { color: #fff; font-size: 15px; font-weight: 600; }
  .poster-underline { height: 2px; width: 140px; background: #F5841F; margin-top: 7px; border-radius: 2px; }

  .platform-card {
    position: absolute; left: 50%; top: 57%;
    transform: translate(-50%, -50%) perspective(900px) rotateY(-13deg) rotateX(4deg);
    width: 236px; height: 132px; background: #26344e; border: 1px solid #38486a;
    border-radius: 12px; box-shadow: 0 16px 40px rgba(0,0,0,.45);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
  }
  .platform-card svg { margin-bottom: 6px; }
  .wordmark { font-size: 24px; font-weight: 800; letter-spacing: .5px; line-height: 1; }
  .cs-clear { color: #fff; }
  .cs-sky { color: #6B9BD1; }
  .wordmark-sub { font-size: 9px; font-weight: 600; letter-spacing: 2.5px; color: #8a98b5; margin-top: 5px; }

  .play { position: absolute; left: 50%; top: 57%; transform: translate(-50%, -50%); z-index: 5; width: 66px; height: 66px; }
  .play-ring { position: absolute; inset: 0; border-radius: 50%; background: #fff; animation: vtpulse 2.4s ease-out infinite; }
  .play-btn { position: absolute; inset: 0; border-radius: 50%; background: #fff; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 26px rgba(0,0,0,.45); }
  .play-tri { width: 0; height: 0; border-left: 19px solid #1F2A44; border-top: 12px solid transparent; border-bottom: 12px solid transparent; margin-left: 5px; }
  @keyframes vtpulse { 0% { transform: scale(1); opacity: .5; } 70% { transform: scale(1.7); opacity: 0; } 100% { opacity: 0; } }
</style>
