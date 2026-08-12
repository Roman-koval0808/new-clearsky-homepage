<script>
  /* ClearSky — Protected Markets · PROTECTION BY SECTOR (MOBILE, 390px).
     Desktop 4-card grid → single-column stacked cards. Each card opens a
     FULL-SCREEN SHEET (slides up, sticky Back/close header, page locked
     behind it) — identical pattern to TradesFeaturesSectionMobile. Sheet holds
     a navy video placeholder (play button + sector-name bar), two stacked CTAs
     (Ask our AI / 15 Minute Consult), and the sizing copy. Copy is verbatim
     from the desktop ProtectedSectorsSection. */
  import { fly, fade } from 'svelte/transition';

  export let title = 'Protection by Sector';
  export let intro =
    "The principle is the same everywhere — every business gets a real opportunity to succeed — but the way we draw the boundary changes with the sector. Open one to see how its license is sized.";

  export let sectors = [
    {
      id: 'trades',
      name: 'Trades & Contractors',
      teaser: 'Population-based, adjusted for how the trade actually operates.',
      thumb: null,
      videoHref: '#',
      paras: [
        "Territory size is based on population — roughly one license for every 12,000 to 15,000 people. We adjust for how each trade operates.",
        "A plumber works year-round, so a smaller base (about 12,000) reliably sustains the business. A roofer typically works six to eight months a year, so a larger base (about 15,000) is needed to draw the same opportunity.",
        "Every difference is defensible. The threshold reflects real demand — not a sales target — so a single license always has the room it needs to grow."
      ]
    },
    {
      id: 'professional',
      name: 'Professional Services',
      teaser: 'Sized much like local trades, within a defined territory.',
      thumb: null,
      videoHref: '#',
      paras: [
        "Professional services are sized much like local trades: population-based, within a clearly defined territory.",
        "One license per defined population band means every practice has the room it needs to grow — with no ClearSky-enabled competitor in the same category and area.",
        "The boundary is drawn so the platform's growth works for you, not against you."
      ]
    },
    {
      id: 'tourism',
      name: 'Tourism',
      teaser: 'Sized by experience type, annual draw, and season length.',
      thumb: null,
      videoHref: '#',
      paras: [
        "Tourism is sized by the experience itself, not just headcount.",
        "We look at the type of experience, its annual draw, and the length of its operating season to set a territory that gives each operator a real opportunity to thrive.",
        "A high-draw seasonal attraction and a year-round venue are protected differently — because their markets behave differently."
      ]
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      teaser: 'Tied to market size nationally — even globally.',
      thumb: null,
      videoHref: '#',
      paras: [
        "Manufacturing is tied to market size rather than local population.",
        "Because manufacturers compete at a national — and often global — scale, we size protection against the addressable market, not a town or region.",
        "Protection is matched to where the business actually competes, so the territory is meaningful at the scale that matters."
      ]
    }
  ];

  let active = null;
  let lockedY = 0;
  function lockBg() {
    lockedY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${lockedY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
  }
  function unlockBg() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    window.scrollTo(0, lockedY);
  }
  const open = (id) => { active = id; lockBg(); };
  const close = () => { if (active) { active = null; unlockBg(); } };
  $: current = sectors.find((s) => s.id === active) || null;
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && close()} />

