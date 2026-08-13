<script>
  /* ClearSky — Modern Websites (MOBILE, 390px). Desktop 3-across row →
     swipeable carousel (one mockup per view) with dot indicators. Tinted
     #F7F9FC band. Same copy as desktop; see-line reworded for the carousel. */
  export let title = 'Modern Websites, Professionally Designed';
  export let intro = 'Your website should look as professional as the business behind it. ClearSky websites are modern, branded, mobile-friendly, and built to help turn visitors into leads.';
  export let seeLine = 'Swipe through three sample designs';
  export let sites = [
    { label: 'Custom home sample site', href: '#', src: '/images/trade-images/trade-images-1.png' },
    { label: 'Roofing sample site', href: '#', src: '/images/trade-images/trade-images-2.png' },
    { label: 'Kitchen remodel sample site', href: '#', src: '/images/trade-images/trade-images-3.png' },
    { label: 'Plumbing sample site', href: '#', src: '/images/trade-images/trade-images-4.jpg' }
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
          <a class="site mockup-card" href={s.href} target="_blank" rel="noopener" style="background-image: url('{s.src}');">
            <div class="browser-bar">
              <span></span><span></span><span></span>
            </div>
            <div class="play-btn"><div class="play-icon"></div></div>
            <div class="mockup-label-wrapper"><div class="mockup-label">{s.label}</div></div>
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
  .slide { flex: 0 0 100%; padding: 0 20px; box-sizing: border-box; }
  .site { display: block; width: 100%; border-radius: 10px; overflow: hidden; box-shadow: 0 8px 22px rgba(40,70,120,.16); text-decoration: none; }
  
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
    width: 56px;
    height: 56px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 6px 16px rgba(0,0,0,0.25);
  }
  .play-icon {
    width: 0; 
    height: 0; 
    border-style: solid; 
    border-width: 9px 0 9px 14px; 
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
    font-size: 13px;
    font-weight: 600;
    text-shadow: 0 1px 4px rgba(0,0,0,0.4);
  }

  .dots { display: flex; justify-content: center; gap: 9px; margin-top: 18px; }
  .dot { width: 8px; height: 8px; border-radius: 50%; border: 0; padding: 0; background: #c2cede; cursor: pointer; transition: background .2s ease, width .2s ease; }
  .dot.active { background: #3D6DB5; width: 22px; border-radius: 5px; }
</style>
