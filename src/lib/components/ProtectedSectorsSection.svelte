<script>
  /* ════════════════════════════════════════════════════════════════
     ClearSky — Protected Markets page · PROTECTION BY SECTOR (section 2, tinted)

     Tinted #F7F9FC band · 1440/1380 grid · padding 40 top / 60 bottom.
     Four clickable sector cards (Trades, Professional Services, Tourism,
     Manufacturing). Clicking a card opens a modal in the same layout as the
     Trades Features modals: a video thumbnail, two CTAs (Ask our AI /
     15 Minute Consult), and body copy on how that sector's license is sized.

     Each sector may supply a `thumb` (video poster). If null, a navy
     placeholder with a play button is shown. `videoHref`, and the two CTA
     links, are placeholder '#' until real URLs are provided.

     Fonts (dev adds Google Font imports): Inter.
     ════════════════════════════════════════════════════════════════ */

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
  const open = (id) => { active = id; };
  const close = () => { active = null; };
  $: current = sectors.find((s) => s.id === active) || null;
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && close()} />

<section class="sectors">
  <div class="inner">
    <h2 class="title">{title}</h2>
    <p class="sub">{intro}</p>
    <div class="grid">
      {#each sectors as s}
        <button class="card" type="button" on:click={() => open(s.id)}>
          <div class="bar"></div>
          <h3>{s.name}</h3>
          <p>{s.teaser}</p>
          <span class="more">How we size it →</span>
        </button>
      {/each}
    </div>
  </div>
</section>

{#if current}
  <div class="overlay" on:click|self={close}>
    <div class="modal" role="dialog" aria-modal="true" aria-label={current.name}>
      <div class="head">
        <button class="back" type="button" on:click={close}>← Back</button>
        <button class="close" type="button" on:click={close}><span class="x">×</span> close</button>
      </div>
      <div class="top">
        <a class="m-hero" href={current.videoHref} target="_blank" rel="noopener">
          <div class="hero-bar">{current.name}</div>
          {#if current.thumb}
            <img src={current.thumb} alt={`${current.name} video`} />
          {:else}
            <span class="thumb"></span>
          {/if}
          <span class="play"></span>
        </a>
        <div class="cta-col">
          <a class="cta cta-ai" href="#">Ask our AI</a>
          <a class="cta cta-consult" href="#">15 Minute Consult</a>
        </div>
      </div>
      <div class="body">
        {#each current.paras as p}<p>{p}</p>{/each}
      </div>
    </div>
  </div>
{/if}

<style>
  .sectors { width: 100%; background: #F7F9FC; padding: 40px 0 60px; }
  .inner { max-width: 1440px; margin: 0 auto; padding: 0 30px; box-sizing: border-box; }
  .title { text-align: center; font-family: 'Inter', sans-serif; font-size: 30px; font-weight: 700; color: #4267AD; margin: 0 0 14px; }
  .sub { max-width: 780px; margin: 0 auto; text-align: center; font-family: 'Inter', sans-serif; font-size: 17px; line-height: 1.6; color: #1F2A44; }

  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; margin-top: 40px; }
  .card { appearance: none; text-align: left; cursor: pointer; background: #fff; border: 1px solid #E6ECF5; border-radius: 12px; padding: 26px 24px 22px; transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease; display: flex; flex-direction: column; font-family: inherit; }
  .card .bar { width: 34px; height: 4px; border-radius: 2px; background: #F5841F; margin: 0 0 16px; }
  .card h3 { font-family: 'Inter', sans-serif; font-size: 19px; font-weight: 700; color: #1F2A44; margin: 0 0 10px; }
  .card p { font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.6; color: #1F2A44; margin: 0 0 16px; }
  .card .more { margin-top: auto; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700; color: #3D6DB5; }
  .card:hover { transform: translateY(-4px); border-color: #CFE0F2; box-shadow: 0 12px 26px rgba(40,70,120,.12); }
  .card:hover .more { color: #F5841F; }
  @media (max-width: 1100px) { .grid { grid-template-columns: repeat(2, 1fr); } }

  .overlay { position: fixed; inset: 0; background: rgba(20,30,50,.55); display: flex; align-items: flex-start; justify-content: center; padding: 48px 20px; overflow-y: auto; z-index: 1000; }
  .modal { background: #fff; width: 100%; max-width: 920px; border-radius: 10px; padding: 20px 40px 36px; box-shadow: 0 24px 60px rgba(20,30,50,.35); position: relative; box-sizing: border-box; }
  .head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
  .back, .close { background: none; border: 0; font-family: 'Inter', sans-serif; font-size: 15px; cursor: pointer; color: #5b6b86; padding: 4px; display: inline-flex; align-items: center; gap: 6px; }
  .back:hover, .close:hover { color: #1F2A44; }
  .close .x { font-size: 18px; line-height: 1; }
  .top { position: relative; min-height: 240px; margin: 6px 0 22px; }
  .m-hero { display: block; width: 470px; max-width: 72%; margin: 0 auto; border-radius: 8px; overflow: hidden; position: relative; box-shadow: 0 10px 26px rgba(0,0,0,.18); text-decoration: none; }
  .m-hero img { width: 100%; height: auto; display: block; }
  .m-hero .thumb { width: 100%; aspect-ratio: 16/9; background: linear-gradient(135deg,#26456e,#14233a); display: block; }
  .hero-bar { position: absolute; top: 0; left: 0; right: 0; background: rgba(20,30,50,.80); color: #fff; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700; text-align: center; padding: 8px 10px; z-index: 2; }
  .play { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 60px; height: 60px; border-radius: 50%; background: rgba(255,255,255,.92); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(0,0,0,.3); }
  .play::after { content: ""; border-style: solid; border-width: 12px 0 12px 20px; border-color: transparent transparent transparent #3D6DB5; margin-left: 4px; }
  .cta-col { position: absolute; top: 16px; right: 0; display: flex; flex-direction: column; gap: 12px; width: 168px; }
  .cta { display: inline-block; text-align: center; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700; padding: 12px 16px; border-radius: 6px; text-decoration: none; cursor: pointer; border: 0; color: #fff; }
  .cta-ai { background: #3D6DB5; } .cta-ai:hover { background: #335c9b; }
  .cta-consult { background: #F5841F; } .cta-consult:hover { background: #e0741a; }
  .body p { font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.6; color: #333; margin: 0 0 14px; }
  .body p:last-child { margin-bottom: 0; }
</style>
