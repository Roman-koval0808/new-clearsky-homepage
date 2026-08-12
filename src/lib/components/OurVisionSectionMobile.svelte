<script>
  /* ClearSky — Our Vision (MOBILE, 390px). Ported from desktop: 4-across stage
     row → stacked cards. Copy verbatim. */
  export let title = "Our Vision";
  export let stages = [
    { name: "Discovery",  icon: "/images/icon-discovery.jpg",  video: "/images/video-discovery.jpg",  sub: "Get Found by More of the Right Customers", body: "Improve your visibility and reputation so more customers discover your business when they are ready to buy.", link: "See how we increase Discovery", videoHref: "#" },
    { name: "Engagement", icon: "/images/icon-engagement.jpg", video: "/images/video-engagement.jpg", sub: "Show the Work. Build Trust. Hold Their Interest.", body: "Help prospects explore your offering, see your track record, and picture the results before they ever reach out.", link: "See how we increase Engagement", videoHref: "#" },
    { name: "Conversion", icon: "/images/icon-conversion.jpg", video: "/images/video-conversion.jpg", sub: "Capture More Calls, Quotes, and Inquiries", body: "Turn interest into real conversations with faster follow-up, stronger lead capture, and better communication.", link: "See how we increase Conversion", videoHref: "#" },
    { name: "Growth",     icon: "/images/icon-growth.jpg",     video: "/images/video-growth.jpg",     sub: "Measure What Drives More Business", body: "Track what is working — visibility, engagement, and lead activity — so you can improve performance and grow more efficiently.", link: "See how we increase Growth", videoHref: "#" },
  ];
</script>

<section class="mov">
  <h2 class="title">{title}</h2>
  <div class="prose">
    <p>The ClearSky platform operates as a single, connected system built around a shared network of non-competing businesses. By bringing these businesses together, ClearSky creates scale &mdash; enabling each participant to benefit from collective intelligence that would not be possible individually.</p>
    <p>As data flows through the platform, ClearSky identifies patterns and signals that connect visibility, communication, and automation into one unified engine. Each stage of the customer journey &mdash; Discovery, Engagement, Conversion, and Growth &mdash; is supported by specialized tools that work together to drive measurable revenue outcomes.</p>
  </div>

  <div class="steps-col">
    {#each stages as s}
      <div class="step-card">
        <h3 class="step-head">{s.name}</h3>
        <div class="step-icon"><img src={s.icon} alt={s.name} /></div>
        <p class="step-sub">{s.sub}</p>
        <a class="step-video" href={s.videoHref}><img src={s.video} alt={s.name + " video"} /></a>
        <p class="step-body">{s.body}</p>
        <a class="step-link" href="#">{s.link}</a>
      </div>
    {/each}
  </div>

  <div class="prose">
    <p>The result is a system that helps businesses get found more often, respond faster to inquiries, and convert more opportunities into booked work &mdash; while continuously improving performance through real data and shared intelligence.</p>
    <p>By removing gaps in visibility, response, and follow-up, ClearSky turns existing market demand into measurable revenue growth.</p>
  </div>

  <div class="punch">
    <p>ClearSky doesn't create demand &mdash; <span class="accent">it captures the demand businesses are already missing.</span></p>
  </div>
</section>

<style>
  .mov { background:#F7F9FC; padding:36px 20px 44px; max-width:390px; margin:0 auto; box-sizing:border-box; }
  .title { text-align:center; font-family:'Inter',sans-serif; font-size:24px; font-weight:700; color:#4267AD; margin:0 0 18px; }
  .prose p { font-family:'Inter',sans-serif; font-size:16px; line-height:1.65; color:#1F2A44; margin:0 0 16px; }
  .steps-col { display:flex; flex-direction:column; gap:16px; margin:24px 0; }
  .step-card { background:#fff; border:1px solid #dbe3ee; border-radius:6px; padding:20px 18px 22px; display:flex; flex-direction:column; text-align:center; box-shadow:0 4px 14px rgba(40,70,120,.05); }
  .step-head { font-family:'Inter',sans-serif; font-size:20px; font-weight:700; color:#3D6DB5; margin:0 0 12px; }
  .step-icon { width:56px; height:56px; margin:0 auto 14px; }
  .step-icon img { width:100%; height:100%; object-fit:contain; display:block; }
  .step-sub { font-family:'Inter',sans-serif; font-size:16px; font-weight:700; color:#1F2A44; line-height:1.35; margin:0 0 14px; }
  .step-video { display:block; width:100%; border-radius:6px; overflow:hidden; margin-bottom:14px; box-shadow:0 4px 12px rgba(0,0,0,.12); }
  .step-video img { width:100%; height:auto; display:block; }
  .step-body { font-family:'Inter',sans-serif; font-size:14px; line-height:1.5; color:#444; margin:0 0 14px; }
  .step-link { font-family:'Inter',sans-serif; font-size:14px; font-weight:600; color:#2680EB; text-decoration:none; }
  .punch { margin:8px auto 0; text-align:center; border-top:1px solid #E1E8F2; padding-top:24px; }
  .punch p { font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:24px; line-height:1.2; color:#1F2A44; margin:0; }
  .punch .accent { color:#F5841F; }
</style>
