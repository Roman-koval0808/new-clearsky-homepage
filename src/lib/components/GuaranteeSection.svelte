<script>
  // ClearSky — Protected Markets · Our Guarantee
  // Data-driven so the developer can swap copy / CTA without touching markup.
  export let title = 'Our Guarantee';
  export let sealNum = '20%';
  export let sealCap = 'in 6 months';
  export let heading = '20% Revenue Growth Guarantee';
  // Guarantee wording is LOCKED to "up to 100% back" (prorated/tiered refund).
  export let confidence =
    'We have every bit of confidence that when our game plan is deployed, 20% revenue growth is doable. We stand behind it — if you don’t grow, you’re covered';
  export let confidenceAccent = 'up to 100% back.';
  export let selectivity =
    'That same confidence is why not every business that applies is accepted. We can bring a horse to water — but we can’t make it drink. The guarantee works because it is a partnership: we deploy the plan, and you commit to running it with us.';
  export let fine = 'A prorated, tiered refund — not a flat refund. Full terms apply.';
  export let ctaLabel = 'Book a 15 Minute Consult';
  export let ctaHref = '#';
</script>

<section class="pm-sec pm-white">
  <div class="pm-inner pm-band">
    <h2 class="pm-title">{title}</h2>
    <div class="pm-guar">
      <div class="pm-seal">
        <span class="num">{sealNum}</span>
        <span class="cap">{sealCap}</span>
      </div>
      <h3>{heading}</h3>
      <p class="gtext">{confidence} <span class="accent">{confidenceAccent}</span></p>
      <p class="gtext gtext-2">{selectivity}</p>
      <p class="fine">{fine}</p>
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
  .pm-seal { width:118px; height:118px; border-radius:50%; border:3px solid #F5841F; display:flex; flex-direction:column; align-items:center; justify-content:center; margin:0 auto 24px; }
  .pm-seal .num { font-family:'Barlow Condensed',sans-serif; font-weight:800; font-size:40px; line-height:1; color:#3D6DB5; }
  .pm-seal .cap { font-family:'Inter',sans-serif; font-size:11px; font-weight:700; letter-spacing:.04em; text-transform:uppercase; color:#6b7e9e; margin-top:5px; }
  .pm-guar h3 { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:32px; line-height:1.1; color:#1F2A44; margin:0 0 16px; }
  .pm-guar .gtext { max-width:580px; margin:0 auto; font-family:'Inter',sans-serif; font-size:18px; line-height:1.6; color:#1F2A44; }
  .pm-guar .gtext .accent { color:#F5841F; font-weight:700; }
  .pm-guar .gtext-2 { margin-top:20px; padding-top:18px; border-top:1px solid #eef2f8; }
  .pm-guar .fine { font-family:'Inter',sans-serif; font-size:13px; line-height:1.5; color:#6b7e9e; margin:16px auto 0; max-width:520px; }
  .pm-guar-cta { display:inline-block; margin-top:24px; background:#F5841F; color:#fff; font-family:'Inter',sans-serif; font-size:15px; font-weight:700; padding:13px 28px; border-radius:6px; text-decoration:none; }
  .pm-guar-cta:hover { background:#e0741a; }
</style>
