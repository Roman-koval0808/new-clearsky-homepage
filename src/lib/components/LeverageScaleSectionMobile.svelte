<script>
  export let title = "How We Leverage Scale";
  export let sub = "The hard part isn’t the work — it’s identifying demand and reaching it, which costs more than any member can carry alone. Scale changes that. Below, see how scale works — a few examples of how:";
  // Video posters are navy-gradient placeholders until real footage is supplied.
  export let tracks = [
    {
      h: "Makers & Artisans",
      tag: "The vehicle: a shared portal",
      body: "Independent makers produce work worth real money — but on their own, the right buyers can’t find them, and knockoffs erode the market. A shared portal brings the whole community’s work into one place buyers actually reach, with discovery and semantic search that surface the right piece — and provenance that makes authenticity something witnessed, not just claimed. Buyers can even join a commissioned piece as it’s made.",
      vlabel: "Makers · authenticity",
      vhref: "https://youtu.be/cjMEEAwmY-Q",
      videoId: "cjMEEAwmY-Q"
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
  
  let playing = [false, false, false];
</script>

<section class="ls">
  <h2 class="title">{title}</h2>
  <p class="sub">{sub}</p>
  {#each tracks as t, i}
    <div class="track">
      <h3>{t.h}</h3>
      <p class="tag">{t.tag}</p>
      <p class="body">{t.body}</p>
      {#if t.videoId && playing[i]}
        <div class="as-video-playing">
          <iframe src="https://www.youtube.com/embed/{t.videoId}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title={t.h}></iframe>
        </div>
      {:else}
        <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
        <a class="as-video" href={t.vhref} target={t.videoId ? null : "_blank"} rel="noopener" on:click={(e) => { if (t.videoId) { e.preventDefault(); playing[i] = true; } }}>
          <div class="vbar">{t.vlabel}</div>
          {#if t.videoId}
            <img class="poster-img" src={`https://img.youtube.com/vi/${t.videoId}/maxresdefault.jpg`} onerror="this.onerror=null; this.src='https://img.youtube.com/vi/{t.videoId}/hqdefault.jpg';" alt={t.h} />
          {:else}
            <span class="poster"></span>
            <span class="ph-note">video coming</span>
          {/if}
          <span class="play"></span>
        </a>
      {/if}
    </div>
  {/each}
  <p class="extends">{extendsLine}</p>
</section>

<style>
  .ls { background:#F7F9FC; padding:8px 20px 44px; }
  .ls .title { text-align:center; font-family:'Inter',sans-serif; font-size:24px; font-weight:700; color:#4267AD; margin:0 0 14px; }
  .ls .sub { text-align:center; font-family:'Inter',sans-serif; font-size:15px; line-height:1.6; color:#1F2A44; margin:0 0 28px; }
  .ls .track { margin:0 0 30px; }
  .ls .track h3 { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:26px; color:#1F2A44; margin:0 0 5px; }
  .ls .track .tag { font-family:'Inter',sans-serif; font-weight:700; font-size:12px; letter-spacing:.06em; text-transform:uppercase; color:#F5841F; margin:0 0 12px; }
  .ls .track .body { font-family:'Inter',sans-serif; font-size:14.5px; line-height:1.6; color:#1F2A44; margin:0 0 16px; }
  .as-video { display:block; width:100%; border-radius:8px; overflow:hidden; position:relative; box-shadow:0 8px 24px rgba(20,30,50,.15); text-decoration:none; }
  .as-video-playing { width:100%; aspect-ratio:16/9; border-radius:8px; overflow:hidden; box-shadow:0 8px 24px rgba(20,30,50,.15); background:#000; }
  .as-video-playing iframe { width:100%; height:100%; display:block; }
  .as-video .poster { width:100%; aspect-ratio:16/9; background:linear-gradient(135deg,#26456e,#14233a); display:block; }
  .as-video .poster-img { width:100%; aspect-ratio:16/9; display:block; object-fit:cover; }
  .as-video .vbar { position:absolute; top:0; left:0; right:0; background:rgba(20,30,50,.80); color:#fff; font-family:'Inter',sans-serif; font-size:12px; font-weight:700; text-align:center; padding:6px 10px; z-index:2; }
  .as-video .ph-note { position:absolute; bottom:8px; left:0; right:0; text-align:center; color:rgba(255,255,255,.7); font-family:'Inter',sans-serif; font-size:11px; }
  .as-video .play { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:56px; height:56px; border-radius:50%; background:rgba(255,255,255,.92); display:flex; align-items:center; justify-content:center; box-shadow:0 4px 14px rgba(0,0,0,.3); }
  .as-video .play::after { content:""; border-style:solid; border-width:11px 0 11px 19px; border-color:transparent transparent transparent #3D6DB5; margin-left:4px; }
  .ls .extends { text-align:center; font-family:'Inter',sans-serif; font-size:14.5px; font-style:italic; line-height:1.6; color:#5b6b86; margin:6px 0 0; }
</style>
