<script>
  /* ClearSky — Protected Markets page HERO (MOBILE, 390px).
     Desktop 2-col (text left / main-street photo right) → mobile single column,
     TEXT-FIRST then photo (preserves desktop reading order; the 4px-below-nav
     rule is desktop-only, since the visual leads there but text leads on mobile).
     Copy + type locked from source: headline "Your market stays yours"
     (Barlow Condensed 600 / #3D6DB5), two lead paragraphs, two Playpen Sans
     "vow" lines with an orange left bar + navy-bold emphasis. Market-protection
     framing — never "cannibalize". Photo: /images/main-street.jpg. */
  export let eyebrow = 'Protected Markets';
  export let headline = 'Your market stays yours';
  export let leads = [
    "We built ClearSky to make a real difference for the businesses who trusted our capabilities. Enabling a competitor to crowd one of those markets would dishonor the very people who gave us this opportunity to begin with.",
    "So a Protected Market isn't a feature. It's a commitment — every business we partner with gets a genuine opportunity to succeed."
  ];
  export let vows = [
    { pre: 'Failure will never be the result of ', emphasis: 'a competitor we let in.' },
    { pre: 'Failure will never be the result of ', emphasis: 'ClearSky putting our interests above our clients.' }
  ];
  export let photo = '/images/guarantee.jpg';
  export let photoAlt = 'A protected local main street';
</script>

<section class="pmh">
  <div class="pmh-inner">
    <span class="pmh-eyebrow">{eyebrow}</span>
    <h1 class="pmh-headline">{headline}</h1>
    {#each leads as p}<p class="pmh-lead">{p}</p>{/each}
    <div class="pmh-vows">
      {#each vows as v}
        <p class="pmh-vow">{v.pre}<strong>{v.emphasis}</strong></p>
      {/each}
    </div>
    {#if photo}
      <img class="pmh-photo" src={photo} alt={photoAlt} />
    {/if}
  </div>
</section>

<style>
  .pmh { width: 100%; background: #fff; padding: 30px 20px 44px; box-sizing: border-box; }
  .pmh-eyebrow { display: block; font-family: 'Inter', sans-serif; font-size: 12.5px; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; color: #F5841F; margin: 0 0 10px; }
  .pmh-headline { font-family: 'Barlow Condensed', sans-serif; font-weight: 600; font-size: 36px; line-height: 1.04; color: #3D6DB5; margin: 0 0 18px; }
  .pmh-lead { font-family: 'Inter', sans-serif; font-size: 15.5px; line-height: 1.6; color: #1F2A44; margin: 0 0 14px; }
  .pmh-lead:last-of-type { margin-bottom: 0; }

  .pmh-vows { margin: 22px 0 0; padding: 4px 0 4px 16px; border-left: 4px solid #F5841F; }
  .pmh-vow { font-family: 'Playpen Sans', cursive; font-weight: 500; font-size: 17px; line-height: 1.35; color: #1e3a5f; margin: 0 0 12px; }
  .pmh-vow:last-child { margin-bottom: 0; }
  .pmh-vow strong { font-weight: 700; color: #1F2A44; }

  .pmh-photo { display: block; width: 100%; height: auto; border-radius: 12px; margin: 26px 0 0; }
</style>
