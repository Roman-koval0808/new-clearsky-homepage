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
    { label: 'Custom home sample site', href: '#', src: '/images/trade-images/trade-images-1.png' },
    { label: 'Roofing sample site', href: '#', src: '/images/trade-images/trade-images-2.png' },
    { label: 'Kitchen remodel sample site', href: '#', src: '/images/trade-images/trade-images-3.png' },
    { label: 'Plumbing sample site', href: '#', src: '/images/trade-images/trade-images-4.jpg' }
  ];

  let i = 0;
  $: maxIdx = Math.max(0, sites.length - 3);

  function next() {
    if (i < maxIdx) i++;
  }
  function prev() {
    if (i > 0) i--;
  }
</script>

<section class="websites">
  <div class="websites-inner">
    <h2 class="websites-title">{title}</h2>
    <div class="websites-sub">
      <p>{intro}</p>
      <p class="see">{seeLine}</p>
    </div>
    <div class="carousel-container">
      <button class="nav-btn prev" on:click={prev} disabled={i === 0} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 19l-7-7 7-7"/></svg>
      </button>

      <div class="viewport">
        <div class="site-row" style="transform: translateX(calc({-i} * (100% / 3) + {-i} * 5px));">
          {#each sites as s}
            <a class="site-card mockup-card" href={s.href} target="_blank" rel="noopener" style="background-image: url('{s.src}');">
              <div class="browser-bar">
                <span></span><span></span><span></span>
              </div>
              <div class="play-btn"><div class="play-icon"></div></div>
              <div class="mockup-label-wrapper"><div class="mockup-label">{s.label}</div></div>
            </a>
          {/each}
        </div>
      </div>

      <button class="nav-btn next" on:click={next} disabled={i === maxIdx} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7"/></svg>
      </button>
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
  .carousel-container { display: flex; align-items: center; justify-content: center; gap: 20px; margin-top: 40px; max-width: 100%; }
  .nav-btn { width: 44px; height: 44px; border-radius: 50%; border: 1px solid #d8e2f0; background: #fff; color: #4267AD; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all .2s ease; flex-shrink: 0; padding: 0; box-shadow: 0 4px 12px rgba(40,70,120,.05); }
  .nav-btn:hover:not(:disabled) { background: #4267AD; color: #fff; border-color: #4267AD; transform: scale(1.05); }
  .nav-btn:disabled { opacity: 0.3; cursor: default; }
  .nav-btn svg { width: 24px; height: 24px; stroke-linecap: round; stroke-linejoin: round; }

  .viewport { width: 100%; max-width: 1380px; overflow: hidden; }
  .site-row { display: flex; gap: 15px; transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1); }
  .site-card { width: calc((100% - 30px) / 3); flex-shrink: 0; display: block; border-radius: 8px; overflow: hidden; box-shadow: 0 8px 22px rgba(40,70,120,.12); transition: transform .18s ease, box-shadow .18s ease; text-decoration: none; }
  
  .mockup-card {
    position: relative;
    background-color: #3d6fb3;
    background-size: cover;
    background-position: center;
    aspect-ratio: 4 / 3;
    display: flex;
    flex-direction: column;
  }
  .browser-bar {
    height: 24px;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    padding: 0 12px;
    gap: 6px;
  }
  .browser-bar span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
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
  .mockup-label-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
    padding: 30px 0 16px;
  }
  .mockup-label {
    text-align: center;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 600;
    text-shadow: 0 1px 4px rgba(0,0,0,0.4);
  }

  .site-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(40,70,120,.18); }
  .site-card:hover .play-btn { transform: translate(-50%, -50%) scale(1.05); }
</style>
