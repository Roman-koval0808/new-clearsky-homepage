<script>
  /* ClearSky — Trades section #2 "4 steps to Growing Your Business" (MOBILE, 390px).
     Desktop 4-across row → single-column stack. Same data/copy as desktop
     TradesStepsSection. Tinted #F7F9FC band; mobile padding 36/44 · 20 sides. */
  export let title = '4 steps to Growing Your Business';
  export let steps = [
    {
      title: 'Discovery',
      icon: '/images/icon-discovery.jpg',
      sub: 'Get Found by More Local Homeowners',
      video: '/images/video-discovery.jpg',
      videoId: 'aBxRSZ0d4r8',
      videoHref: '#',
      body: 'Improve visibility, and reputation so more customers discover your business when they are ready to start a project.',
      link: 'See how we increase Discovery'
    },
    {
      title: 'Engagement',
      icon: '/images/icon-engagement.jpg',
      sub: 'Show the Work. Build Trust. Keep Them Interested.',
      video: '/images/video-engagement.jpg',
      videoId: 'gVcwd4fL7YY',
      videoHref: '#',
      body: 'Help homeowners explore your services, review past projects, and visualize results before they ever request a quote.',
      link: 'See how we increase Engagement'
    },
    {
      title: 'Conversion',
      icon: '/images/icon-conversion.jpg',
      sub: 'Capture More Calls, Quotes, and Inquiries',
      video: '/images/video-conversion.jpg',
      videoId: 't41egbiiPtg',
      videoHref: '#',
      body: 'Turn project interest into real conversations with faster follow-up, stronger lead capture, and better communication workflows.',
      link: 'See how we increase Conversion'
    },
    {
      title: 'Growth',
      icon: '/images/icon-growth.jpg',
      sub: 'Measure What Drives More Booked Jobs',
      video: '/images/video-growth.jpg',
      videoId: 'ktBwsfsaQPQ',
      videoHref: '#',
      body: 'Track what is working — visibility, engagement, and lead activity so you can improve performance & grow more efficiently.',
      link: 'See how we increase Growth'
    }
  ];

  let playing = [false, false, false, false];
</script>

<section class="msteps">
  <div class="inner">
    <h2 class="msteps-title">{title}</h2>
    <div class="msteps-col">
      {#each steps as s, i}
        <div class="step-card">
          <h3 class="step-head">{s.title}</h3>
          <div class="step-icon"><img src={s.icon} alt={s.title} /></div>
          <p class="step-sub">{s.sub}</p>
          {#if s.videoId}
            <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
            <div class="step-video-wrapper" on:click={() => playing[i] = true}>
              {#if playing[i]}
                <iframe src="https://www.youtube.com/embed/{s.videoId}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="{s.title} video"></iframe>
              {:else}
                <img src={`https://img.youtube.com/vi/${s.videoId}/maxresdefault.jpg`} onerror="this.onerror=null; this.src='https://img.youtube.com/vi/{s.videoId}/hqdefault.jpg';" alt={`${s.title} video`} />
                <div class="yt-btn"><span class="yt-tri"></span></div>
              {/if}
            </div>
          {:else}
            <a class="step-video" href={s.videoHref}><img src={s.video} alt={`${s.title} video`} /></a>
          {/if}
          <p class="step-body">{s.body}</p>
          <a class="step-link" href={s.videoHref}>{s.link}</a>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .msteps { width: 100%; background: #F7F9FC; padding: 36px 0 44px; }
  .inner { max-width: 390px; margin: 0 auto; padding: 0 20px; box-sizing: border-box; }
  .msteps-title { text-align: center; font-family: 'Inter', sans-serif; font-size: 24px; font-weight: 700; color: #3D6DB5; margin: 0 0 24px; }
  .msteps-col { display: flex; flex-direction: column; gap: 18px; }
  .step-card {
    background: #fff; border: 1px solid #dbe3ee; border-radius: 6px;
    padding: 20px 18px 22px; display: flex; flex-direction: column; text-align: center;
    box-shadow: 0 4px 14px rgba(40,70,120,.05);
  }
  .step-head { font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 700; color: #3D6DB5; margin: 0 0 12px; }
  .step-icon { width: 56px; height: 56px; margin: 0 auto 14px; }
  .step-icon img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .step-sub { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 700; color: #1F2A44; line-height: 1.35; margin: 0 0 14px; }
  .step-video { display: block; width: 100%; border-radius: 6px; overflow: hidden; margin-bottom: 14px; box-shadow: 0 4px 12px rgba(0,0,0,.12); }
  .step-video img { width: 100%; height: auto; display: block; }
  
  .step-video-wrapper { display: block; width: 100%; aspect-ratio: 16/9; border-radius: 6px; overflow: hidden; margin-bottom: 14px; box-shadow: 0 4px 12px rgba(0,0,0,.12); position: relative; cursor: pointer; background: #000; }
  .step-video-wrapper img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .step-video-wrapper iframe { width: 100%; height: 100%; display: block; }
  
  .yt-btn { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 48px; height: 34px; background: #FF0000; border-radius: 8px; display: flex; align-items: center; justify-content: center; z-index: 2; transition: background 0.2s; }
  .step-video-wrapper:hover .yt-btn { background: #e60000; }
  .yt-tri { width: 0; height: 0; border-left: 14px solid #fff; border-top: 9px solid transparent; border-bottom: 9px solid transparent; margin-left: 3px; }

  .step-body { font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.5; color: #444; margin: 0 0 16px; }
  .step-link { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; color: #2680EB; text-decoration: none; }
  .step-link:hover { text-decoration: underline; }
</style>
