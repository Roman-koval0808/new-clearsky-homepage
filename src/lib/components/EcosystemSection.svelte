<script>
  let items = [
    { src: '/images/ecosystem-transform/1.png', alt: 'Infrastructure', video: '61F7phNDAJc' },
    { src: '/images/ecosystem-transform/2.png', alt: 'Ecosystem', video: 'GcuCyV7VWCE' },
    { src: '/images/ecosystem-transform/3.png', alt: 'Tools', video: 'I_zHwodIHIw' },
    { src: '/images/ecosystem-transform/4.png', alt: 'Growth Engine', video: 'AnxDnjOVsuQ' },
    { src: '/images/ecosystem-transform/5.png', alt: 'Unfair Advantages', video: 'srO9ok2TzAs' },
    { src: '/images/ecosystem-transform/6.png', alt: 'The Guarantee', video: 'GcuCyV7VWCE' }
  ];

  let activeVideo = null;
  function closeLightbox() {
    activeVideo = null;
  }
</script>

<section class="ecosystem">
  <div class="inner">
    <h2 class="title">The Ecosystem that transform your business.</h2>
    <div class="grid">
      {#each items as item}
        {#if item.video}
          <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
          <div class="card clickable" on:click={() => activeVideo = item.video}>
            <img src={item.src} alt={item.alt} />
            <div class="play-overlay"><div class="play-btn"><div class="play-icon"></div></div></div>
          </div>
        {:else}
          <div class="card">
            <img src={item.src} alt={item.alt} />
          </div>
        {/if}
      {/each}
    </div>
  </div>

  {#if activeVideo}
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
    <div class="lightbox" on:click={closeLightbox}>
      <button class="lightbox-close" on:click|stopPropagation={closeLightbox} aria-label="Close lightbox">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <div class="video-wrapper" on:click|stopPropagation>
        <iframe src="https://www.youtube.com/embed/{activeVideo}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="Ecosystem Video"></iframe>
      </div>
    </div>
  {/if}
</section>

<style>
  .ecosystem {
    width: 100%;
    background: #ffffff;
    padding: 30px 0 60px;
  }
  .inner {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 30px;
    box-sizing: border-box;
  }
  .title {
    font-family: 'Playpen Sans', cursive, sans-serif;
    font-weight: 600;
    font-size: 28px;
    color: #4267AD;
    text-align: center;
    margin: 0 0 32px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    justify-items: center;
  }
  .card {
    position: relative;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
  }
  .card.clickable { cursor: pointer; }
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }

  .play-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0); transition: background 0.2s; border-radius: 8px; }
  .card:hover .play-overlay { background: rgba(0,0,0,0.15); }
  .play-btn { width: 56px; height: 56px; background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(0,0,0,0.15); transition: transform 0.2s; transform: scale(0.9); opacity: 0; }
  .card:hover .play-btn { transform: scale(1); opacity: 1; }
  .play-icon { width: 0; height: 0; border-style: solid; border-width: 9px 0 9px 14px; border-color: transparent transparent transparent #3D6DB5; margin-left: 4px; }

  .lightbox {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.85);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    backdrop-filter: blur(4px);
  }
  .video-wrapper {
    width: 100%;
    max-width: 1100px;
    aspect-ratio: 16 / 9;
    background: #000;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  }
  .video-wrapper iframe {
    width: 100%;
    height: 100%;
  }
  .lightbox-close {
    position: absolute;
    top: 20px;
    right: 30px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s;
  }
  .lightbox-close:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  .lightbox-close svg {
    width: 28px;
    height: 28px;
  }

  @media (max-width: 1024px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .grid {
      grid-template-columns: 1fr;
    }
    .title {
      font-size: 24px;
    }
  }
</style>
