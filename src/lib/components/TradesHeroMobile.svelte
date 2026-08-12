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
  export let videoHref = '#';
</script>

<section class="th">
  <p class="label">{label}</p>
  <h1 class="headline">{headlinePre}<span class="o">{headlineAccent}</span></h1>
  <p class="copy">{intro}</p>
  <p class="copy lead">{lead}</p>
  <a class="video" href={videoHref} aria-label="Watch the trades video">
    <img src={video} alt="Watch the trades video" />
  </a>
</section>

<style>
  .th { background: #fff; padding: 26px 20px 44px; }
  .label { font-family: 'Barlow', sans-serif; font-weight: 600; font-size: 15px; color: #1F2A44; margin: 0 0 10px; }
  .headline { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 41px; line-height: 1.05; letter-spacing: -0.3px; color: #3D6DB5; margin: 0 0 20px; }
  .headline .o { color: #F5841F; }
  .copy { font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.58; color: #1F2A44; margin: 0 0 18px; }
  .copy.lead { margin-bottom: 24px; }
  .video { display: block; width: 100%; border-radius: 10px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,.15); }
  .video img { width: 100%; height: auto; display: block; }
</style>
