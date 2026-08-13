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
    { label: 'Roofing sample site', href: '#' },
    { label: 'Kitchen remodel sample site', href: '#' },
    { label: 'Custom home sample site', href: '#' }
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
        <a class="site-card mockup-card" href={s.href} target="_blank" rel="noopener">
          <div class="browser-bar">
            <span></span><span></span><span></span>
          </div>
          <div class="play-btn"><div class="play-icon"></div></div>
          <div class="mockup-label">{s.label}</div>
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
  .site-card { width: 450px; display: block; border-radius: 8px; overflow: hidden; box-shadow: 0 8px 22px rgba(40,70,120,.12); transition: transform .18s ease, box-shadow .18s ease; text-decoration: none; }
  
  .mockup-card {
    position: relative;
    background: linear-gradient(160deg, #3d6fb3 0%, #294c7d 100%);
    aspect-ratio: 4 / 3;
    display: flex;
    flex-direction: column;
  }
  .browser-bar {
    height: 24px;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    padding: 0 12px;
    gap: 6px;
  }
  .browser-bar span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
  }
  .play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 64px;
    height: 64px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 6px 16px rgba(0,0,0,0.25);
    transition: transform 0.2s ease;
  }
  .play-icon {
    width: 0; 
    height: 0; 
    border-style: solid; 
    border-width: 10px 0 10px 16px; 
    border-color: transparent transparent transparent #3d6fb3;
    margin-left: 4px;
  }
  .mockup-label {
    position: absolute;
    bottom: 24px;
    left: 0;
    width: 100%;
    text-align: center;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 600;
  }

  .site-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(40,70,120,.18); }
  .site-card:hover .play-btn { transform: translate(-50%, -50%) scale(1.05); }
</style>
