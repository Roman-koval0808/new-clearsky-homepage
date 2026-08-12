<script>
  /* ════════════════════════════════════════════════════════════════
     ClearSky — Founders Program section (home-page closer)

     White section with a centered header, two dark navy boxes (with a
     center divider line), and a bottom row of copy + ghost CTA buttons
     + contact. The two buttons open modal explainers.

     ── SECTION BACKGROUND ─────────────────────────────────────────
     white · padding 40px top / 56px bottom · 1440/30 grid

     ── LAYOUT ─────────────────────────────────────────────────────
     dark boxes: left 660  +  56 gap (with 1.5px #A3B6D4 center line)  + right (fills)
     left box: 40px spacer pushes the bordered text frame DOWN so its
       top aligns with the first advantage box on the right.
     bottom row mirrors the columns: left copy 660 (centered) + 56 gap + right block
       right block is pushed to the right (align flex-end).

     ── TYPE / COLOR ───────────────────────────────────────────────
     pill ......... Inter 700 · 13px · #fff on #2D5DA8
     title ........ Inter 700 · 30px · #3D6DB5
     subtitle ..... Inter 700 · 18px · #1F2A44
     dark box ..... #1F2A44 · white text
     adv title .... Inter 700 · 17px · #fff
     buttons ...... E ghost: orange outline + orange text, fill on hover
     contact ...... Inter 600 · 21px · #1F2A44

     ── DEV NOTES ──────────────────────────────────────────────────
     • Modal copy (Protected Market / Guarantee) is drafted — refine as needed.
       Guarantee uses honest "up to 100%" phrasing; tiers stay in TERMS only.
     • Typo fix from Figma: "Softwart" → "Software".
     • Inter already loaded by the nav; no new fonts needed.
     ════════════════════════════════════════════════════════════════ */

  let modal = null; // 'pm' | 'g' | null

  const content = {
    pm: {
      title: 'What is a Protected Market?',
      body: "Each Founder secures their Primary Category within a defined territory. Under strict licensing limits, ClearSky won't enable a direct local competitor in your category and area — so the platform's growth works for you, not against you."
    },
    g: {
      title: 'What is your Guarantee?',
      body: "We guarantee 20% revenue growth in your first six months. If you don't grow, you're covered — up to 100% back. Full terms apply."
    }
  };
</script>

<section class="fp">
  <div class="inner">

    <div class="header">
      <span class="pill">CLEARSKY PARTNER PROGRAM</span>
      <h2 class="title">The ClearSky Founders Program</h2>
      <p class="subtitle">Founders gain the advantage of the ClearSky network before competitors in their market.</p>
    </div>

    <!-- dark boxes -->
    <div class="boxes">
      <div class="dbox dbox-left">
        <div class="frame-spacer"></div>
        <div class="frame">
          <p>The ClearSky Business Platform helps businesses grow through a connected system of discovery, engagement, and intelligent communication.</p>
          <p>Rather than launching everywhere at once, ClearSky introduces the platform through a limited Founders Program. This approach allows each market to maintain meaningful opportunity for participating businesses.</p>
          <p>Founders secure their Primary Category within a defined territory, ensuring the platform grows without enabling direct local competitors within the same category.</p>
          <p>As Founders begin using the platform, ClearSky continuously improves workflows, automation, and AI-driven insights using real-world performance data—so the system evolves based on what actually works in the field.</p>
        </div>
      </div>

      <div class="divider"><span></span></div>

      <div class="dbox dbox-right">
        <h4 class="adv-title">Founder Advantages</h4>
        <div class="adv-list">
          <div class="adv"><h5>Founder Pricing</h5><p>Receive founder pricing at approximately 50% below comparable module packages. Your rate is locked for the first 24 months after activation.</p></div>
          <div class="adv hot"><h5>Market Exclusivity</h5><p>Secure your Primary Category within your territory under strict licensing limits designed to protect market opportunity.</p></div>
          <div class="adv"><h5>Direct Feedback Loop</h5><p>Founders help shape the platform. Real-world performance data improves workflows, automation, and AI recommendations.</p></div>
          <div class="adv"><h5>Compounding System</h5><p>Discovery → Engagement → Conversion → Growth. Each stage strengthens the next, creating a compounding system.</p></div>
        </div>
      </div>
    </div>

    <!-- bottom -->
    <div class="bottom">
      <div class="bottom-left">
        <h3>A Smarter Way to Grow</h3>
        <p>ClearSky is built to turn customer interest into revenue — by connecting every stage of the customer journey into one system.</p>
        <p>But this isn't just about software.</p>
        <p>Small businesses have access to tools that remove the limits that once held them back — missed calls, slow responses, and lost opportunities.</p>
        <h3 class="ai">AI changes the game.</h3>
        <p>And the businesses that embrace it now won't just grow — they'll outpace the market.</p>
      </div>

      <div class="bottom-gap"></div>

      <div class="bottom-right">
        <div class="btn-stack">
          <button class="gbtn" on:click={() => (modal = 'pm')}>What is Protected Market</button>
          <button class="gbtn" on:click={() => (modal = 'g')}>What is your Guarantee</button>
          <div class="contact">ClearSky Software Solutions<br>231 Toke St, Timmins Ontario<br>705-274-9564</div>
        </div>
      </div>
    </div>

  </div>
