<script>
  /* ClearSky — What We Do (MOBILE, 390px). Ported from desktop: 3-col pillars →
     stacked cards. Copy verbatim. */
  export let title = "What We Do";
  export let leadin = "Our software and dedicated support are built to deliver measurable results that hit your bottom line. We tackle the specific challenges you face on three fronts.";
  export let pillars = [
    { h: "Grow your client base", p: "Attract more customers and increase booked appointments and requested quotes." },
    { h: "Optimize operations", p: "Streamline your workflows and processes to boost efficiency and cut costs." },
    { h: "Maximize profits", p: "Harness technology to uncover new opportunities, drive growth, and increase your earnings." },
  ];
  export let closer = "Our goal is simple — to help your business reach its full potential through the strategic use of innovative software.";
</script>

<section class="mwd">
  <h2 class="title">{title}</h2>
  <p class="leadin">{leadin}</p>
  <div class="pillars">
    {#each pillars as p}
      <div class="pillar"><div class="bar"></div><h3>{p.h}</h3><p>{p.p}</p></div>
    {/each}
  </div>
  <p class="closer">{closer}</p>
</section>

<style>
  .mwd { background:#fff; padding:36px 20px 44px; max-width:390px; margin:0 auto; box-sizing:border-box; }
  .title { text-align:center; font-family:'Inter',sans-serif; font-size:24px; font-weight:700; color:#4267AD; margin:0 0 18px; }
  .leadin { margin:0 auto 26px; text-align:center; font-family:'Inter',sans-serif; font-size:16px; line-height:1.6; color:#1F2A44; }
  .pillars { display:flex; flex-direction:column; gap:16px; }
  .pillar { background:#fff; border:1px solid #E6ECF5; border-radius:12px; padding:22px 20px; box-shadow:0 8px 22px rgba(40,70,120,.06); }
  .pillar .bar { width:34px; height:4px; border-radius:2px; background:#F5841F; margin:0 0 14px; }
  .pillar h3 { font-family:'Inter',sans-serif; font-size:19px; font-weight:700; color:#1F2A44; margin:0 0 8px; }
  .pillar p { font-family:'Inter',sans-serif; font-size:15px; line-height:1.6; color:#1F2A44; margin:0; }
  .closer { margin:26px auto 0; text-align:center; font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:22px; line-height:1.25; color:#3D6DB5; }
</style>
