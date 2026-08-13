<script>
  export let title = "Our Vision";
  
  const images = [
    { src: '/images/vision-images/1.png', alt: 'Scale' },
    { src: '/images/vision-images/2.png', alt: 'Expertise' },
    { src: '/images/vision-images/3.png', alt: 'Intelligence' }
  ];
</script>

<section class="mov">
  <div class="top-band">
    <h2 class="title">{title}</h2>
    <div class="prose">
      <p>The ClearSky platform operates as a single, connected system built around a shared network of non-competing businesses. By bringing these businesses together, ClearSky creates scale &mdash; enabling each participant to benefit from collective intelligence that would not be possible individually.</p>
      <p>As data flows through the platform, ClearSky identifies patterns and signals that connect visibility, communication, and automation into one unified engine. Each stage of the customer journey &mdash; Discovery, Engagement, Conversion, and Growth &mdash; is supported by specialized tools that work together to drive measurable revenue outcomes.</p>
    </div>
  </div>

  <div class="divider"></div>

  <div class="bottom-band">
    <div class="images-col">
      {#each images as img}
        <img src={img.src} alt={img.alt} />
      {/each}
    </div>
    
    <div class="prose post-prose">
      <p>The result is a system that helps businesses get found more often, respond faster to inquiries, and convert more opportunities into booked work &mdash; while continuously improving performance through real data and shared intelligence.</p>
      <p>By removing gaps in visibility, response, and follow-up, ClearSky turns existing market demand into measurable revenue growth.</p>
    </div>

    <div class="punch">
      <p>ClearSky doesn't create demand &mdash; <span class="accent">it captures the demand businesses are already missing.</span></p>
    </div>
  </div>
</section>

<style>
  .mov { background:#F7F9FC; width:100%; box-sizing:border-box; }
  .top-band { padding:36px 20px 24px; max-width:390px; margin:0 auto; }
  .bottom-band { padding:24px 20px 44px; max-width:390px; margin:0 auto; }

  .title { text-align:center; font-family:'Inter',sans-serif; font-size:24px; font-weight:700; color:#4267AD; margin:0 0 18px; }
  .prose p { font-family:'Inter',sans-serif; font-size:16px; line-height:1.65; color:#1F2A44; margin:0 0 16px; text-align:left; }
  .post-prose { margin-top:32px; }

  .divider { width: 100%; height: 1px; background: #dbe3ee; }

  .images-col { display:flex; flex-direction:column; gap:24px; align-items:center; }
  .images-col img { width:100%; max-width:350px; height:auto; display:block; }

  .punch { margin:24px auto 0; text-align:center; border-top:1px solid #E1E8F2; padding-top:24px; }
  .punch p { font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:24px; line-height:1.2; color:#1F2A44; margin:0; }
  .punch .accent { color:#F5841F; }
</style>