</section>

{#if modal}
  <div class="overlay" on:click={() => (modal = null)}>
    <div class="modal" on:click|stopPropagation>
      <button class="close" on:click={() => (modal = null)} aria-label="Close">&times;</button>
      <h3>{content[modal].title}</h3>
      <p>{content[modal].body}</p>
    </div>
  </div>
{/if}

<style>
  .fp { width: 100%; background: #fff; }
  .inner { max-width: 1440px; margin: 0 auto; padding: 40px 30px 56px; box-sizing: border-box; }

  .header { text-align: center; margin-bottom: 40px; }
  .pill { display: inline-block; background: #2D5DA8; color: #fff; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: .07em; padding: 7px 18px; border-radius: 999px; margin-bottom: 14px; }
  .title { font-family: 'Inter', sans-serif; font-size: 30px; font-weight: 700; color: #3D6DB5; margin: 0 0 10px; }
  .subtitle { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700; color: #1F2A44; margin: 0; }

  .boxes { display: flex; align-items: stretch; margin-bottom: 48px; }
  .dbox { background: #1F2A44; border-radius: 8px; padding: 28px; box-shadow: 0 12px 32px rgba(31,42,68,.18); }
  .dbox-left { width: 660px; flex-shrink: 0; }
  .dbox-right { flex: 1; }

  .frame-spacer { height: 40px; }
  .frame { border: 1px solid rgba(255,255,255,.28); border-radius: 6px; padding: 28px 30px; }
  .frame p { font-family: 'Inter', sans-serif; font-size: 15.5px; line-height: 1.6; color: rgba(255,255,255,.9); margin: 0 0 16px; }
  .frame p:last-child { margin-bottom: 0; }

  .divider { width: 56px; flex-shrink: 0; display: flex; justify-content: center; }
  .divider span { width: 1.5px; background: #A3B6D4; }

  .adv-title { font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 700; color: #fff; margin: 0 0 18px; }
  .adv-list { display: flex; flex-direction: column; gap: 16px; }
  .adv { border: 1px solid rgba(255,255,255,.22); border-radius: 8px; padding: 16px 20px; }
  .adv.hot { border: 1.5px solid rgba(255,255,255,.85); box-shadow: 0 6px 24px rgba(0,0,0,.35); }
  .adv h5 { font-family: 'Inter', sans-serif; font-size: 17px; font-weight: 700; color: #fff; margin: 0 0 4px; }
  .adv p { font-family: 'Inter', sans-serif; font-size: 14.5px; line-height: 1.5; color: rgba(255,255,255,.8); margin: 0; }

  .bottom { display: flex; align-items: flex-start; }
  .bottom-left { width: 660px; flex-shrink: 0; text-align: center; }
  .bottom-left h3 { font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 700; color: #1F2A44; margin: 0 0 14px; }
  .bottom-left h3.ai { font-size: 20px; margin: 0 0 10px; }
  .bottom-left p { font-family: 'Inter', sans-serif; font-size: 16px; line-height: 1.55; color: #333; margin: 0 0 18px; }
  .bottom-left p:last-child { margin-bottom: 0; }

  .bottom-gap { width: 56px; flex-shrink: 0; }

  .bottom-right { flex: 1; display: flex; flex-direction: column; align-items: flex-end; padding-top: 30px; padding-right: 30px; }
  .btn-stack { display: flex; flex-direction: column; align-items: stretch; }

  /* E — ghost buttons */
  .gbtn {
    background: transparent; color: #F5841F; border: 2px solid #F5841F;
    -webkit-appearance: none; appearance: none;
    font-family: 'Inter', sans-serif; font-weight: 700; font-size: 18px;
    padding: 13px 28px; border-radius: 8px; cursor: pointer; text-align: center;
    transition: background .2s ease, color .2s ease;
  }
  .gbtn:hover { background: #F5841F; color: #fff; }
  .gbtn:first-child { margin-bottom: 16px; }
  .gbtn:nth-child(2) { margin-bottom: 40px; }

  .contact { font-family: 'Inter', sans-serif; font-size: 21px; font-weight: 600; color: #1F2A44; line-height: 1.5; text-align: left; }

  .overlay { position: fixed; inset: 0; background: rgba(15,20,35,.6); z-index: 20; display: flex; align-items: center; justify-content: center; }
  .modal { background: #fff; border-radius: 14px; max-width: 560px; padding: 34px 36px; box-shadow: 0 24px 60px rgba(0,0,0,.4); position: relative; }
  .modal .close { position: absolute; top: 16px; right: 18px; background: none; border: none; font-size: 24px; color: #999; cursor: pointer; line-height: 1; }
  .modal h3 { font-family: 'Inter', sans-serif; font-size: 24px; font-weight: 700; color: #3D6DB5; margin: 0 0 14px; }
  .modal p { font-family: 'Inter', sans-serif; font-size: 17px; line-height: 1.6; color: #333; margin: 0; }
</style>
