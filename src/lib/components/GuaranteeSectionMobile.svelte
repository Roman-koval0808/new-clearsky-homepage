<script>
  /* ClearSky — Protected Markets · OUR GUARANTEE (MOBILE, 390px).
     Desktop centered card → mobile full-width card. Orange ring seal is pure
     CSS. Guarantee wording LOCKED to "up to 100% back" (prorated/tiered refund).
     CTA goes full-width for a comfortable tap target. Copy verbatim from the
     desktop GuaranteeSection. */
  export let title = 'Our Guarantee';
  export let sealNum = '20%';
  export let sealCap = 'in 6 months';
  export let heading = '20% Revenue Growth Guarantee';
  export let confidence =
    'We have every bit of confidence that when our game plan is deployed, 20% revenue growth is doable. We stand behind it — if you don’t grow, you’re covered';
  export let confidenceAccent = 'up to 100% back.';
  export let selectivity =
    'That same confidence is why not every business that applies is accepted. We can bring a horse to water — but we can’t make it drink. The guarantee works because it is a partnership: we deploy the plan, and you commit to running it with us.';
  export let fine = 'A prorated, tiered refund — not a flat refund. Full terms apply.';
  export let ctaLabel = 'Book a 15 Minute Consult';
  export let ctaHref = '#';
</script>

<section class="gm">
  <div class="gm-inner">
    <h2 class="gm-title">{title}</h2>
    <div class="gm-card">
      <div class="gm-seal">
        <span class="num">{sealNum}</span>
        <span class="cap">{sealCap}</span>
      </div>
      <h3>{heading}</h3>
      <p class="gtext">{confidence} <span class="accent">{confidenceAccent}</span></p>
      <p class="gtext gtext-2">{selectivity}</p>
      <p class="fine">{fine}</p>
      <a class="gm-cta" href={ctaHref}>{ctaLabel}</a>
    </div>
  </div>
</section>

<style>
  .gm { width: 100%; background: #fff; padding: 36px 20px 48px; box-sizing: border-box; }
  .gm-title { text-align: center; font-family: 'Inter', sans-serif; font-size: 24px; font-weight: 700; color: #4267AD; margin: 0 0 22px; }

  .gm-card { background: #fff; border: 1px solid #d8e2f0; border-radius: 14px; padding: 30px 22px 28px; text-align: center; box-shadow: 0 12px 32px rgba(40,70,120,.09); }
  .gm-seal { width: 104px; height: 104px; border-radius: 50%; border: 3px solid #F5841F; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto 20px; }
  .gm-seal .num { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 36px; line-height: 1; color: #3D6DB5; }
  .gm-seal .cap { font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: #6b7e9e; margin-top: 5px; }
  .gm-card h3 { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 27px; line-height: 1.12; color: #1F2A44; margin: 0 0 14px; }
  .gm-card .gtext { margin: 0; font-family: 'Inter', sans-serif; font-size: 16px; line-height: 1.6; color: #1F2A44; }
  .gm-card .gtext .accent { color: #F5841F; font-weight: 700; }
  .gm-card .gtext-2 { margin-top: 18px; padding-top: 16px; border-top: 1px solid #eef2f8; }
  .gm-card .fine { font-family: 'Inter', sans-serif; font-size: 12.5px; line-height: 1.5; color: #6b7e9e; margin: 14px 0 0; }
  .gm-cta { display: block; width: 100%; box-sizing: border-box; margin-top: 22px; background: #F5841F; color: #fff; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700; padding: 14px 20px; border-radius: 8px; text-decoration: none; text-align: center; }
  .gm-cta:active { background: #e0741a; }
</style>
