<script>
  export let title = "What We Do";
  export let leadin = "Our software and dedicated support are built to deliver measurable results that hit your bottom line. We tackle the specific challenges you face on three fronts.";
  export let pillars = [
    { h: "Grow your client base", p: "Attract more customers and increase booked appointments and requested quotes." },
    { h: "Optimize operations", p: "Streamline your workflows and processes to boost efficiency and cut costs." },
    { h: "Maximize profits", p: "Harness technology to uncover new opportunities, drive growth, and increase your earnings." },
  ];
  export let closer = "Our goal is simple — to help your business reach its full potential through the strategic use of innovative software.";
</script>

<section class="ab-sec ab-white">
  <div class="ab-inner ab-band">
    <h2 class="ab-title">{title}</h2>
    <p class="ab-leadin">{leadin}</p>
    <div class="ab-pillars">
      {#each pillars as p}
        <div class="ab-pillar"><div class="bar"></div><h3>{p.h}</h3><p>{p.p}</p></div>
      {/each}
    </div>
    <p class="ab-closer">{closer}</p>
  </div>
</section>

<style>
  .ab-sec { width:100%; }
  .ab-white { background:#fff; }
  .ab-inner { max-width:1440px; margin:0 auto; padding:0 30px; box-sizing:border-box; }
  .ab-band { padding:40px 0 60px; }
  .ab-title { text-align:center; font-family:'Inter',sans-serif; font-size:30px; font-weight:700; color:#4267AD; margin:0 0 26px; }
  .ab-leadin { max-width:780px; margin:0 auto 36px; text-align:center; font-family:'Inter',sans-serif; font-size:17px; line-height:1.6; color:#1F2A44; }
  .ab-pillars { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; max-width:1100px; margin:0 auto; }
  .ab-pillar { background:#fff; border:1px solid #E6ECF5; border-radius:12px; padding:28px 26px; box-shadow:0 8px 22px rgba(40,70,120,.06); }
  .ab-pillar .bar { width:34px; height:4px; border-radius:2px; background:#F5841F; margin:0 0 16px; }
  .ab-pillar h3 { font-family:'Inter',sans-serif; font-size:20px; font-weight:700; color:#1F2A44; margin:0 0 10px; }
  .ab-pillar p { font-family:'Inter',sans-serif; font-size:15px; line-height:1.6; color:#1F2A44; margin:0; }
  .ab-closer { max-width:760px; margin:34px auto 0; text-align:center; font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:24px; line-height:1.25; color:#3D6DB5; }
  @media (max-width:900px) { .ab-pillars { grid-template-columns:1fr; } }
</style>
