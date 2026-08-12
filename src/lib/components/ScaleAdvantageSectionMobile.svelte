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

<section class="sa">
  <h2 class="title">{title}</h2>
  <p class="sub">{sub}</p>
  {#each cards as c}
    <div class="card"><div class="bar"></div><h3>{c.h}</h3><p>{c.d}</p></div>
  {/each}
</section>

<style>
  .sa { background:#F7F9FC; padding:36px 20px 44px; }
  .sa .title { text-align:center; font-family:'Inter',sans-serif; font-size:24px; font-weight:700; color:#4267AD; margin:0 0 14px; }
  .sa .sub { text-align:center; font-family:'Inter',sans-serif; font-size:15px; line-height:1.6; color:#1F2A44; margin:0 0 26px; }
  .sa .card { background:#fff; border:1px solid #E6ECF5; border-radius:12px; padding:22px 20px; margin:0 0 14px; }
  .sa .card:last-child { margin-bottom:0; }
  .sa .card .bar { width:34px; height:4px; border-radius:2px; background:#F5841F; margin:0 0 14px; }
  .sa .card h3 { font-family:'Inter',sans-serif; font-size:17px; font-weight:700; color:#1F2A44; margin:0 0 8px; }
  .sa .card p { font-family:'Inter',sans-serif; font-size:14px; line-height:1.6; color:#1F2A44; margin:0; }
</style>
