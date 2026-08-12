<script>
  /* ════════════════════════════════════════════════════════════════
     ClearSky — Trades page HERO (first section; white; hugs the nav)

     Grid: 1440 container, 30px sides → 1380 usable.
     Left: label + Barlow Condensed headline + 2 body paragraphs + video
     Right: composed circular chat graphic (bubbles baked into the image).

     ── TYPE / COLOR ───────────────────────────────────────────────
     label ...... Inter 600 · 22px · #1F2A44
     headline ... Barlow Condensed 800 · 52px · #3D6DB5 ("Booked Work" #F5841F)
     body ....... Inter 400 · 16px · #1F2A44 · justified
     video ...... 440px wide, links out

     ── LAYOUT (locked) ────────────────────────────────────────────
     left max-width 600 · gap 44 · right circle image 640px

     ── ASSETS ─────────────────────────────────────────────────────
     circleSrc : composed circular graphic w/ chat bubbles baked in
                 (e.g. Rectangle_28928.jpg)
     videoThumb: fishing video thumbnail w/ play button (e.g. image_232.jpg)
     videoHref : link to the trades video page

     ── COPY NOTE ──────────────────────────────────────────────────
     Guarantee reworded to "up to 100% back" (matches home page; the
     refund is prorated/tiered, so flat "money back" isn't accurate).
     ════════════════════════════════════════════════════════════════ */

  export let circleSrc = '/images/trades-chat-circle.jpg';
  export let videoThumb = '/images/trades-video.jpg';
  export let videoHref = '#';
</script>

<section class="trades-hero">
  <div class="inner">

    <div class="left">
      <div class="label">Contractors/Trades</div>
      <h1>Turn More Local Inquiries<br>Into <span class="o">Booked Work</span></h1>
      <p>ClearSky helps contractors get discovered locally, showcase their work, and convert more inquiries into booked projects. Built around the real contractor customer journey, the platform improves visibility, engagement, and follow-up.</p>
      <p class="lead">When you add AI and expertise to Discovery, Engagement, Conversion and Growth, your business revenue can DOUBLE — we guarantee 20% after 6 months, or up to 100% back.</p>
      <a class="video" href={videoHref}>
        <img src={videoThumb} alt="Watch the trades video" />
      </a>
    </div>

    <div class="right">
      <img src={circleSrc} alt="Customer chat — basement remodel inquiry" />
    </div>

  </div>
</section>

<style>
  .trades-hero { width: 100%; background: #fff; }
  .inner { max-width: 1440px; margin: 0 auto; padding: 30px 30px 40px; display: flex; gap: 44px; align-items: flex-start; box-sizing: border-box; }

  .left { flex: 1; max-width: 600px; }
  .label { font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 600; color: #1F2A44; margin-bottom: 14px; }
  .left h1 { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 52px; line-height: 1.05; color: #3D6DB5; margin: 0 0 22px; }
  .left h1 .o { color: #F5841F; }
  .left p { font-family: 'Inter', sans-serif; font-size: 16px; line-height: 1.6; color: #1F2A44; margin: 0 0 22px; text-align: justify; }
  .left p.lead { margin-bottom: 28px; }

  .video { display: block; width: 440px; max-width: 100%; border-radius: 8px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,.15); }
  .video img { width: 100%; height: auto; display: block; }

  .right { flex-shrink: 0; width: 640px; }
  .right img { width: 100%; height: auto; display: block; }
</style>
