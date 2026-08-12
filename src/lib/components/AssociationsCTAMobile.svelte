<script>
  export let eyebrow = "One group per market · when it’s gone, it’s gone";
  export let statement = "Your members have done everything they can on their own. We bring the one thing they can’t.";
  export let ctaLabel = "Start the conversation";
  export let ctaHref = "#"; // developer to supply real URL
</script>

<section class="ac">
  <p class="ce">{eyebrow}</p>
  <p class="stmt">{statement}</p>
  <a class="cta" href={ctaHref}>{ctaLabel}</a>
</section>

<style>
  .ac { background:#1F2A44; padding:44px 20px 48px; text-align:center; }
  .ac .ce { font-family:'Inter',sans-serif; font-size:12px; font-weight:700; letter-spacing:.07em; text-transform:uppercase; color:#F5841F; margin:0 0 14px; }
  .ac .stmt { font-family:'Barlow Condensed',sans-serif; font-weight:700; font-size:28px; line-height:1.2; color:#fff; margin:0 0 24px; }
  .ac .cta { display:block; background:#F5841F; color:#fff; font-family:'Inter',sans-serif; font-size:16px; font-weight:700; padding:15px 20px; border-radius:6px; text-decoration:none; }
  .ac .cta:hover { background:#e0741a; }
</style>