<section class="ps">
  <div class="ps-inner">
    <h2 class="ps-title">{title}</h2>
    <p class="ps-sub">{intro}</p>
    <div class="ps-stack">
      {#each sectors as s}
        <button class="ps-card" type="button" on:click={() => open(s.id)}>
          <span class="ps-bar"></span>
          <span class="ps-name">{s.name}</span>
          <span class="ps-teaser">{s.teaser}</span>
          <span class="ps-more">How we size it &rarr;</span>
        </button>
      {/each}
    </div>
  </div>
</section>

{#if current}
  <div class="ps-overlay">
    <div class="ps-scrim" on:click={close} transition:fade={{ duration: 250 }}></div>
    <div class="ps-modal" role="dialog" aria-modal="true" aria-label={current.name}
         in:fly={{ y: 420, duration: 320 }} out:fly={{ y: 420, duration: 240 }}>
      <div class="ps-head">
        <button class="ps-hbtn" type="button" on:click={close}>&larr; Back</button>
        <button class="ps-hbtn" type="button" on:click={close}><span class="x">&times;</span> close</button>
      </div>
      <div class="ps-scroll">
        <a class="ps-hero" href={current.videoHref} target="_blank" rel="noopener">
          <div class="ps-hbar">{current.name}</div>
          {#if current.thumb}
            <img src={current.thumb} alt={`${current.name} video`} />
          {:else}
            <span class="ps-thumb"></span>
          {/if}
          <span class="ps-play"></span>
        </a>
        <div class="ps-ctas">
          <a class="ps-cta ai" href="#">Ask our AI</a>
          <a class="ps-cta consult" href="#">15 Minute Consult</a>
        </div>
        <div class="ps-body">
          {#each current.paras as p}<p>{p}</p>{/each}
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .ps { width: 100%; background: #F7F9FC; padding: 36px 20px 48px; box-sizing: border-box; }
  .ps-title { text-align: center; font-family: 'Inter', sans-serif; font-size: 24px; font-weight: 700; color: #4267AD; margin: 0 0 12px; }
  .ps-sub { margin: 0 auto 24px; text-align: center; font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.6; color: #1F2A44; }

  .ps-stack { display: flex; flex-direction: column; gap: 14px; }
  .ps-card { appearance: none; text-align: left; cursor: pointer; background: #fff; border: 1px solid #E6ECF5; border-radius: 12px; padding: 20px 18px 18px; display: flex; flex-direction: column; font-family: inherit; box-shadow: 0 6px 18px rgba(40,70,120,.06); transition: background-color .15s ease; }
  .ps-card:active { background: #F5F8FC; }
  .ps-bar { width: 34px; height: 4px; border-radius: 2px; background: #F5841F; margin: 0 0 14px; }
  .ps-name { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700; color: #1F2A44; margin: 0 0 8px; }
  .ps-teaser { font-family: 'Inter', sans-serif; font-size: 14.5px; line-height: 1.55; color: #1F2A44; margin: 0 0 14px; }
  .ps-more { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700; color: #3D6DB5; }

  /* full-screen sheet (matches TradesFeaturesSectionMobile) */
  .ps-overlay { position: fixed; inset: 0; z-index: 1000; }
  .ps-scrim { position: absolute; inset: 0; background: rgba(20,30,50,.45); }
  .ps-modal { position: absolute; inset: 0; background: #fff; display: flex; flex-direction: column; }
  .ps-head { flex: 0 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; border-bottom: 1px solid #eef1f6; background: #fff; }
  .ps-hbtn { background: none; border: 0; font-family: 'Inter', sans-serif; font-size: 15px; cursor: pointer; color: #5b6b86; padding: 8px 4px; display: inline-flex; align-items: center; gap: 6px; }
  .ps-hbtn:active { color: #1F2A44; }
  .ps-hbtn .x { font-size: 18px; line-height: 1; }
  .ps-scroll { flex: 1 1 auto; overflow-y: auto; -webkit-overflow-scrolling: touch; padding: 18px 20px 36px; }
  .ps-hero { display: block; position: relative; width: 100%; border-radius: 10px; overflow: hidden; box-shadow: 0 10px 26px rgba(0,0,0,.18); text-decoration: none; margin-bottom: 16px; }
  .ps-hero img { width: 100%; height: auto; display: block; }
  .ps-thumb { width: 100%; aspect-ratio: 16/9; background: linear-gradient(135deg,#26456e,#14233a); display: block; }
  .ps-hbar { position: absolute; top: 0; left: 0; right: 0; background: rgba(20,30,50,.80); color: #fff; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700; text-align: center; padding: 8px 10px; z-index: 2; }
  .ps-play { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 58px; height: 58px; border-radius: 50%; background: rgba(255,255,255,.92); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(0,0,0,.3); z-index: 2; }
  .ps-play::after { content: ""; border-style: solid; border-width: 11px 0 11px 19px; border-color: transparent transparent transparent #3D6DB5; margin-left: 4px; }
  .ps-ctas { display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; }
  .ps-cta { display: block; text-align: center; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700; padding: 13px 16px; border-radius: 8px; text-decoration: none; color: #fff; }
  .ps-cta.ai { background: #3D6DB5; }
  .ps-cta.consult { background: #F5841F; }
  .ps-body p { font-family: 'Inter', sans-serif; font-size: 14.5px; line-height: 1.6; color: #333; margin: 0 0 14px; }
  .ps-body p:last-child { margin-bottom: 0; }
</style>
