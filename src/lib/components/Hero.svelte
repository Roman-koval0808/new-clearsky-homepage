<script>
  import { onMount, onDestroy } from 'svelte';
  import { fly, fade } from 'svelte/transition';

  /* ════════════════════════════════════════════════════════════════
     ClearSky — Hero component
     Sits directly UNDER <Navigation />. Two columns on the same grid
     as the nav: max-width 1440, 30px padding each side (1380 usable).

     ── DESIGN TOKENS ──────────────────────────────────────────────
     brand blue ........ #3D6DB5      pill blue ......... #2D5DA8
     logo light blue ... #6B9BD1      dark navy ......... #1F2A44 / #1e3a5f
     orange (accent) ... #F5841F      chat green ........ #1B5E3B
     voice chip ........ #FEE9E9 / #C0392B
     facebook chip ..... #E8F4FD / #1877F2

     ── FONTS (add to GLOBAL imports) ──────────────────────────────
     Barlow Condensed (headline) · Playpen Sans (subhead + body)
     Barlow (H2 + panel UI) · Inter (nav, separate component)

     ── DEV NOTES ──────────────────────────────────────────────────
     • Image top sits 4px below the nav's drop shadow (margin-top:4px
       on .visual, with Hero placed immediately after Navigation).
     • Photos fade to white on TOP + LEFT edges (baked into the asset),
       so the image bleeds into the white background — NO border,
       NO shadow, NO border-radius on the image itself.
     • To enlarge the carousel +10%, set visualWidth={550}.
     ════════════════════════════════════════════════════════════════ */

  // Width of the right-side signal carousel (native 500; 550 = +10%)
  export let visualWidth = 500;
  export let visualHeight = 545;

  // Sectors cycled by the carousel. Drop real photos + threads here.
  // photo: ~500×545 framing, faded to white on top + left edges.
  export let sectors = [
    {
      pill: 'Tourism & Lodges',
      photo: '/images/trade-images/trade-images-4.jpg',
      messages: [
        { kind: 'user', avatar: 'RD', name: 'Rodger Davidson', chip: 'Missed Call', chipType: 'voice',
          text: '[Voicemail] \u201cMe and my son want to do fall fishing. Any October openings?\u201d' },
        { kind: 'ai', avatar: 'AI',
          text: 'Yes \u2014 we do. Holding two October dates. Sending fall fishing packages now.' },
        { kind: 'divider', label: 'New inquiry' },
        { kind: 'user', avatar: 'CN', name: 'Carla Nieminen', chip: 'Facebook', chipType: 'facebook',
          text: '\u201cAnyone know a good fly-in camp up north? Planning next season \u2014 any recommendations?\u201d' }
      ]
    }
    // Add more sectors (Trades, Construction, Manufacturers, …) each with
    // its own photo + messages; the carousel advances through them in order.
  ];

  // Timing (ms) — matches clearsky-signal-carousel
  const PILL_IN = 500;
  const PANEL_IN = 1400;
  const MSG_GAP = 2200;
  const DIVIDER_GAP = 1600;
  const END_HOLD = 3000;
  const MAX_PANEL_HEIGHT = 210; // px ceiling; older rows clip off the top

  let activeSector = 0;
  let pillVisible = false;
  let panelVisible = false;
  let shown = [];        // messages currently rendered
  let timerKey = 0;      // bump to restart the timer-bar animation
  let cancelled = false;

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  async function runSector(i) {
    pillVisible = false;
    panelVisible = false;
    shown = [];
    await sleep(60);
    if (cancelled) return;

    activeSector = i;
    await sleep(PILL_IN);            pillVisible = true;
    await sleep(PANEL_IN - PILL_IN); panelVisible = true; timerKey++;

    for (const m of sectors[i].messages) {
      await sleep(m.kind === 'divider' ? DIVIDER_GAP : MSG_GAP);
      if (cancelled) return;
      shown = [...shown, m];
    }

    await sleep(END_HOLD);
    if (cancelled) return;
    runSector((i + 1) % sectors.length);
  }

  onMount(() => { runSector(0); });
  onDestroy(() => { cancelled = true; });

  // total time of the active sector, for the timer bar duration
  $: sectorDuration =
    PANEL_IN +
    sectors[activeSector].messages.reduce(
      (t, m) => t + (m.kind === 'divider' ? DIVIDER_GAP : MSG_GAP), 0
    ) + END_HOLD;
