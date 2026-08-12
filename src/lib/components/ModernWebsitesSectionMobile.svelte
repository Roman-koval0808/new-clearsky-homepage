<script>
  /* ClearSky — Modern Websites (MOBILE, 390px). Desktop 3-across row →
     swipeable carousel (one mockup per view) with dot indicators. Tinted
     #F7F9FC band. Same copy as desktop; see-line reworded for the carousel. */
  export let title = 'Modern Websites, Professionally Designed';
  export let intro = 'Your website should look as professional as the business behind it. ClearSky websites are modern, branded, mobile-friendly, and built to help turn visitors into leads.';
  export let seeLine = 'Swipe through three sample designs';
  export let sites = [
    { src: '/images/websites/site-1.jpg', href: '#', alt: 'Roofing sample website' },
    { src: '/images/websites/site-2.jpg', href: '#', alt: 'Kitchen remodel sample website' },
    { src: '/images/websites/site-3.jpg', href: '#', alt: 'Custom home sample website' }
  ];

  let i = 0;
  let x0 = null;
  const go = (k) => { i = (k + sites.length) % sites.length; };
  const onStart = (e) => { x0 = e.touches[0].clientX; };
  const onEnd = (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
    x0 = null;
  };
</script>

<section class="wc">
  <div class="wc-inner">
    <h2 class="title">{title}</h2>
    <p class="intro">{intro}</p>
    <p class="see">{seeLine}</p>
  </div>

  <div class="viewport" on:touchstart={onStart} on:touchend={onEnd}>
    <div class="track" style={`transform: translateX(${-i * 100}%)`}>
      {#each sites as s}
        <div class="slide">
          <a class="site" href={s.href} target="_blank" rel="noopener">
            <img src={s.src} alt={s.alt} />
          </a>
        </div>
      {/each}
    </div>
  </div>

  <div class="dots">
    {#each sites as _, k}
      <button class="dot" class:active={k === i} on:click={() => go(k)} aria-label={`Go to slide ${k + 1}`}></button>
    {/each}
  </div>
</section>

<style>
  .wc { width: 100%; background: #F7F9FC; padding: 36px 0 48px; }
  .wc-inner { padding: 0 20px; }
  .title { text-align: center; font-family: 'Inter', sans-serif; font-size: 23px; font-weight: 700; color: #4267AD; line-height: 1.28; margin: 0 0 12px; }
  .intro { text-align: center; font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.58; color: #1F2A44; margin: 0; }
  .see { text-align: center; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 600; color: #3D6DB5; margin: 10px 0 0; }
  .viewport { margin-top: 26px; overflow: hidden; touch-action: pan-y; }
  .track { display: flex; transition: transform .35s ease; }
  .slide { flex: 0 0 100%; padding: 0 20px; }
  .site { display: block; width: 100%; border-radius: 10px; overflow: hidden; box-shadow: 0 8px 22px rgba(40,70,120,.16); }
  .site img { width: 100%; height: auto; display: block; }
  .dots { display: flex; justify-content: center; gap: 9px; margin-top: 18px; }
  .dot { width: 8px; height: 8px; border-radius: 50%; border: 0; padding: 0; background: #c2cede; cursor: pointer; transition: background .2s ease, width .2s ease; }
  .dot.active { background: #3D6DB5; width: 22px; border-radius: 5px; }
</style>
