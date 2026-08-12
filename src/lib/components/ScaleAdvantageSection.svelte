<script>
  export let title = "Why It Only Works at Scale";
  export let sub = "Introduce scale, and every part of a business changes — not just its technology. What no member could justify alone becomes possible for the group: new markets, shared distribution, real bargaining power.";
  export let cards = [
    { h: "Shared cost", d: "Enterprise-grade capability — tools, systems, technology — at a fraction of the per-member price." },
    { h: "Market access", d: "A unified sector reaches buyers and markets, at home and overseas, that no single member could open alone." },
    { h: "Collective operations", d: "Scale makes real-world moves possible: shared distribution, logistics, even warehousing in a foreign market as a distribution point." },
    { h: "Market gravity", d: "Many players moving as one carry weight, visibility, and bargaining power that scattered individuals never will." },
  ];
</script>

<section class="as-sec as-tint">
  <div class="as-inner as-band">
    <h2 class="as-title">{title}</h2>
    <p class="as-sub">{sub}</p>
    <div class="as-grid">
      {#each cards as c}
        <div class="as-card"><div class="bar"></div><h3>{c.h}</h3><p>{c.d}</p></div>
      {/each}
    </div>
  </div>
</section>

<style>
  .as-sec { width:100%; }
  .as-tint { background:#F7F9FC; }
  .as-inner { max-width:1440px; margin:0 auto; padding:0 30px; box-sizing:border-box; }
  .as-band { padding:40px 0 60px; }
  .as-title { text-align:center; font-family:'Inter',sans-serif; font-size:30px; font-weight:700; color:#4267AD; margin:0 0 14px; }
  .as-sub { max-width:800px; margin:0 auto 38px; text-align:center; font-family:'Inter',sans-serif; font-size:17px; line-height:1.6; color:#1F2A44; }
  .as-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:22px; }
  .as-card { background:#fff; border:1px solid #E6ECF5; border-radius:12px; padding:26px 22px; }
  .as-card .bar { width:34px; height:4px; border-radius:2px; background:#F5841F; margin:0 0 16px; }
  .as-card h3 { font-family:'Inter',sans-serif; font-size:18px; font-weight:700; color:#1F2A44; margin:0 0 10px; }
  .as-card p { font-family:'Inter',sans-serif; font-size:14px; line-height:1.6; color:#1F2A44; margin:0; }
  @media (max-width:1100px){ .as-grid { grid-template-columns:repeat(2,1fr); } }
</style>
