<script>
  /* ClearSky — Trades hero (MOBILE, 390px). Stacked text-first, mirroring
     the locked HeroMobile order. Desktop circular chat graphic is dropped on
     mobile; section ends on the video thumbnail. */
  export let label = 'Contractors/Trades';
  export let headlinePre = 'Turn More Local Inquiries Into ';
  export let headlineAccent = 'Booked Work';
  export let intro = 'ClearSky helps contractors get discovered locally, showcase their work, and convert more inquiries into booked projects. Built around the real contractor customer journey, the platform improves visibility, engagement, and follow-up.';
  export let lead = 'When you add AI and expertise to Discovery, Engagement, Conversion and Growth, your business revenue can DOUBLE — we guarantee 20% after 6 months, or up to 100% back.';
  export let video = '/images/trades-video.jpg';
  export let videoId = 'AnxDnjOVsuQ'; // Placeholder video ID
  
  let playing = false;
</script>

<section class="th">
  <p class="label">{label}</p>
  <h1 class="headline">{headlinePre}<span class="o">{headlineAccent}</span></h1>
  <p class="copy">{intro}</p>
  <p class="copy lead">{lead}</p>
  <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
  <div class="video" on:click={() => playing = true}>
    <img src={video} alt="Watch the trades video" />
  </div>

  {#if playing && videoId}
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
    <div class="lightbox" on:click={() => playing = false}>
      <button class="lightbox-close" on:click|stopPropagation={() => playing = false} aria-label="Close lightbox">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <div class="video-wrapper" on:click|stopPropagation>
        <iframe src="https://www.youtube.com/embed/{videoId}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="Watch the trades video"></iframe>
      </div>
    </div>
  {/if}
</section>

<style>
  .th { background: #fff; padding: 26px 20px 44px; }
  .label { font-family: 'Barlow', sans-serif; font-weight: 600; font-size: 15px; color: #1F2A44; margin: 0 0 10px; }
  .headline { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 41px; line-height: 1.05; letter-spacing: -0.3px; color: #3D6DB5; margin: 0 0 20px; }
  .headline .o { color: #F5841F; }
  .copy { font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.58; color: #1F2A44; margin: 0 0 18px; }
  .copy.lead { margin-bottom: 24px; }
  .video { display: block; width: 100%; border-radius: 10px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,.15); position: relative; cursor: pointer; background: #000; }
  .video img { width: 100%; height: auto; display: block; }

  .lightbox {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  .video-wrapper {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #000;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }
  .video-wrapper iframe {
    width: 100%;
    height: 100%;
  }
  .lightbox-close {
    position: absolute;
    top: 16px;
    right: 16px;
    background: rgba(255, 255, 255, 0.15);
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .lightbox-close svg {
    width: 24px;
    height: 24px;
  }
</style>
