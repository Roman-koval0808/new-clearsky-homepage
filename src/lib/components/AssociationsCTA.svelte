<script>
  export let eyebrow = "One group per market · when it’s gone, it’s gone";
  export let statement = "Your members have done everything they can on their own. We bring the one thing they can’t.";
  export let ctaLabel = "Start the conversation";
  export let ctaHref = "#"; // developer to supply real URL
</script>

<section class="as-sec as-navy">
  <div class="as-close">
    <p class="ce">{eyebrow}</p>
    <p>{statement}</p>
    <a class="as-cta" href={ctaHref}>{ctaLabel}</a>
  </div>
</section>

<style>
  .as-sec { width:100%; }
  .as-navy { background:#1F2A44; }
  .as-close { text-align:center; padding:52px 30px; max-width:1440px; margin:0 auto; box-sizing:border-box; }
  .as-close .ce { font-family:'Inter',sans-serif; font-size:13px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:#F5841F; margin:0 0 16px; }
  .as-close p { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:34px; line-height:1.18; color:#fff; margin:0 auto 26px; max-width:760px; }
  .as-cta { display:inline-block; background:#F5841F; color:#fff; font-family:'Inter',sans-serif; font-size:16px; font-weight:700; padding:15px 34px; border-radius:6px; text-decoration:none; }
  .as-cta:hover { background:#e0741a; }
</style>
