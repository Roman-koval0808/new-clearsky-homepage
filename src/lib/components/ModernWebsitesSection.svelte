<script>
  /* ════════════════════════════════════════════════════════════════
     ClearSky — Trades section #4 · "Modern Websites, Professionally Designed"

     Tinted #F7F9FC band · padding 40 top / 60 bottom · 1440/1380 grid.
     Centered title + intro, then a centered row of three 450px-wide sample
     site mockups. Each mockup is a link to a video (play button is baked
     into the art — no overlay added). Three at 450px + two 15px gaps = 1380,
     exactly the usable width.

     Assets (drop into /images/websites/):
       site-1.jpg  roofing sample site
       site-2.jpg  kitchen / remodel sample site
       site-3.jpg  custom-home sample site
     ════════════════════════════════════════════════════════════════ */

  export let title = 'Modern Websites, Professionally Designed';
  export let intro =
    'Your website should look as professional as the business behind it. ClearSky websites are modern, branded, mobile-friendly, and built to help turn visitors into leads.';
  export let seeLine = 'See three sample designs below';

  export let sites = [
    { src: '/images/websites/site-1.jpg', href: '#', alt: 'Roofing sample website' },
    { src: '/images/websites/site-2.jpg', href: '#', alt: 'Kitchen remodel sample website' },
    { src: '/images/websites/site-3.jpg', href: '#', alt: 'Custom home sample website' }
  ];
</script>

<section class="websites">
  <div class="websites-inner">
    <h2 class="websites-title">{title}</h2>
    <div class="websites-sub">
      <p>{intro}</p>
      <p class="see">{seeLine}</p>
    </div>
    <div class="site-row">
      {#each sites as s}
        <a class="site-card" href={s.href} target="_blank" rel="noopener">
          <img src={s.src} alt={s.alt} />
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .websites { width: 100%; background: #F7F9FC; padding: 40px 0 60px; }
  .websites-inner { max-width: 1440px; margin: 0 auto; padding: 0 30px; box-sizing: border-box; }
  .websites-title { text-align: center; font-family: 'Inter', sans-serif; font-size: 30px; font-weight: 700; color: #4267AD; margin: 0 0 14px; }
  .websites-sub { max-width: 760px; margin: 0 auto; text-align: center; }
  .websites-sub p { font-family: 'Inter', sans-serif; font-size: 17px; line-height: 1.6; color: #1F2A44; margin: 0; }
  .websites-sub .see { margin-top: 10px; font-weight: 600; color: #3D6DB5; }
  .site-row { display: flex; justify-content: center; gap: 15px; margin-top: 40px; }
  .site-card { width: 450px; display: block; border-radius: 8px; overflow: hidden; box-shadow: 0 8px 22px rgba(40,70,120,.12); transition: transform .18s ease, box-shadow .18s ease; }
  .site-card img { width: 100%; height: auto; display: block; }
  .site-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(40,70,120,.18); }
</style>
