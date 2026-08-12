<script>
  /* ════════════════════════════════════════════════════════════════
     ClearSky — Mobile Growth Engine section (locked)
     "The ClearSky Growth Engine"

     Separate mobile component (NOT responsive). Frame: 390px.

     Desktop = 2×2 clickable step cards (each showing its own bullets)
     beside a fixed detail panel. Mobile = the four step NAMES become a
     single-line segmented tab row; the selected step's bullets move
     into the detail card below.

     ── SECTION ────────────────────────────────────────────────────
     tinted #F7F9FC · padding 36 top / 48 bottom · 20px sides
     pill ..... Inter 700 / 11px / #fff on #2D5DA8
     title .... Inter 700 / 24px / #3D6DB5
     tabs ..... 4 equal segments, one line, 12px bold;
                active = #3D6DB5 fill, white text
     detail ... white card, label #3D6DB5, heading #1F2A44, blue-dot bullets,
                YouTube-style video block

     ── OPEN ITEMS (same as desktop) ───────────────────────────────
     • Steps 2–4 detail copy are drafts.
     • ALL step.href YouTube URLs are placeholder '#'.
     • step.thumb thumbnails blank — set to real YouTube thumbnails.
     ════════════════════════════════════════════════════════════════ */

  export let pill = 'CLEARSKY GROWTH ENGINE';
  export let title = 'The ClearSky Growth Engine';
  export let subtitle = 'Four stages that turn visitors into booked customers';

  export let steps = [
    {
      num: 1, name: 'Discovery',
      label: 'Step 1 Discovery:', heading: 'Help customers find your business',
      desc: 'Discovery tools increase your visibility across search, social media, and local listings so customers can easily find your business.',
      bullets: ['Local SEO optimization', 'Marketing support', 'Social media management', 'Review Platform', 'Google Business Optimization'],
      videoTitle: 'Discovery — First Step in the Customer Journey', href: 'https://www.youtube.com/watch?v=aBxRSZ0d4r8', thumb: ''
    },
    {
      num: 2, name: 'Engagement',
      label: 'Step 2 Engagement:', heading: 'Keep visitors exploring your services',
      desc: 'Interactive experiences and AI-powered tools keep visitors engaged and spending more time exploring what you offer.',
      bullets: ['Interactive experiences', 'AI-powered engagement tools', 'Visual exploration of services', 'Visitors spend more time on your site'],
      videoTitle: 'Engagement — Keeping Visitors Interested', href: 'https://www.youtube.com/watch?v=gVcwd4fL7YY', thumb: ''
    },
    {
      num: 3, name: 'Conversion',
      label: 'Step 3 Conversion:', heading: 'Turn inquiries into booked work',
      desc: 'Fast response to every call and message turns conversations into booked appointments — nothing slips through the cracks.',
      bullets: ['Calls and inquiries captured', 'Fast response to every customer', 'Conversations turned into bookings'],
      videoTitle: 'Conversion — Turning Inquiries into Bookings', href: 'https://www.youtube.com/watch?v=t41egbiiPtg', thumb: ''
    },
    {
      num: 4, name: 'Growth',
      label: 'Step 4 Growth:', heading: 'Grow revenue and momentum',
      desc: 'Booked projects increase, revenue grows, and customer trust compounds into lasting momentum for your business.',
      bullets: ['Booked projects increase', 'Revenue grows', 'Customer trust and momentum built'],
      videoTitle: 'Growth — Compounding Your Results', href: 'https://www.youtube.com/watch?v=ktBwsfsaQPQ', thumb: ''
    }
  ];

  let active = 0;
  $: current = steps[active];
</script>

