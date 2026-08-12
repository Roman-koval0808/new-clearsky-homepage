<script>
  export let title = "How We Leverage Scale";
  export let sub = "The hard part isn’t the work — it’s identifying demand and reaching it, which costs more than any member can carry alone. Scale changes that. Below, see how scale works — a few examples of how:";
  // Videos are placeholder posters (navy gradient) until real footage is supplied.
  // Makers video already shot; Manufacturers AI-generated/illustrative; Tourism to produce.
  export let tracks = [
    {
      h: "Makers & Artisans",
      tag: "The vehicle: a shared portal",
      body: "Independent makers produce work worth real money — but on their own, the right buyers can’t find them, and knockoffs erode the market. A shared portal brings the whole community’s work into one place buyers actually reach, with discovery and semantic search that surface the right piece — and provenance that makes authenticity something witnessed, not just claimed. Buyers can even join a commissioned piece as it’s made.",
      vlabel: "Makers · authenticity",
      vhref: "#",
    },
    {
      h: "Manufacturers & Producers",
      tag: "The vehicle: a co-op",
      body: "When trade barriers shift, producers need new buyers — often overseas — and no single operation has the scale to break in alone. As a co-op, a region’s producers act as one: shared distribution, collective bargaining, and real moves no member could justify solo — like warehousing in a foreign market as a distribution point. One credible presence, identifying and reaching demand an ocean away.",
      vlabel: "Manufacturers · market access",
      vhref: "#",
    },
    {
      h: "Tourism & Experiences",
      tag: "The vehicle: collective reach",
      body: "A single operator’s marketing budget is swallowed just finding an audience. At scale, that cost is shared once across the group: a live virtual event where pooled spend identifies the audience, and every member is showcased to it. A whole region shown as one destination — reach and demand no operator could afford to find alone.",
      vlabel: "Tourism · reach",
      vhref: "#",
    },
  ];
  export let extendsLine = "… and the same logic extends to any sector where scale changes the math.";
</script>

<section class="as-sec as-tint">
  <div class="as-inner as-band">
    <h2 class="as-title">{title}</h2>
    <p class="as-sub">{sub}</p>
    {#each tracks as t, i}
      <div class="as-track{i % 2 ? ' rev' : ''}">
        <div class="as-track-text">
          <h3>{t.h}</h3>
          <p class="tag">{t.tag}</p>
          <p>{t.body}</p>
        </div>
        <div class="as-track-media">
          <a class="as-video" href={t.vhref} target="_blank" rel="noopener">
            <div class="vbar">{t.vlabel}</div>
            <span class="poster"></span>
            <span class="play"></span>
            <span class="ph-note">video coming</span>
          </a>
        </div>
      </div>
    {/each}
    <p class="as-extends">{extendsLine}</p>
  </div>
</section>

<style>
  .as-sec { width:100%; }
  .as-tint { background:#F7F9FC; }
  .as-inner { max-width:1440px; margin:0 auto; padding:0 30px; box-sizing:border-box; }
  .as-band { padding:40px 0 60px; }
  .as-title { text-align:center; font-family:'Inter',sans-serif; font-size:30px; font-weight:700; color:#4267AD; margin:0 0 14px; }
  .as-sub { max-width:800px; margin:0 auto 38px; text-align:center; font-family:'Inter',sans-serif; font-size:17px; line-height:1.6; color:#1F2A44; }

  .as-track { display:flex; gap:44px; align-items:center; max-width:1140px; margin:0 auto; padding:30px 0; }
  .as-track.rev { flex-direction:row-reverse; }
  .as-track-text { flex:1; }
  .as-track-text h3 { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:30px; color:#1F2A44; margin:0 0 6px; }
  .as-track-text .tag { font-family:'Inter',sans-serif; font-weight:700; font-size:13px; letter-spacing:.06em; text-transform:uppercase; color:#F5841F; margin:0 0 14px; }
  .as-track-text p { font-family:'Inter',sans-serif; font-size:16px; line-height:1.65; color:#1F2A44; margin:0; }
  .as-track-media { flex:0 0 500px; width:500px; }
  .as-extends { max-width:820px; margin:34px auto 0; text-align:center; font-family:'Inter',sans-serif; font-size:16px; font-style:italic; line-height:1.6; color:#5b6b86; }

  .as-video { display:block; width:100%; border-radius:10px; overflow:hidden; position:relative; box-shadow:0 12px 30px rgba(20,30,50,.16); text-decoration:none; }
  .as-video .poster { width:100%; aspect-ratio:16/9; background:linear-gradient(135deg,#26456e,#14233a); display:block; }
  .as-video .vbar { position:absolute; top:0; left:0; right:0; background:rgba(20,30,50,.80); color:#fff; font-family:'Inter',sans-serif; font-size:14px; font-weight:700; text-align:center; padding:8px 10px; z-index:2; }
  .as-video .ph-note { position:absolute; bottom:10px; left:0; right:0; text-align:center; color:rgba(255,255,255,.7); font-family:'Inter',sans-serif; font-size:12px; }
  .as-video .play { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:62px; height:62px; border-radius:50%; background:rgba(255,255,255,.92); display:flex; align-items:center; justify-content:center; box-shadow:0 4px 14px rgba(0,0,0,.3); }
  .as-video .play::after { content:""; border-style:solid; border-width:12px 0 12px 21px; border-color:transparent transparent transparent #3D6DB5; margin-left:4px; }

  @media (max-width:1100px){ .as-track, .as-track.rev { flex-direction:column; } .as-track-media { width:100%; flex-basis:auto; } }
</style>
