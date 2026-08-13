<script>
  export let title = 'Our Guarantee';
  export let heading = '6 month Guarantee';
  
  export let p1 = 'We are confident that when ClearSky Business Platform is deployed as planned you will see results, and if we cannot show you improvements and you are not happy we will return the cost of the software monthly components';
  export let p1Accent = 'up to 6 months.';
  
  export let p2 = 'Support costs and variable usage costs are not refundable.';
  
  export let p3 = 'That same confidence is why not every business that applies is accepted. We can bring a horse to water, but we can’t make it drink. The guarantee works because it is a partnership: we deploy the plan, and you commit to running it with us.';
  
  export let ctaLabel = 'Book a 15 Minute Consult';
  export let ctaHref = '#';
</script>

<section class="pm-sec pm-white">
  <div class="pm-inner pm-band">
    <h2 class="pm-title">{title}</h2>
    <div class="pm-guar">
      <h3>{heading}</h3>
      <div class="text-container">
        <p class="gtext">{p1} <span class="accent">{p1Accent}</span></p>
        <p class="gtext-centered">{p2}</p>
        <p class="gtext">{p3}</p>
      </div>
      <a class="pm-guar-cta" href={ctaHref}>{ctaLabel}</a>
    </div>
  </div>
</section>

<style>
  .pm-sec { width:100%; }
  .pm-white { background:#fff; }
  .pm-inner { max-width:1440px; margin:0 auto; padding:0 30px; box-sizing:border-box; }
  .pm-band { padding:40px 0 60px; }
  .pm-title { text-align:center; font-family:'Inter',sans-serif; font-size:30px; font-weight:700; color:#4267AD; margin:0 0 14px; }

  .pm-guar { max-width:760px; margin:34px auto 0; background:#fff; border:1px solid #d8e2f0; border-radius:14px; padding:40px 40px 36px; text-align:center; box-shadow:0 12px 32px rgba(40,70,120,.09); }
  
  .pm-guar h3 { font-family:'Inter',sans-serif; font-weight:700; font-size:24px; color:#000; margin:0 0 32px; }
  
  .text-container { max-width:580px; margin:0 auto; }
  
  .pm-guar .gtext { font-family:'Inter',sans-serif; font-size:16px; line-height:1.6; color:#000; text-align:left; margin:0 0 24px; }
  .pm-guar .gtext .accent { color:#F5841F; font-weight:700; }
  
  .pm-guar .gtext-centered { font-family:'Inter',sans-serif; font-size:16px; line-height:1.6; color:#000; text-align:center; margin:0 0 32px; font-weight:500; }
  
  .pm-guar-cta { display:inline-block; margin-top:16px; background:#F5841F; color:#fff; font-family:'Inter',sans-serif; font-size:15px; font-weight:700; padding:13px 28px; border-radius:6px; text-decoration:none; }
  .pm-guar-cta:hover { background:#e0741a; }
</style>
