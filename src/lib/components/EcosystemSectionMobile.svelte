<script>
  let items = [
    { src: '/images/ecosystem-transform/1.png', alt: 'Infrastructure', video: 'GcuCyV7VWCE' },
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
    padding: 30px 0 40px;
  }
  .inner {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .title {
    font-family: 'Playpen Sans', cursive, sans-serif;
    font-weight: 600;
    font-size: 22px;
    color: #4267AD;
    text-align: center;
    margin: 0 0 24px;
    line-height: 1.35;
  }
  .grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
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
  .play-btn { width: 48px; height: 48px; background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: transform 0.2s; transform: scale(0.9); opacity: 0; }
  .card:hover .play-btn { transform: scale(1); opacity: 1; }
  .play-icon { width: 0; height: 0; border-style: solid; border-width: 8px 0 8px 12px; border-color: transparent transparent transparent #3D6DB5; margin-left: 3px; }

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
