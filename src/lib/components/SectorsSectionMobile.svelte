<script>
  /* ════════════════════════════════════════════════════════════════
     ClearSky — Mobile Sectors section (locked)
     "How does ClearSky grow revenue for your business?"

     Separate mobile component (NOT responsive). Frame: 390px.
     Desktop is a 4-across row; mobile is a 2×2 grid.

     ── SECTION ────────────────────────────────────────────────────
     white · padding 36 top / 48 bottom · 20px sides
     title .. Inter 600 / 23px / #4267AD / centered
     intro .. Inter 400 / 15px / #333 / left
     grid ... 2 columns · 14px gap

     ── CARD ───────────────────────────────────────────────────────
     1px border #d6e0ee · radius 8 · header (sector type) on top,
     photo 150px with the #F1EFEF caption band overlaid at the bottom.

     ── ASSETS ─────────────────────────────────────────────────────
     sector.photo paths still to supply (/images/sector-*.jpg);
     gradient placeholders stand in until then.
     ════════════════════════════════════════════════════════════════ */

  export let title = 'How does ClearSky grow revenue for your business?';
  export let intro =
    "ClearSky Business Platform (CBP) is organized into four business types: Trades, Tourism, Professional Services and Manufacturers. Each sector has its own customized operating playbook. Clicking the links below, we'll introduce you to the platform features and how we'll achieve revenue growth for your business.";

  export let sectors = [
    { header: 'you work with your hands',         href: '/trades',                photo: '/images/sector-trades.jpg',        caption: 'Builders, roofers, plumbers, HVAC, landscapers, electricians, mechanics' },
    { header: 'you fulfill lifetime experiences',  href: '/tourism',               photo: '/images/sector-tourism.jpg',       caption: 'Lodges, resorts, fishing & hunting outfitters, guides, outdoor recreation & more …' },
    { header: 'you provide professional services', href: '/professional-services', photo: '/images/sector-professional.jpg',  caption: 'Lawyers, accountants, dentists, consultants, chiropractors, architects & more …' },
    { header: 'you transform resources',           href: '/manufacturers',         photo: '/images/sector-manufacturing.jpg', caption: 'Sawmill operations, solid wood fabricators, metal fabricators, manufacturers & more…' }
  ];

  const bg = (s) => `url('${s.photo}')`;
</script>

<section class="sectors">
  <!-- Hidden per user request 
  <h2 class="title">{title}</h2>
  <p class="intro">{intro}</p>
  -->
  <div class="grid">
    {#each sectors as s}
      <a class="card" href={s.href}>
        <div class="header">{s.header}</div>
        <div class="photo">
          <div class="img" style="background-image:{bg(s)};"></div>
          <div class="caption"><p>{s.caption}</p></div>
        </div>
      </a>
    {/each}
  </div>
</section>

<style>
  .sectors { width: 100%; background: #F7F9FC; padding: 36px 20px 48px; }

  .title {
    font-family: 'Inter', sans-serif; font-weight: 600; font-size: 23px; line-height: 1.25;
    color: #4267AD; text-align: center; margin: 0 0 18px;
  }
  .intro {
    font-family: 'Inter', sans-serif; font-weight: 400; font-size: 15px;
    line-height: 1.55; color: #333; text-align: left; margin: 0 0 26px;
  }

  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

  .card {
    display: block; text-decoration: none;
    border: 1px solid #d6e0ee; border-radius: 8px; overflow: hidden; background: #fff;
  }
  .header {
    padding: 11px 8px; text-align: center; border-bottom: 1px solid #eef1f5;
    font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; line-height: 1.25;
    color: #1F2A44; min-height: 56px; display: flex; align-items: center; justify-content: center;
  }
  .photo { position: relative; height: 220px; overflow: hidden; }
  .img { position: absolute; inset: 0; background-size: cover; background-position: center; }
  .caption {
    position: absolute; left: 0; right: 0; bottom: 0; min-height: 62px;
    background: #F1EFEF; display: flex; align-items: center; padding: 9px 11px;
  }
  .caption p {
    font-family: 'Inter', sans-serif; font-weight: 700; font-size: 11.5px;
    line-height: 1.32; color: #1F2A44; margin: 0;
  }
</style>
