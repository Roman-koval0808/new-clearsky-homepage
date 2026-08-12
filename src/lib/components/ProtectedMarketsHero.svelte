<script>
  /* ════════════════════════════════════════════════════════════════
     ClearSky — Protected Markets page · HERO (section 1, white)

     Two-column hero (same pattern as the other page heroes): commitment
     copy on the left, Main Street photo on the right. The photo carries a
     baked-in left fade, so it bleeds into the white background with no
     frame, and sits 4px below the nav shadow (locked detail, matches home).

     Fonts (dev adds Google Font imports): Inter, Barlow Condensed, Playpen Sans.
     Asset: /images/main-street.jpg  (native 600×531)
     ════════════════════════════════════════════════════════════════ */

  export let eyebrow = 'Protected Markets';
  export let headline = 'Your market stays yours';
  export let leads = [
    "We built ClearSky to make a real difference for the businesses who trusted our capabilities. Enabling a competitor to crowd one of those markets would dishonor the very people who gave us this opportunity to begin with.",
    "So a Protected Market isn't a feature. It's a commitment — every business we partner with gets a genuine opportunity to succeed."
  ];
  // Each commitment line: plain lead-in + a navy-bold emphasis phrase.
  export let vows = [
    { pre: 'Failure will never be the result of ', emphasis: 'a competitor we let in.' },
    { pre: 'Failure will never be the result of ', emphasis: 'ClearSky putting our interests above our clients.' }
  ];
  export let mainStreetSrc = '/images/main-street.jpg';
  export let mainStreetAlt = 'Main Street — local trades vans on a small-town street';
</script>

<section class="hero">
  <div class="inner">
    <div class="left">
      <p class="eyebrow">{eyebrow}</p>
      <h1>{headline}</h1>
      {#each leads as l}<p class="lead">{l}</p>{/each}
      <div class="vow">
        {#each vows as v}<p>{v.pre}<span class="accent">{v.emphasis}</span></p>{/each}
      </div>
    </div>
    <div class="right">
      <img src={mainStreetSrc} alt={mainStreetAlt} />
    </div>
  </div>
</section>

<style>
  .hero { width: 100%; background: #fff; }
  .inner { max-width: 1440px; margin: 0 auto; padding: 0 30px 56px; display: flex; gap: 44px; align-items: flex-start; box-sizing: border-box; }
  .left { flex: 1; max-width: 600px; padding-top: 30px; }
  .right { flex-shrink: 0; width: 600px; padding-top: 4px; }
  .right img { width: 100%; height: auto; display: block; }

  .eyebrow { font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 600; color: #1F2A44; margin: 0 0 14px; }
  h1 { font-family: 'Barlow Condensed', sans-serif; font-weight: 600; font-size: 46px; line-height: 1.05; color: #3D6DB5; margin: 0 0 22px; }
  .lead { font-family: 'Inter', sans-serif; font-size: 16px; line-height: 1.6; color: #1F2A44; margin: 0 0 16px; }

  .vow { margin: 26px 0 0; border-left: 4px solid #F5841F; padding: 6px 0 6px 22px; }
  .vow p { font-family: 'Playpen Sans', cursive; font-weight: 500; font-size: 20px; line-height: 1.35; color: #1e3a5f; margin: 0; }
  .vow p + p { margin-top: 10px; }
  .vow .accent { color: #1e3a5f; font-weight: 700; }

  @media (max-width: 1100px) {
    .inner { flex-direction: column; }
    .right { width: 100%; }
  }
</style>