<section class="ge">
  <div class="header">
    <span class="pill">{pill}</span>
    <h2 class="title">{title}</h2>
    <p class="subtitle">{subtitle}</p>
  </div>

  <div class="tabs">
    {#each steps as s, i}
      <button class="tab" class:active={i === active} on:click={() => (active = i)}>{s.name}</button>
    {/each}
  </div>

  <div class="detail">
    <div class="label">{current.label}</div>
    <div class="heading">{current.heading}</div>
    <p class="desc">{current.desc}</p>

    <ul class="bullets">
      {#each current.bullets as b}<li>{b}</li>{/each}
    </ul>

    <a class="video" href={current.href} target="_blank" rel="noopener" aria-label="Watch on YouTube">
      <div class="video-bg" style={current.thumb ? `background-image:url('${current.thumb}')` : ''}></div>
      <div class="video-head">
        <div class="cs-logo">CS</div>
        <div>
          <div class="video-title">{current.videoTitle}</div>
          <div class="video-sub">ClearSky Software Solutions</div>
        </div>
      </div>
      <div class="yt-btn"><span class="yt-tri"></span></div>
      <div class="yt-watch">Watch on <span class="yt-tag">YouTube</span></div>
    </a>
  </div>
</section>

<style>
  .ge { width: 100%; background: #F7F9FC; padding: 36px 20px 48px; font-family: 'Inter', sans-serif; }

  .header { text-align: center; margin-bottom: 22px; }
  .pill {
    display: inline-block; background: #2D5DA8; color: #fff; font-size: 11px; font-weight: 700;
    letter-spacing: .08em; padding: 6px 15px; border-radius: 999px; margin-bottom: 14px;
  }
  .title { font-size: 24px; font-weight: 700; color: #3D6DB5; margin: 0 0 7px; }
  .subtitle { font-size: 14px; color: #667; margin: 0; line-height: 1.4; }

  .tabs { display: flex; gap: 6px; margin-bottom: 18px; }
  .tab {
    flex: 1; min-width: 0; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 700;
    padding: 10px 2px; border-radius: 8px; border: 1px solid #d6deea; background: #fff;
    color: #1F2A44; white-space: nowrap; cursor: pointer;
    transition: background .18s ease, color .18s ease, border-color .18s ease;
  }
  .tab.active { background: #3D6DB5; border-color: #3D6DB5; color: #fff; }

  .detail { background: #fff; border: 1px solid #e8edf4; border-radius: 12px; box-shadow: 0 8px 26px rgba(40,70,120,.10); padding: 22px 20px 24px; }
  .label { font-size: 18px; font-weight: 700; color: #3D6DB5; margin-bottom: 4px; }
  .heading { font-size: 19px; font-weight: 700; color: #1F2A44; margin-bottom: 12px; line-height: 1.25; }
  .desc { font-size: 15px; line-height: 1.55; color: #555; margin: 0 0 16px; }

  .bullets { list-style: none; margin: 0 0 20px; padding: 0; }
  .bullets li { display: flex; gap: 9px; align-items: flex-start; font-size: 14px; line-height: 1.45; color: #333; margin-bottom: 8px; }
  .bullets li::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #3D6DB5; margin-top: 7px; flex-shrink: 0; }

  .video { position: relative; display: block; width: 100%; aspect-ratio: 16/9; border-radius: 10px; overflow: hidden; background: #2b2f36; text-decoration: none; }
  .video-bg { position: absolute; inset: 0; background: #3a4047; background-size: cover; background-position: center; }
  .video-head { position: absolute; top: 14px; left: 14px; right: 14px; z-index: 2; display: flex; align-items: center; gap: 9px; }
  .cs-logo { width: 26px; height: 26px; border-radius: 50%; background: #fff; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 800; color: #3D6DB5; flex-shrink: 0; }
  .video-title { color: #fff; font-size: 13px; font-weight: 700; line-height: 1.2; }
  .video-sub { color: #cbd5e3; font-size: 10px; }
  .yt-btn { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 60px; height: 42px; background: #FF0000; border-radius: 10px; display: flex; align-items: center; justify-content: center; z-index: 2; }
  .yt-tri { width: 0; height: 0; border-left: 18px solid #fff; border-top: 11px solid transparent; border-bottom: 11px solid transparent; margin-left: 3px; }
  .yt-watch { position: absolute; bottom: 11px; right: 14px; z-index: 2; color: #fff; font-size: 12px; font-weight: 600; display: flex; align-items: center; gap: 5px; }
  .yt-tag { background: #FF0000; color: #fff; font-weight: 800; padding: 1px 5px; border-radius: 4px; font-size: 10.5px; }
</style>
