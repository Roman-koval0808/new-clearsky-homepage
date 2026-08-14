<script>
  export let title = "Our Vision";
  
  const images = [
    { src: '/images/vision-images/1.png', alt: 'Scale', video: 'FOwO9zyn6QM' },
    { src: '/images/vision-images/2.png', alt: 'Expertise', video: 'exrOFKAG7bo' },
    { src: '/images/vision-images/3.png', alt: 'Intelligence', video: 'o_Og94iVo2Q' }
  ];

  let activeVideo = null;
  function closeLightbox() {
    activeVideo = null;
  }
</script>

<section class="mov">
  <div class="top-band">
    <h2 class="title">{title}</h2>
    <div class="prose">
      <p>The ClearSky platform operates as a single, connected system built around a shared network of non-competing businesses. By bringing these businesses together, ClearSky creates scale &mdash; enabling each participant to benefit from collective intelligence that would not be possible individually.</p>
      <p>As data flows through the platform, ClearSky identifies patterns and signals that connect visibility, communication, and automation into one unified engine. Each stage of the customer journey &mdash; Discovery, Engagement, Conversion, and Growth &mdash; is supported by specialized tools that work together to drive measurable revenue outcomes.</p>
    </div>
  </div>

  <div class="divider"></div>

  <div class="bottom-band">
    <div class="images-col">
      {#each images as img}
        <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
        <div class="vid-card" on:click={() => activeVideo = img.video}>
          <img src={img.src} alt={img.alt} />
          <div class="play-overlay"><div class="play-btn"><div class="play-icon"></div></div></div>
        </div>
      {/each}
    </div>
    
    <div class="prose post-prose">
      <p>The result is a system that helps businesses get found more often, respond faster to inquiries, and convert more opportunities into booked work &mdash; while continuously improving performance through real data and shared intelligence.</p>
      <p>By removing gaps in visibility, response, and follow-up, ClearSky turns existing market demand into measurable revenue growth.</p>
    </div>

    <div class="punch">
      <p>ClearSky doesn't create demand &mdash; <span class="accent">it captures the demand businesses are already missing.</span></p>
    </div>
  </div>

  {#if activeVideo}
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
    <div class="lightbox" on:click={closeLightbox}>
      <button class="lightbox-close" on:click|stopPropagation={closeLightbox} aria-label="Close lightbox">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <div class="video-wrapper" on:click|stopPropagation>
        <iframe src="https://www.youtube.com/embed/{activeVideo}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="Vision Video"></iframe>
      </div>
    </div>
  {/if}
</section>

<style>
  .mov { background:#F7F9FC; width:100%; box-sizing:border-box; }
  .top-band { padding:36px 20px 24px; max-width:390px; margin:0 auto; }
  .bottom-band { padding:24px 20px 44px; max-width:390px; margin:0 auto; }

  .title { text-align:center; font-family:'Inter',sans-serif; font-size:24px; font-weight:700; color:#4267AD; margin:0 0 18px; }
  .prose p { font-family:'Inter',sans-serif; font-size:16px; line-height:1.65; color:#1F2A44; margin:0 0 16px; text-align:left; }
  .post-prose { margin-top:32px; }

  .divider { width: 100%; height: 1px; background: #dbe3ee; }

  .images-col { display:flex; flex-direction:column; gap:24px; align-items:center; }
  .images-col img { width:100%; max-width:350px; height:auto; display:block; }

  .punch { margin:24px auto 0; text-align:center; border-top:1px solid #E1E8F2; padding-top:24px; }
  .punch p { font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:24px; line-height:1.2; color:#1F2A44; margin:0; }
  .punch .accent { color:#F5841F; }

  .vid-card { position: relative; border-radius: 8px; overflow: hidden; cursor: pointer; width: 100%; max-width: 350px; }
  .vid-card img { width: 100%; height: auto; display: block; }
  .play-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0); transition: background 0.2s; border-radius: 8px; }
  .vid-card:hover .play-overlay { background: rgba(0,0,0,0.15); }
  .play-btn { width: 48px; height: 48px; background: rgba(255,255,255,0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: transform 0.2s; transform: scale(0.9); opacity: 0; }
  .vid-card:hover .play-btn { transform: scale(1); opacity: 1; }
  .play-icon { width: 0; height: 0; border-style: solid; border-width: 8px 0 8px 12px; border-color: transparent transparent transparent #3D6DB5; margin-left: 3px; }

  .lightbox { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.9); z-index: 9999; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 0; }
  .video-wrapper { width: 100%; aspect-ratio: 16 / 9; background: #000; box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4); }
  .video-wrapper iframe { width: 100%; height: 100%; }
  .lightbox-close { position: absolute; top: 16px; right: 16px; background: rgba(255, 255, 255, 0.15); border: none; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 2; }
  .lightbox-close svg { width: 24px; height: 24px; }
</style>
