<script>
  /* ════════════════════════════════════════════════════════════════
     ClearSky — Sectors section ("How does ClearSky grow revenue…")

     White section (alternates with the tinted band before it). Centered
     title, left-aligned intro, then a 4-up row of clickable sector
     cards mapping to the nav business types.

     ── SECTION BACKGROUND ─────────────────────────────────────────
     white · padding 40px top / 60px bottom · 1440/30 grid (1380 usable)

     ── TYPE / COLOR ───────────────────────────────────────────────
     title ...... Inter 600 · 28px · #4267AD · centered
     intro ...... Inter 400 · 18px · #333 · LEFT aligned
     card header  Inter 600 · 15px · #1F2A44 · centered
     caption .... Inter 700 · 15px · #1F2A44 (band #F1EFEF, 70px tall)
     accent ..... #F5841F

     ── CARDS ──────────────────────────────────────────────────────
     4 across · 24px gap · 1px border #d6e0ee · radius 8
     photo area fixed height (300px) with the caption band overlaid
     at the bottom (70px, #F1EFEF).

     ── HOVER (C) ──────────────────────────────────────────────────
     card lifts (-6px) + soft shadow + border turns orange,
     photo zooms (scale 1.06), orange 4px bar wipes in along bottom.

     ── DEV NOTES ──────────────────────────────────────────────────
     • Swap each sector.photo for the real image. Photo sits in an
       overflow:hidden frame so the hover zoom doesn't spill.
     • Each card is an <a> → link to that sector's deep-dive page.
     • Inter already loaded by the nav; no new fonts needed.
     • Intro typo fixes from the Figma draft: "it's pwn" → "its own".
     ════════════════════════════════════════════════════════════════ */

  export let title = 'How does ClearSky grow revenue for your business?';
  export let intro =
    "ClearSky Business Platform (CBP) is organized into four business types: Trades, Tourism, Professional Services and Manufacturers. Each sector has its own customized operating playbook. Clicking the links below, we'll introduce you to the platform features and how we'll achieve revenue growth for your business.";

  export let sectors = [
    { href: '/trades',                photo: '/images/sector-trades.jpg',        caption: 'Builders, roofers, plumbers, HVAC, landscapers, electricians, mechanics' },
    { href: '/tourism',               photo: '/images/sector-tourism.jpg',       caption: 'Lodges, resorts, fishing & hunting outfitters, guides, outdoor recreation & more …', launchingSoon: true },
    { href: '/professional-services', photo: '/images/sector-professional.jpg',  caption: 'Lawyers, accountants, dentists, consultants, chiropractors, architects & more …', launchingSoon: true },
    { href: '/manufacturers',         photo: '/images/sector-manufacturing.jpg', caption: 'Sawmill operations, solid wood fabricators, metal fabricators, manufacturers & more…', launchingSoon: true }
  ];
</script>

<section class="sectors">
  <div class="inner">

    <h2 class="title">{title}</h2>
    <p class="intro">{intro}</p>

    <h3 class="licenses-header">Licenses for Contractors will be available Oct 01/2026 </h3>
    
    <div class="grid">
      {#each sectors as s}
        <a class="card {s.launchingSoon ? 'launching-soon' : ''}" href={s.launchingSoon ? '#' : s.href}>
          <div class="photo">
            <div class="img" style="background-image:url('{s.photo}');"></div>
            {#if s.launchingSoon}
              <div class="launch-overlay">Launching soon</div>
            {/if}
            <div class="accent"></div>
            <div class="caption"><p>{s.caption}</p></div>
          </div>
        </a>
      {/each}
    </div>

  </div>
</section>

<style>
  .sectors { width: 100%; background: #F7F9FC; padding: 40px 0 60px; }
  .inner { max-width: 1440px; margin: 0 auto; padding: 0 30px; box-sizing: border-box; }

  .title {
    font-family: 'Inter', sans-serif; font-weight: 600; font-size: 28px;
    color: #4267AD; text-align: center; margin: 0 0 22px;
  }
  .intro {
    font-family: 'Inter', sans-serif; font-weight: 400; font-size: 18px;
    line-height: 1.55; color: #333; text-align: left; margin: 0 0 20px;
  }

  .grid { display: flex; gap: 24px; }

  .card {
    flex: 1; display: block; text-decoration: none;
    border: 1px solid #d6e0ee; border-radius: 8px; overflow: hidden; background: #fff;
    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
  }

  .header {
    padding: 13px 10px; text-align: center; border-bottom: 1px solid #eef1f5;
    font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 600; color: #1F2A44;
  }

  .photo { position: relative; height: 300px; overflow: hidden; }
  .img {
    position: absolute; inset: 0;
    background-size: cover; background-position: center;
    transition: transform .35s ease;
  }

  .accent {
    position: absolute; left: 0; right: 0; bottom: 0; height: 4px;
    background: #F5841F; transform: scaleX(0); transform-origin: left;
    transition: transform .3s ease; z-index: 4;
  }

  .caption {
    position: absolute; left: 0; right: 0; bottom: 0; height: 70px;
    background: #F1EFEF; display: flex; align-items: center; padding: 0 16px;
  }
  .caption p {
    font-family: 'Inter', sans-serif; font-weight: 700; font-size: 15px;
    line-height: 1.35; color: #1F2A44; margin: 0;
  }

  /* hover C */
  .card:not(.launching-soon):hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 34px rgba(40,70,120,.18);
    border-color: #F5841F;
  }
  .card:not(.launching-soon):hover .img { transform: scale(1.06); }
  .card:not(.launching-soon):hover .accent { transform: scaleX(1); }
  .licenses-header {
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    
  }

  .launch-overlay {
    position: absolute;
    top: 115px; /* Centered in the 230px visible photo area above the caption */
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    background: rgba(225, 225, 225, 0.92);
    color: #000;
    text-align: center;
    font-family: 'Playpen Sans', cursive, sans-serif;
    font-weight: 700;
    font-size: 26px;
    padding: 10px 0;
    z-index: 3;
  }

  .card.launching-soon {
    cursor: default;
  }
</style>
