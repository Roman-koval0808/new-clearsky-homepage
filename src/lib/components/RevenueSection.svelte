<script>
  /* ════════════════════════════════════════════════════════════════
     ClearSky — Revenue / Video section ("How much revenue…")

     Full-bleed tinted band (site-standard section background) with a
     centered title and a bordered white card holding two columns:
     left = sales copy, right = light video poster (click = play video).

     ── SECTION BACKGROUND (site standard) ─────────────────────────
     full-bleed band · fill #F7F9FC · padding 40px top / 60px bottom
     inner content centered: max-width 1440, 30px sides (1380 usable)

     ── CARD / COLUMNS ─────────────────────────────────────────────
     card: 1380 wide, white (#fff), 1px border #dbe3ee, radius 12
     columns: 800 text  +  40 gap  +  540 video  = 1380
     insets: text 50px LEFT · video 50px RIGHT (mirrored)

     ── TYPE / COLOR ───────────────────────────────────────────────
     title ........ Inter 600 · 28px · #4267AD · centered
     hook ......... Inter 700 · 22px · #1e3a5f ("someone else" #F5841F)
     body ......... Inter 400 · 16px · #444
     guarantee .... Inter 700 · 18px · #1e3a5f ("20% revenue growth" #F5841F)
     price line ... Inter 700 · 18px · #1e3a5f
     CTA .......... Inter 700 · 18px · #F5841F  + straight arrow
     orange #F5841F · navy #1e3a5f · brand blue #3D6DB5 / #6B9BD1

     ── DEV NOTES ──────────────────────────────────────────────────
     • The video poster is a placeholder frame. Swap in the real
       <video> (22-min platform tour) or use this as its poster image.
       Click target = the orange play button.
     • Guarantee refund is tiered/prorated in your TERMS (off-page):
       0% growth = 100% back, scaling down as growth rises. The page
       copy says "up to 100%" — keep the tiers in the contract only.
     ════════════════════════════════════════════════════════════════ */

  export let videoHref = '#';   // link/target for the platform video
  export let title = 'How much revenue is your business leaving for your competitors?';
</script>

<section class="rev">
  <div class="inner">

    <h2 class="title">{title}</h2>

    <div class="card">

      <!-- LEFT: copy column -->
      <div class="text">
        <p class="hook">"Every customer who didn't book with you today chose <span class="o">someone else.</span>"</p>

        <p class="body">That's not just a marketing problem. That's also a revenue problem &amp; most businesses have no idea how big it is.</p>

        <p class="body">ClearSky fixes it. AI that responds to every call, message, and inquiry the moment it arrives. A platform that gets smarter every month. A support person who runs it for you. And a protected market so your competitor can't have what you have.</p>

        <p class="guarantee">Guaranteed <span class="o">20% revenue growth</span> in your first six months. Don't grow? Get up to 100% back.</p>

        <div class="close">
          <p class="price">Price is the first thing you'll hear — not the last.</p>
          <a class="cta" href={videoHref}>
            <span>View Entire Platform</span>
            <svg width="56" height="18" viewBox="0 0 56 18" fill="none" aria-hidden="true">
              <line x1="0" y1="9" x2="46" y2="9" stroke="#F5841F" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M40 3 L50 9 L40 15" stroke="#F5841F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- gap -->
      <div class="gap"></div>

      <!-- RIGHT: light video poster -->
      <div class="video">
        <a class="poster" href={videoHref} aria-label="Play the platform video">
          <div class="corner"></div>

          <div class="poster-head">
            <div class="poster-title">Here's what <span class="o b">$200</span> gets you.</div>
            <div class="poster-underline"></div>
          </div>

          <div class="device-glyph"><div class="device-screen"></div></div>

          <div class="platform-card">
            <svg width="46" height="30" viewBox="0 0 40 28" fill="none" aria-hidden="true"><path d="M10 22h20a7 7 0 0 0 0-14 9 9 0 0 0-17-2 6 6 0 0 0-3 16z" stroke="#6B9BD1" stroke-width="2"/></svg>
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
  </div>
</section>

