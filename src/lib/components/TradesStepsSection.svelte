<script>
  /* ════════════════════════════════════════════════════════════════
     ClearSky — Trades section #2 · "4 steps to Growing Your Business"

     Tinted band #F7F9FC · padding 40 top / 60 bottom · 1440/1380 grid.
     Four equal-height cards (Discovery, Engagement, Conversion, Growth).
     Each card: blue heading · blue-circle icon · bold subheading ·
     YouTube video thumbnail (links out) · body · "See how we increase…" link.

     ── ASSETS ─────────────────────────────────────────────────────
     icon  : 64x61 image, blue circle + white glyph baked in
     video : ~266x180 thumbnail, red YouTube play button baked in
     Mapping (icon / video):
       Discovery  — Group_1000006130 / Group_1000006133
       Engagement — Group_1000006129 / Group_1000006128
       Conversion — Group_1000006132 / Group_1000006134
       Growth     — Group_1000006131 / Group_1000006135

     ── NOTES ──────────────────────────────────────────────────────
     • "See how we increase…" labels corrected to match each card
       (Figma repeated "Engagement" on three cards).
     • Cards are equal height; the link is bottom-aligned via margin-top:auto.
     • Each card's videoHref points to its YouTube video.
     ════════════════════════════════════════════════════════════════ */

  export let steps = [
    {
      title: 'Discovery',
      icon: '/images/icon-discovery.jpg',
      sub: 'Get Found by More Local Homeowners',
      video: '/images/video-discovery.jpg',
      videoHref: '#',
      body: 'Improve visibility, and reputation so more customers discover your business when they are ready to start a project.',
      link: 'See how we increase Discovery'
    },
    {
      title: 'Engagement',
      icon: '/images/icon-engagement.jpg',
      sub: 'Show the Work. Build Trust. Keep Them Interested.',
      video: '/images/video-engagement.jpg',
      videoHref: '#',
      body: 'Help homeowners explore your services, review past projects, and visualize results before they ever request a quote.',
      link: 'See how we increase Engagement'
    },
    {
      title: 'Conversion',
      icon: '/images/icon-conversion.jpg',
      sub: 'Capture More Calls, Quotes, and Inquiries',
      video: '/images/video-conversion.jpg',
      videoHref: '#',
      body: 'Turn project interest into real conversations with faster follow-up, stronger lead capture, and better communication workflows.',
      link: 'See how we increase Conversion'
    },
    {
      title: 'Growth',
      icon: '/images/icon-growth.jpg',
      sub: 'Measure What Drives More Booked Jobs',
      video: '/images/video-growth.jpg',
      videoHref: '#',
      body: 'Track what is working — visibility, engagement, and lead activity so you can improve performance & grow more efficiently.',
      link: 'See how we increase Growth'
    }
  ];
</script>

<section class="steps">
  <div class="inner">
    <h2 class="steps-title">4 steps to Growing Your Business</h2>

    <div class="steps-row">
      {#each steps as s}
        <div class="step-card">
          <h3 class="step-head">{s.title}</h3>
          <div class="step-icon"><img src={s.icon} alt={s.title} /></div>
          <p class="step-sub">{s.sub}</p>
          <a class="step-video" href={s.videoHref}><img src={s.video} alt={`${s.title} video`} /></a>
          <p class="step-body">{s.body}</p>
          <a class="step-link" href={s.videoHref}>{s.link}</a>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .steps { width: 100%; background: #F7F9FC; padding: 40px 0 60px; }
  .inner { max-width: 1440px; margin: 0 auto; padding: 0 30px; box-sizing: border-box; }

  .steps-title { text-align: center; font-family: 'Inter', sans-serif; font-size: 30px; font-weight: 700; color: #3D6DB5; margin: 0 0 38px; }

  .steps-row { display: flex; gap: 24px; align-items: stretch; }

  .step-card {
    flex: 1; background: #fff; border: 1px solid #dbe3ee; border-radius: 6px;
    padding: 22px 20px 24px; display: flex; flex-direction: column; text-align: center;
    box-shadow: 0 4px 14px rgba(40,70,120,.05);
  }
  .step-head { font-family: 'Inter', sans-serif; font-size: 21px; font-weight: 700; color: #3D6DB5; margin: 0 0 14px; }
  .step-icon { width: 60px; height: 60px; margin: 0 auto 16px; }
  .step-icon img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .step-sub { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 700; color: #1F2A44; line-height: 1.35; margin: 0 0 16px; min-height: 44px; }
  .step-video { display: block; width: 100%; border-radius: 6px; overflow: hidden; margin-bottom: 16px; box-shadow: 0 4px 12px rgba(0,0,0,.12); }
  .step-video img { width: 100%; height: auto; display: block; }
  .step-body { font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.5; color: #444; margin: 0 0 18px; }
  .step-link { margin-top: auto; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; color: #2680EB; text-decoration: none; }
  .step-link:hover { text-decoration: underline; }
</style>
