<script>
  /* ClearSky — Professional Services HERO (MOBILE, 390px). Sector-adapted copy;
     confirm with Rory. */
  export let circleSrc = '/images/hero-professional.jpg';
  export let videoThumb = '/images/trades-video.jpg';
  export let videoHref = '#';
</script>

<section class="mhero">
  <div class="label">Professional Services</div>
  <h1>Turn More Local Enquiries Into <span class="o">Retained Clients</span></h1>
  <p>ClearSky helps professional firms get discovered locally, demonstrate
    expertise, and convert more enquiries into retained clients.</p>
  <p class="lead">Add AI and expertise to Discovery, Engagement, Conversion and
    Growth and your revenue can DOUBLE — 20% guaranteed after 6 months, or up to
    100% back.</p>
  <a class="video" href={videoHref}><img src={videoThumb} alt="Watch the professional services video" /></a>
  <img class="visual" src={circleSrc} alt="Client enquiry" />
</section>

<style>
  .mhero { background: #fff; padding: 24px 20px 36px; max-width: 390px; margin: 0 auto; box-sizing: border-box; }
  .label { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 600; color: #1F2A44; margin-bottom: 10px; }
  h1 { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 40px; line-height: 1.05; color: #3D6DB5; margin: 0 0 18px; }
  h1 .o { color: #F5841F; }
  p { font-family: 'Inter', sans-serif; font-size: 16px; line-height: 1.55; color: #1F2A44; margin: 0 0 18px; }
  p.lead { margin-bottom: 22px; }
  .video { display: block; width: 100%; border-radius: 8px; overflow: hidden; box-shadow: 0 6px 20px rgba(0,0,0,.15); margin-bottom: 22px; }
  .video img { width: 100%; height: auto; display: block; }
  .visual { width: 100%; height: auto; display: block; border-radius: 12px; }
</style>
