<script>
  /* ════════════════════════════════════════════════════════════════
     ClearSky — Growth Engine section (interactive stepper)

     Tinted band (site-standard background). Centered pill + title +
     subtitle, then a 2x2 grid of clickable step cards on the left and
     a detail card on the right that updates with the selected step.

     ── SECTION BACKGROUND ─────────────────────────────────────────
     full-bleed #F7F9FC · padding 40px top / 60px bottom · 1440/30 grid

     ── LAYOUT ─────────────────────────────────────────────────────
     steps grid 660px  +  60px gap  +  detail card (fills rest)
     step cards: 2x2, 24px gap, white, soft shadow, radius 10
     active step: 2px #3D6DB5 border + #F5F8FC fill

     ── TYPE / COLOR ───────────────────────────────────────────────
     pill ........ Inter 700 · 13px · #fff on #2D5DA8
     title ....... Inter 700 · 30px · #3D6DB5
     badge ....... 42px · #3D6DB5 · white number
     step title .. Inter 700 · 21px · #1F2A44
     bullets ..... Inter 400 · 15px · #333 (blue dots)
     detail label  Inter 700 · 21px · #3D6DB5
     detail head .. Inter 700 · 23px · #1F2A44

     ── DEV NOTES ──────────────────────────────────────────────────
     • PLACEHOLDER COPY: steps 2–4 detail (heading/desc/videoTitle) and
       ALL youtube hrefs are drafts — replace with real copy + URLs.
     • Set each step's `thumb` to the real YouTube thumbnail image.
     • Figma typo fixes: step 4 bullet → "Customer trust and momentum built".
     • Two near-identical subtitles kept per Figma (centered + left).
       Consider cutting one if redundant.
     • Inter already loaded by the nav; no new fonts needed.
     ════════════════════════════════════════════════════════════════ */

  let active = 0;

  const steps = [
    {
      num: 1, name: 'Discovery',
      bullets: ['Local SEO optimization', 'Marketing support', 'Social media management', 'Review Platform', 'Google Business Optimization'],
      label: 'Step 1 Discovery:',
      heading: 'Help customers find your business',
      desc: 'Discovery tools increase your visibility across search, social media, and local listings so customers can easily find your business.',
      thumb1: '/images/video-discovery.jpg',
      video1: 'aBxRSZ0d4r8',
      thumb2: '/images/video-discovery.jpg',
      video2: '2AQJsCCKP3M'
    },
    {
      num: 2, name: 'Engagement',
      bullets: ['Interactive experiences', 'AI-powered engagement tools', 'Visual exploration of services', 'Visitors spend more time on your site'],
      label: 'Step 2 Engagement:',
      heading: 'Keep visitors exploring your services',
      desc: 'Interactive experiences and AI-powered tools keep visitors engaged and spending more time exploring what you offer.',
      thumb1: '/images/video-engagement.jpg',
      video1: 'gVcwd4fL7YY',
      thumb2: '/images/video-engagement.jpg',
      video2: null
    },
    {
      num: 3, name: 'Conversion',
      bullets: ['Calls and inquiries captured', 'Fast response to every customer', 'Conversations turned into bookings'],
      label: 'Step 3 Conversion:',
      heading: 'Turn inquiries into booked work',
      desc: 'Fast response to every call and message turns conversations into booked appointments — nothing slips through the cracks.',
      thumb1: '/images/video-conversion.jpg',
      video1: 't41egbiiPtg',
      thumb2: '/images/video-conversion.jpg',
      video2: null
    },
    {
      num: 4, name: 'Growth',
      bullets: ['Booked projects increase', 'Revenue grows', 'Customer trust and momentum built'],
      label: 'Step 4 Growth:',
      heading: 'Grow revenue and momentum',
      desc: 'Booked projects increase, revenue grows, and customer trust compounds into lasting momentum for your business.',
      thumb1: '/images/video-growth.jpg',
      video1: 'ktBwsfsaQPQ',
      thumb2: '/images/video-growth.jpg',
      video2: null
    }
  ];

  $: current = steps[active];

  let playing1 = false;
  let playing2 = false;

  function setStep(i) {
    active = i;
    playing1 = false;
    playing2 = false;
  }
</script>

