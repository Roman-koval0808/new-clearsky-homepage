<script>
  import { onMount, onDestroy } from 'svelte';
  import { fly, fade } from 'svelte/transition';

  /* ════════════════════════════════════════════════════════════════
     ClearSky — Mobile Hero (locked)
     Separate mobile component (NOT responsive). Frame: 390px.
     Sits directly under <NavigationMobile />.

     Layout: STACKED — text column first, then the live signal carousel
     below it. (Desktop is two columns; mobile stacks, preserving the
     desktop reading order text → visual.)

     ── MOBILE SIZING (scaled from desktop) ───────────────────────────
     headline .. Barlow Condensed 800 / 46px (desktop 64)
     subhead ... Playpen Sans 18px, orange left bar
     platform .. Barlow 700 / 17px
     body ...... Playpen Sans 16px, navy-bold + orange-bold emphasis
     carousel .. full content width, 380px tall; chat panel 300px

     ── ASSET ─────────────────────────────────────────────────────────
     Photo `/images/hero-tourism.png` (faded top+left) still to supply;
     a blue gradient placeholder stands in until then.
     ════════════════════════════════════════════════════════════════ */

  export let visualHeight = 380;

  export let sectors = [
    {
      pill: 'Tourism & Lodges',
      photo: '/images/trade-images/trade-images-4.jpg',
      messages: [
        { kind: 'user', avatar: 'RD', name: 'Rodger Davidson', chip: 'Missed Call', chipType: 'voice',
          text: '[Voicemail] I would like to make an appointment on Tuesday Sept 22nd at 11:00 am' },
        { kind: 'ai', avatar: 'AI',
          text: 'Your appointment has been confirmed, we will send you a reminder the day before.' },
        { kind: 'divider', label: 'New inquiry' },
        { kind: 'user', avatar: 'CN', name: 'Carla Nieminen', chip: 'Facebook', chipType: 'facebook',
          text: 'I like the before and after photos, you guys did a great job.  Can I get a quote from you?' }
      ]
    }
  ];

  const PILL_IN = 500;
  const PANEL_IN = 1400;
  const MSG_GAP = 2200;
  const DIVIDER_GAP = 1600;
  const END_HOLD = 3000;
  const MAX_PANEL_HEIGHT = 210;

  let activeSector = 0;
  let pillVisible = false;
  let panelVisible = false;
  let shown = [];
  let timerKey = 0;
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

  $: sectorDuration =
    PANEL_IN +
    sectors[activeSector].messages.reduce(
      (t, m) => t + (m.kind === 'divider' ? DIVIDER_GAP : MSG_GAP), 0
    ) + END_HOLD;
</script>

<section class="hero">
  <span class="badge">Guaranteed 20% revenue growth</span>

  <h1 class="headline">We create <span class="accent">unfair</span><br />advantages</h1>

  <div class="subhead">
    <p>A platform that gets smarter and works harder the longer you're on it.
       Offering protected markets, &amp; a revenue growth guarantee.</p>
  </div>

  <h2 class="platform">ClearSky Business Platform</h2>
  <p class="body"><strong class="navy">We are Not</strong> an agency.</p>
  <p class="body navy bold">Not a tool.</p>
  <p class="body"><strong class="orange">We are</strong> a managed growth ecosystem built for
     contractors, manufacturers, tourism, and professional services who want to grow their business.</p>

  <!-- live signal carousel - hidden on mobile per user request -->
  <!-- 
  <div
    class="visual"
    style="height:{visualHeight}px; background-image:url('{sectors[activeSector].photo}');"
  >
...
  </div>
  -->
</section>

