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

<section class="gm">
  <div class="gm-inner">
    <h2 class="gm-title">{title}</h2>
    <div class="gm-card">
      <h3>{heading}</h3>
      <div class="text-container">
        <p class="gtext">{p1} <span class="accent">{p1Accent}</span></p>
        <p class="gtext-centered">{p2}</p>
        <p class="gtext">{p3}</p>
      </div>
      <a class="gm-cta" href={ctaHref}>{ctaLabel}</a>
    </div>
  </div>
</section>

<style>
  .gm { width: 100%; background: #fff; padding: 36px 20px 48px; box-sizing: border-box; }
  .gm-title { text-align: center; font-family: 'Inter', sans-serif; font-size: 24px; font-weight: 700; color: #4267AD; margin: 0 0 22px; }

  .gm-card { background: #fff; border: 1px solid #d8e2f0; border-radius: 14px; padding: 30px 22px 28px; text-align: center; box-shadow: 0 12px 32px rgba(40,70,120,.09); }
  
  .gm-card h3 { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 22px; color: #000; margin: 0 0 24px; }
  
  .text-container { margin: 0 auto; }
  
  .gm-card .gtext { font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.6; color: #000; text-align: left; margin: 0 0 20px; }
  .gm-card .gtext .accent { color: #F5841F; font-weight: 700; }
  
  .gm-card .gtext-centered { font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.6; color: #000; text-align: center; margin: 0 0 24px; font-weight: 500; }
  
  .gm-cta { display: block; width: 100%; box-sizing: border-box; margin-top: 22px; background: #F5841F; color: #fff; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700; padding: 14px 20px; border-radius: 8px; text-decoration: none; text-align: center; }
  .gm-cta:active { background: #e0741a; }
</style>
