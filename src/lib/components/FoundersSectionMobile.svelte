<script>
  /* ════════════════════════════════════════════════════════════════
     ClearSky — Mobile Founders Program section (locked, home-page closer)

     Separate mobile component (NOT responsive). Frame: 390px.
     Desktop = two dark boxes side-by-side (center divider) + a two-column
     bottom row. Mobile = everything STACKED into one column; the desktop
     center divider line and the 40px alignment spacer are dropped, ghost
     buttons go full-width, contact centered.

     ── SECTION ────────────────────────────────────────────────────
     white · padding 36 top / 44 bottom · 20px sides
     pill ..... Inter 700 / 11px / #fff on #2D5DA8
     title .... Inter 700 / 24px / #3D6DB5
     dark box . #1F2A44 · white text · framed paragraphs + advantage cards
               (Market Exclusivity = highlighted "hot" card)
     buttons .. ghost orange (full width); open Protected-Market / Guarantee modals
     contact .. centered, Inter 600 / 17px

     NOTE: Guarantee modal keeps the locked "up to 100% back" wording.
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

  function onKey(e) { if (e.key === 'Escape') modal = null; }
</script>

<svelte:window on:keydown={onKey} />

<section class="fp">
  <div class="header">
    <span class="pill">CLEARSKY PARTNER PROGRAM</span>
    <h2 class="title">The ClearSky Founders Program</h2>
    <p class="subtitle">Founders gain the advantage of the ClearSky network before competitors in their market.</p>
  </div>

  <div class="boxes">
    <div class="dbox">
      <div class="frame">
        <p>The ClearSky Business Platform helps businesses grow through a connected system of discovery, engagement, and intelligent communication.</p>
        <p>Rather than launching everywhere at once, ClearSky introduces the platform through a limited Founders Program. This approach allows each market to maintain meaningful opportunity for participating businesses.</p>
        <p>Founders secure their Primary Category within a defined territory, ensuring the platform grows without enabling direct local competitors within the same category.</p>
        <p>As Founders begin using the platform, ClearSky continuously improves workflows, automation, and AI-driven insights using real-world performance data—so the system evolves based on what actually works in the field.</p>
      </div>
    </div>

    <div class="dbox">
      <h4 class="adv-title">Founder Advantages</h4>
      <div class="adv-list">
        <div class="adv"><h5>Founder Pricing</h5><p>Receive founder pricing at approximately 50% below comparable module packages. Your rate is locked for the first 24 months after activation.</p></div>
        <div class="adv hot"><h5>Market Exclusivity</h5><p>Secure your Primary Category within your territory under strict licensing limits designed to protect market opportunity.</p></div>
        <div class="adv"><h5>Direct Feedback Loop</h5><p>Founders help shape the platform. Real-world performance data improves workflows, automation, and AI recommendations.</p></div>
        <div class="adv"><h5>Compounding System</h5><p>Discovery → Engagement → Conversion → Growth. Each stage strengthens the next, creating a compounding system.</p></div>
      </div>
    </div>
  </div>

  <div class="bottom-left">
    <h3>A Smarter Way to Grow</h3>
    <p>ClearSky is built to turn customer interest into revenue — by connecting every stage of the customer journey into one system.</p>
    <p>But this isn't just about software.</p>
    <p>Small businesses have access to tools that remove the limits that once held them back — missed calls, slow responses, and lost opportunities.</p>
    <h3 class="ai">AI changes the game.</h3>
    <p>And the businesses that embrace it now won't just grow — they'll outpace the market.</p>
  </div>

  <div class="btn-stack">
    <button class="gbtn" on:click={() => (modal = 'pm')}>What is Protected Market</button>
    <button class="gbtn" on:click={() => (modal = 'g')}>What is your Guarantee</button>
  </div>
  <div class="contact">ClearSky Software Solutions<br>231 Toke St, Timmins Ontario<br>705-274-9564</div>
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
  .fp { width: 100%; background: #fff; padding: 36px 20px 44px; font-family: 'Inter', sans-serif; }

  .header { text-align: center; margin-bottom: 26px; }
  .pill { display: inline-block; background: #2D5DA8; color: #fff; font-size: 11px; font-weight: 700; letter-spacing: .07em; padding: 6px 15px; border-radius: 999px; margin-bottom: 13px; }
  .title { font-size: 24px; font-weight: 700; color: #3D6DB5; margin: 0 0 9px; line-height: 1.2; }
  .subtitle { font-size: 16px; font-weight: 700; color: #1F2A44; margin: 0; line-height: 1.4; }

  .boxes { display: flex; flex-direction: column; gap: 18px; margin-bottom: 32px; }
  .dbox { background: #1F2A44; border-radius: 8px; padding: 22px; box-shadow: 0 12px 32px rgba(31,42,68,.18); }

  .frame { border: 1px solid rgba(255,255,255,.28); border-radius: 6px; padding: 20px 18px; }
  .frame p { font-size: 14.5px; line-height: 1.6; color: rgba(255,255,255,.9); margin: 0 0 14px; }
  .frame p:last-child { margin-bottom: 0; }

  .adv-title { font-size: 19px; font-weight: 700; color: #fff; margin: 0 0 16px; }
  .adv-list { display: flex; flex-direction: column; gap: 14px; }
  .adv { border: 1px solid rgba(255,255,255,.22); border-radius: 8px; padding: 15px 17px; }
  .adv.hot { border: 1.5px solid rgba(255,255,255,.85); box-shadow: 0 6px 24px rgba(0,0,0,.35); }
  .adv h5 { font-size: 16px; font-weight: 700; color: #fff; margin: 0 0 4px; }
  .adv p { font-size: 13.5px; line-height: 1.5; color: rgba(255,255,255,.8); margin: 0; }

  .bottom-left { text-align: center; margin-bottom: 26px; }
  .bottom-left h3 { font-size: 20px; font-weight: 700; color: #1F2A44; margin: 0 0 12px; }
  .bottom-left h3.ai { font-size: 18px; margin: 0 0 9px; }
  .bottom-left p { font-size: 15px; line-height: 1.55; color: #333; margin: 0 0 15px; }
  .bottom-left p:last-child { margin-bottom: 0; }

  .btn-stack { display: flex; flex-direction: column; gap: 14px; }
  .gbtn {
    background: transparent; color: #F5841F; border: 2px solid #F5841F;
    -webkit-appearance: none; appearance: none;
    font-family: 'Inter', sans-serif; font-weight: 700; font-size: 16px;
    padding: 13px 20px; border-radius: 8px; cursor: pointer; text-align: center; width: 100%;
    transition: background .2s ease, color .2s ease;
  }
  .gbtn:hover { background: #F5841F; color: #fff; }
  .contact { font-size: 17px; font-weight: 600; color: #1F2A44; line-height: 1.5; text-align: center; margin-top: 16px; }

  .overlay { position: fixed; inset: 0; background: rgba(15,20,35,.6); z-index: 20; display: flex; align-items: center; justify-content: center; padding: 20px; }
  .modal { background: #fff; border-radius: 14px; max-width: 340px; width: 100%; padding: 28px 24px; box-shadow: 0 24px 60px rgba(0,0,0,.4); position: relative; }
  .modal .close { position: absolute; top: 12px; right: 14px; background: none; border: none; font-size: 24px; color: #999; cursor: pointer; line-height: 1; }
  .modal h3 { font-size: 21px; font-weight: 700; color: #3D6DB5; margin: 0 0 12px; padding-right: 20px; }
  .modal p { font-size: 15.5px; line-height: 1.6; color: #333; margin: 0; }
</style>