<style>
  .hero { background: #fff; padding: 26px 20px 0px; }

  .badge {
    display: inline-block; background: #2D5DA8; color: #fff;
    font-family: 'Barlow', sans-serif; font-weight: 600; font-size: 13px;
    padding: 7px 16px; border-radius: 999px; margin-bottom: 20px;
  }

  .headline {
    font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 46px;
    line-height: 1.02; letter-spacing: -0.5px; text-transform: uppercase;
    color: #3D6DB5; margin: 0 0 20px;
  }
  .headline .accent { color: #F5841F; }

  .subhead { border-left: 4px solid #F5841F; padding-left: 14px; margin-bottom: 26px; }
  .subhead p {
    font-family: 'Playpen Sans', cursive; font-weight: 500; font-size: 18px;
    line-height: 1.4; color: #1F2A44; margin: 0;
  }

  .platform { font-family: 'Barlow', sans-serif; font-weight: 700; font-size: 17px; color: #3D6DB5; margin: 0 0 9px; }
  .body { font-family: 'Playpen Sans', cursive; font-size: 16px; line-height: 1.35; color: #333; margin: 0; }
  .body.navy.bold { color: #1e3a5f; font-weight: 700; }
  .body:last-of-type { margin-top: 2px; }
  .navy { color: #1e3a5f; font-weight: 700; }
  .orange { color: #F5841F; font-weight: 700; }

  /* signal carousel — image bleeds (no border/shadow/radius on photo itself) */
  .visual {
    position: relative; width: 100%; margin-top: 28px; overflow: hidden; border-radius: 12px;
    background-color: #7ba5cf;
    background-image: linear-gradient(135deg, #b8d0e8 0%, #7ba5cf 55%, #4a7ab0 100%); /* placeholder */
    background-size: cover; background-position: center top; background-repeat: no-repeat;
    font-family: 'Barlow', sans-serif;
  }
  .bleed {
    position: absolute; inset: 0; pointer-events: none; z-index: 2;
    background:
      linear-gradient(100deg, #fff 0%, rgba(255,255,255,0.85) 14%, rgba(255,255,255,0) 42%),
      linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.55) 7%, rgba(255,255,255,0) 22%);
  }

  .pill {
    position: absolute; top: 16px; left: 14px; z-index: 3;
    display: flex; align-items: center; gap: 7px; padding: 6px 13px;
    border-radius: 30px; background: rgba(0,0,0,0.45); backdrop-filter: blur(8px);
  }
  .dot { width: 7px; height: 7px; border-radius: 50%; background: #58d68d; animation: blink 1.5s infinite; }
  @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0.2; } }
  .pill-text { font-size: 10.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; }

  .panel {
    position: absolute; bottom: 0; right: 0; z-index: 4; width: 300px; background: #fff;
    border-radius: 14px 0 0 0; box-shadow: -4px -4px 24px rgba(0,0,0,0.12); overflow: hidden;
  }
  .panel-head { display: flex; align-items: center; justify-content: space-between; padding: 9px 13px; border-bottom: 1px solid #f0f0f0; }
  .panel-title { font-size: 10.5px; color: #aaa; font-weight: 500; }
  .ai-badge { background: #1B5E3B; color: #fff; font-size: 9.5px; font-weight: 700; padding: 2px 8px; border-radius: 4px; letter-spacing: 0.04em; }

  .messages { padding: 11px 13px; display: flex; flex-direction: column; gap: 9px; overflow: hidden; }
  .row { display: flex; align-items: flex-start; gap: 8px; }
  .av { width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 8.5px; font-weight: 700; flex-shrink: 0; margin-top: 1px; }
  .av-user { background: #e8e8e8; color: #555; }
  .av-ai { background: #1B5E3B; color: #fff; }
  .bubble { flex: 1; }
  .name { font-size: 10px; font-weight: 700; color: #1e3a5f; margin-bottom: 2px; display: flex; align-items: center; gap: 5px; flex-wrap: wrap; }
  .chip { font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 3px; }
  .chip-voice { background: #FEE9E9; color: #C0392B; }
  .chip-facebook { background: #E8F4FD; color: #1877F2; }
  .txt { font-size: 11px; color: #333; line-height: 1.45; }
  .txt-ai { color: #1B5E3B; font-weight: 500; }

  .divider { display: flex; align-items: center; gap: 8px; font-size: 9.5px; color: #ccc; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; }
  .divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: #efefef; }

  .timer { position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: rgba(0,0,0,0.06); z-index: 4; }
  .timer-fill { height: 100%; width: 0; background: #1B5E3B; animation: fill linear forwards; }
  @keyframes fill { from { width: 0; } to { width: 100%; } }
</style>
