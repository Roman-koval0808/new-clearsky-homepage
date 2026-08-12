<script>
  /* ClearSky — Manufacturers page HERO (desktop).
     Built on the locked TradesHero layout. Sector-adapted copy — confirm with
     Rory. Guarantee always phrased "up to 100% back". */
  export let circleSrc = '/images/hero-manufacturing.jpg';
  export let videoThumb = '/images/trades-video.jpg';
  export let videoHref = '#';
</script>

<section class="sector-hero">
  <div class="inner">
    <div class="left">
      <div class="label">Manufacturers</div>
      <!-- TODO(copy): confirm Manufacturers headline + body with Rory -->
      <h1>Turn More Buyer Interest<br>Into <span class="o">Signed Orders</span></h1>
      <p>ClearSky helps manufacturers get discovered by the right buyers, showcase
        capability, and convert more enquiries into orders. Built around the real
        B2B buyer journey, the platform improves visibility, engagement, and
        follow-up.</p>
      <p class="lead">When you add AI and expertise to Discovery, Engagement,
        Conversion and Growth, your revenue can DOUBLE — we guarantee 20% after 6
        months, or up to 100% back.</p>
      <a class="video" href={videoHref}>
        <img src={videoThumb} alt="Watch the manufacturers video" />
      </a>
    </div>
    <div class="right">
      <img src={circleSrc} alt="Buyer enquiry — capability and lead time" />
    </div>
  </div>
</section>

<style>
  .sector-hero { width: 100%; background: #fff; }
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
  .right img { width: 100%; height: auto; display: block; border-radius: 12px; }
</style>