<style>
  /* ── section background (site standard) ── */
  .rev { width: 100%; background: #F7F9FC; padding: 40px 0 60px; }
  .inner { max-width: 1440px; margin: 0 auto; padding: 0 30px; box-sizing: border-box; }

  .title {
    font-family: 'Inter', sans-serif; font-weight: 600; font-size: 28px;
    color: #4267AD; text-align: center; margin: 0 0 28px;
  }

  /* ── card + columns ── */
  .card {
    width: 1380px; max-width: 100%; margin: 0 auto;
    background: #ffffff; border: 1px solid #dbe3ee; border-radius: 12px;
    display: flex; align-items: center; box-sizing: border-box;
  }
  .text { width: 800px; flex-shrink: 0; padding: 48px 0 48px 50px; box-sizing: border-box; }
  .gap { width: 40px; flex-shrink: 0; }
  .video { width: 540px; flex-shrink: 0; padding: 48px 50px 48px 0; box-sizing: border-box; }

  .o { color: #F5841F; }
  .o.b { font-weight: 700; }

  /* ── copy ── */
  .hook { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 22px; line-height: 1.38; color: #1e3a5f; margin: 0 0 22px; }
  .body { font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 1.55; color: #444; margin: 0 0 14px; max-width: 700px; }
  .body + .body { margin-bottom: 22px; }
  .guarantee { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 18px; line-height: 1.45; color: #1e3a5f; margin: 0 0 26px; max-width: 700px; }

  .close { display: flex; align-items: center; justify-content: space-between; gap: 24px; max-width: 700px; }
  .price { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 18px; line-height: 1.45; color: #1e3a5f; margin: 0; }
  .cta { display: flex; align-items: center; gap: 10px; flex-shrink: 0; text-decoration: none; }
  .cta span { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 18px; color: #F5841F; white-space: nowrap; }

  /* ── video poster ── */
  .poster {
    position: relative; display: block; width: 100%; height: 300px;
    border-radius: 12px; overflow: hidden; background: #eef2f8;
    border: 1px solid #dbe3ee; text-decoration: none; cursor: pointer;
  }
  .corner { position: absolute; top: 0; right: 0; width: 190px; height: 190px; background: #e2e9f5; border-bottom-left-radius: 100%; }

  .poster-head { position: absolute; top: 22px; left: 26px; right: 26px; z-index: 3; }
  .poster-title { color: #1e3a5f; font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 600; }
  .poster-underline { height: 2px; width: 150px; background: #F5841F; margin-top: 7px; border-radius: 2px; }

  .device-glyph { position: absolute; top: 20px; right: 24px; z-index: 3; width: 30px; height: 22px; border: 1.5px solid #6B9BD1; border-radius: 3px; display: flex; align-items: center; justify-content: center; }
  .device-screen { width: 14px; height: 9px; background: #6B9BD1; border-radius: 1px; }

  .platform-card {
    position: absolute; left: 50%; top: 55%;
    transform: translate(-50%, -50%) perspective(900px) rotateY(-13deg) rotateX(4deg);
    width: 300px; height: 170px; background: #fff; border: 1px solid #d4ddea;
    border-radius: 12px; box-shadow: 0 16px 40px rgba(40,70,120,.18);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
  }
  .platform-card svg { margin-bottom: 8px; }
  .wordmark { font-family: 'Inter', sans-serif; font-size: 30px; font-weight: 800; letter-spacing: .5px; line-height: 1; }
  .cs-clear { color: #3D6DB5; }
  .cs-sky { color: #6B9BD1; }
  .wordmark-sub { font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 3px; color: #9aa7bd; margin-top: 6px; }

  .play { position: absolute; left: 50%; top: 55%; transform: translate(-50%, -50%); z-index: 5; width: 78px; height: 78px; }
  .play-ring { position: absolute; inset: 0; border-radius: 50%; background: #F5841F; animation: vtpulse 2.4s ease-out infinite; }
  .play-btn { position: absolute; inset: 0; border-radius: 50%; background: #F5841F; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 26px rgba(245,132,31,.42); }
  .play-tri { width: 0; height: 0; border-left: 23px solid #fff; border-top: 14px solid transparent; border-bottom: 14px solid transparent; margin-left: 6px; }
  @keyframes vtpulse { 0% { transform: scale(1); opacity: .5; } 70% { transform: scale(1.7); opacity: 0; } 100% { opacity: 0; } }
</style>