<section class="ge">
  <div class="inner">

    <div class="header">
      <span class="pill">CLEARSKY GROWTH ENGINE</span>
      <h2 class="title">The ClearSky Growth Engine</h2>
      <p class="subtitle">Four stages that turn visitors into booked customers</p>
    </div>

    <h4 class="subhead">Four stages that transform visitors into booked customers</h4>

    <div class="cols">

      <!-- LEFT: 2x2 step grid -->
      <div class="grid">
        {#each steps as s, i}
          <button class="step" class:active={i === active} on:click={() => setStep(i)}>
            <div class="step-head">
              <div class="badge">{s.num}</div>
              <h3>{s.name}</h3>
            </div>
            <ul>
              {#each s.bullets as b}<li>{b}</li>{/each}
            </ul>
          </button>
        {/each}
      </div>

      <!-- RIGHT: detail card -->
      <div class="detail">
        <div class="label">{current.label}</div>
        <div class="heading">{current.heading}</div>
        <p class="desc">{current.desc}</p>

        <div class="video-container">
          {#if current.video1}
            <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
            <div class="video-player" on:click={() => (playing1 = true)}>
              {#if playing1}
                <iframe src="https://www.youtube.com/embed/{current.video1}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="Video 1" style="width:100%; height:100%;"></iframe>
              {:else}
                <img src={`https://img.youtube.com/vi/${current.video1}/maxresdefault.jpg`} onerror="this.onerror=null; this.src='https://img.youtube.com/vi/{current.video1}/hqdefault.jpg';" alt="Video 1" />
                <div class="yt-btn"><span class="yt-tri"></span></div>
              {/if}
            </div>
          {:else if current.thumb1}
            <div class="video-player">
              <img src={current.thumb1} alt="Video 1" />
            </div>
          {:else}
            <div class="video-player empty"></div>
          {/if}

          {#if current.video2}
            <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
            <div class="video-player" on:click={() => (playing2 = true)}>
              {#if playing2}
                <iframe src="https://www.youtube.com/embed/{current.video2}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="Video 2" style="width:100%; height:100%;"></iframe>
              {:else}
                <img src={`https://img.youtube.com/vi/${current.video2}/maxresdefault.jpg`} onerror="this.onerror=null; this.src='https://img.youtube.com/vi/{current.video2}/hqdefault.jpg';" alt="Video 2" />
                <div class="yt-btn"><span class="yt-tri"></span></div>
              {/if}
            </div>
          {:else if current.thumb2}
            <div class="video-player">
              <img src={current.thumb2} alt="Video 2" />
            </div>
          {:else}
            <div class="video-player empty"></div>
          {/if}
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  .ge { width: 100%; background: #F7F9FC; padding: 40px 0 60px; }
  .inner { max-width: 1440px; margin: 0 auto; padding: 0 30px; box-sizing: border-box; }

  .header { text-align: center; margin-bottom: 40px; }
  .pill {
    display: inline-block; background: #2D5DA8; color: #fff;
    font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 700;
    letter-spacing: .08em; padding: 7px 18px; border-radius: 999px; margin-bottom: 16px;
  }
  .title { font-family: 'Inter', sans-serif; font-size: 30px; font-weight: 700; color: #3D6DB5; margin: 0 0 8px; }
  .subtitle { font-family: 'Inter', sans-serif; font-size: 17px; color: #667; margin: 0; }
  .subhead { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700; color: #1F2A44; margin: 0 0 20px; }

  .cols { display: flex; gap: 60px; align-items: flex-start; }

  .grid { width: 660px; flex-shrink: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }

  .step {
    text-align: left; font-family: 'Inter', sans-serif;
    background: #fff; border: 1px solid #e8edf4; border-radius: 10px;
    box-shadow: 0 4px 14px rgba(40,70,120,.06); padding: 20px 22px; cursor: pointer;
    transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease, background .2s ease;
  }
  .step:hover { transform: translateY(-3px); box-shadow: 0 10px 24px rgba(40,70,120,.12); }
  .step.active { border: 2px solid #3D6DB5; background: #F5F8FC; }

  .step-head { display: flex; align-items: center; gap: 14px; }
  .badge {
    width: 42px; height: 42px; border-radius: 8px; background: #3D6DB5; color: #fff;
    font-size: 22px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .step h3 { font-size: 21px; font-weight: 700; color: #1F2A44; margin: 0; }
  .step ul { list-style: none; margin: 14px 0 0; padding: 0; }
  .step li { display: flex; gap: 9px; align-items: flex-start; font-size: 15px; line-height: 1.45; color: #333; margin-bottom: 7px; }
  .step li::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #3D6DB5; margin-top: 7px; flex-shrink: 0; }

  .detail {
    flex: 1; background: #fff; border: 1px solid #e8edf4; border-radius: 12px;
    box-shadow: 0 8px 26px rgba(40,70,120,.10); padding: 30px;
  }
  .label { font-family: 'Inter', sans-serif; font-size: 21px; font-weight: 700; color: #3D6DB5; margin-bottom: 4px; }
  .heading { font-family: 'Inter', sans-serif; font-size: 23px; font-weight: 700; color: #1F2A44; margin-bottom: 14px; }
  .desc { font-family: 'Inter', sans-serif; font-size: 16px; line-height: 1.55; color: #555; margin: 0 0 24px; }

  .video-container { margin: 0 -30px -30px -30px; background: #E1E1E1; padding: 30px; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; display: flex; gap: 20px; }
  .video-player { flex: 1; position: relative; border-radius: 6px; overflow: hidden; background: #000; box-shadow: 0 4px 12px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; aspect-ratio: 16/9; cursor: pointer; }
  .video-player.empty { background: #cfd5dc; box-shadow: inset 0 2px 6px rgba(0,0,0,0.05); cursor: default; }
  .video-player img { width: 100%; height: 100%; display: block; object-fit: cover; }

  .yt-btn { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 60px; height: 42px; background: #FF0000; border-radius: 10px; display: flex; align-items: center; justify-content: center; z-index: 2; transition: background 0.2s; }
  .video-player:hover .yt-btn { background: #e60000; }
  .yt-tri { width: 0; height: 0; border-left: 18px solid #fff; border-top: 11px solid transparent; border-bottom: 11px solid transparent; margin-left: 3px; }
</style>