</script>

<section class="hero">
  <div class="inner">

    <!-- ── LEFT: text column ── -->
    <div class="text">
      <span class="badge">Efficiencies &amp; Growth</span>

      <h1 class="headline">WE CREATE <span class="accent">UNFAIR</span><br />ADVANTAGES</h1>

      <div class="subhead">
        <p>A platform powered by data that gets smarter the longer you're on it, creating unmatched<br />differentiation when applied to your operations  and business growth processes."</p>
      </div>

      <h2 class="platform">ClearSky Business Platform</h2>
      <p class="body"><strong class="navy">We are Not</strong> <span class="agency">an agency.</span></p>
      <p class="body navy bold">Not a tool.</p>
      <p class="body"><strong class="orange">We are</strong> <strong class="dark">a managed ecosystem that puts AI and data to work for contractors, manufacturers,<br />tourism, and professional services.</strong></p>
    </div>

    <!-- ── RIGHT: live signal carousel ── -->
    <a
      href="/trades"
      class="visual"
      style="width:{visualWidth}px; height:{visualHeight}px;
             background-image:url('{sectors[activeSector].photo}');
             display: block; cursor: pointer;"
    >
      <!-- optional CSS fade in case a photo isn't pre-faded (top + left) -->
      <div class="bleed" aria-hidden="true"></div>

  

      {#if panelVisible}
        <div class="panel" transition:fade={{ duration: 300 }}>
          <div class="panel-head">
            <span class="panel-title">Incoming signals</span>
            <span class="ai-badge">AI</span>
          </div>
          <div class="messages" style="max-height:{MAX_PANEL_HEIGHT}px;">
            {#each shown as m (m)}
              {#if m.kind === 'divider'}
                <div class="divider" in:fade={{ duration: 350 }}>{m.label}</div>
              {:else}
                <div class="row" in:fly={{ y: 14, duration: 400 }}>
                  <div class="av {m.kind === 'ai' ? 'av-ai' : 'av-user'}">{m.avatar}</div>
                  <div class="bubble">
                    {#if m.name}
                      <div class="name">
                        {m.name}
                        {#if m.chip}<span class="chip chip-{m.chipType}">{m.chip}</span>{/if}
                      </div>
                    {/if}
                    <div class="txt {m.kind === 'ai' ? 'txt-ai' : ''}">{m.text}</div>
                  </div>
                </div>
              {/if}
            {/each}
          </div>
        </div>
      {/if}

      {#key timerKey}
        <div class="timer">
          <div class="timer-fill" style="animation-duration:{sectorDuration}ms;"></div>
        </div>
      {/key}
    </a>

  </div>
</section>

<style>
  /* ── layout ── */
  .hero { width: 100%; background: #ffffff; }
  .inner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;
    max-width: 1440px;
    margin: 0 auto;
    padding-left: 30px;        /* same grid as the nav */
    box-sizing: border-box;
  }

  /* ── left text column ── */
  .text { flex: 1; padding-top: 40px; }

  .badge {
    display: inline-block;
    background: #2D5DA8; color: #fff;
    font-family: 'Barlow', sans-serif; font-weight: 600; font-size: 15px;
    padding: 7px 18px; border-radius: 999px; margin-bottom: 24px;
  }

  .headline {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800; font-size: 64px; line-height: 1.0;
    letter-spacing: -0.5px; text-transform: uppercase;
    color: #3D6DB5; margin: 0 0 24px;
  }
  .headline .accent { color: #F5841F; }

  .subhead { border-left: 3px solid #F5841F; padding-left: 16px; margin-bottom: 32px; }
  .subhead p {
    font-family: 'Playpen Sans', cursive, sans-serif;
    font-weight: 700; font-size: 18px; line-height: 1.35;
    color: #111111; margin: 0;
  }

  .platform {
    font-family: 'Barlow', sans-serif; font-weight: 700; font-size: 19px;
    color: #3D6DB5; margin: 0 0 12px;
  }
  .body {
    font-family: 'Playpen Sans', cursive, sans-serif; font-size: 18px; line-height: 1.35;
    color: #111111; margin: 0;
  }
  .body + .body { margin-top: 2px; }
  .body.navy.bold { color: #1e3a5f; font-weight: 700; margin: 2px 0; }
  .navy { color: #1e3a5f; font-weight: 700; }
  .agency { color: #5A6B82; font-weight: 400; }
  .orange { color: #F5841F; font-weight: 700; }
  .dark { color: #111111; font-weight: 700; }

  /* ── right visual / signal carousel ──
     Image bleeds into white: no border, no shadow, no radius.
     Top sits 4px below the nav shadow via margin-top. ── */
  .visual {
    position: relative;
    flex-shrink: 0;
    margin-top: 4px;
    overflow: hidden;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    font-family: 'Barlow', sans-serif;
  }

  /* fallback fade (top + left); harmless if the photo is already faded */
  .bleed {
    position: absolute; inset: 0; pointer-events: none; z-index: 2;
    background:
      linear-gradient(100deg, #fff 0%, rgba(255,255,255,0.9) 16%, rgba(255,255,255,0) 46%),
      linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.6) 7%, rgba(255,255,255,0) 24%);
  }

  /* sector pill */
  .pill {
    position: absolute; top: 18px; left: 14px; z-index: 3;
    display: flex; align-items: center; gap: 7px;
    padding: 6px 14px; border-radius: 30px; background: rgba(0,0,0,0.45);
    backdrop-filter: blur(8px);
  }
  .dot { width: 7px; height: 7px; border-radius: 50%; background: #58d68d; animation: blink 1.5s infinite; }
  @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0.2; } }
  .pill-text { font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; }

  /* chat panel — anchored bottom-right, grows upward */
  .panel {
    position: absolute; bottom: 0; right: 0; z-index: 4;
    width: 360px; background: #fff;
    border-radius: 14px 0 0 0;
    box-shadow: -4px -4px 24px rgba(0,0,0,0.12);
    overflow: hidden;
  }
  .panel-head {
    display: flex; align-items: center; justify-content: space-between;
    padding: 10px 14px; border-bottom: 1px solid #f0f0f0;
  }
  .panel-title { font-size: 11px; color: #aaa; font-weight: 500; }
  .ai-badge { background: #1B5E3B; color: #fff; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 4px; letter-spacing: 0.04em; }

  .messages { padding: 12px 14px; display: flex; flex-direction: column; gap: 10px; overflow: hidden; }
  .row { display: flex; align-items: flex-start; gap: 8px; }
  .av { width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; flex-shrink: 0; margin-top: 1px; }
  .av-user { background: #e8e8e8; color: #555; }
  .av-ai { background: #1B5E3B; color: #fff; }
  .bubble { flex: 1; }
  .name { font-size: 10.5px; font-weight: 700; color: #1e3a5f; margin-bottom: 2px; display: flex; align-items: center; gap: 5px; flex-wrap: wrap; }
  .chip { font-size: 9.5px; font-weight: 600; padding: 1px 6px; border-radius: 3px; }
  .chip-voice { background: #FEE9E9; color: #C0392B; }
  .chip-facebook { background: #E8F4FD; color: #1877F2; }
  .txt { font-size: 11.5px; color: #333; line-height: 1.45; }
  .txt-ai { color: #1B5E3B; font-weight: 500; }

  .divider {
    display: flex; align-items: center; gap: 8px;
    font-size: 10px; color: #ccc; font-weight: 600;
    letter-spacing: 0.05em; text-transform: uppercase;
  }
  .divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: #efefef; }

  /* timer bar */
  .timer { position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: rgba(0,0,0,0.06); z-index: 4; }
  .timer-fill { height: 100%; width: 0; background: #1B5E3B; animation: fill linear forwards; }
  @keyframes fill { from { width: 0; } to { width: 100%; } }
</style>
