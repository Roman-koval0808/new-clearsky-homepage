<script>
  export let title = "Our Vision";
  
  const images = [
    { src: '/images/vision-images/1.png', alt: 'Scale' },
    { src: '/images/vision-images/2.png', alt: 'Expertise' },
    { src: '/images/vision-images/3.png', alt: 'Intelligence' }
  ];
</script>

<section class="ab-sec ab-tint">
  <div class="ab-inner ab-band">
    <h2 class="ab-title">{title}</h2>
    <div class="ab-prose">
      <p>The ClearSky platform operates as a single, connected system built around a shared network of non-competing businesses. By bringing these businesses together, ClearSky creates scale &mdash; enabling each participant to benefit from collective intelligence that would not be possible individually.</p>
      <p>As data flows through the platform, ClearSky identifies patterns and signals that connect visibility, communication, and automation into one unified engine. Each stage of the customer journey &mdash; Discovery, Engagement, Conversion, and Growth &mdash; is supported by specialized tools that work together to drive measurable revenue outcomes.</p>
    </div>
  </div>

  <div class="divider"></div>

  <div class="ab-inner ab-bottom-band">
    <div class="images-grid">
      {#each images as img}
        <img src={img.src} alt={img.alt} />
      {/each}
    </div>
    
    <div class="ab-prose ab-post-prose">
      <p>The result is a system that helps businesses get found more often, respond faster to inquiries, and convert more opportunities into booked work &mdash; while continuously improving performance through real data and shared intelligence.</p>
      <p>By removing gaps in visibility, response, and follow-up, ClearSky turns existing market demand into measurable revenue growth.</p>
    </div>

    <div class="ab-punch">
      <p>ClearSky doesn't create demand &mdash; <span class="accent">it captures the demand businesses are already missing.</span></p>
    </div>
  </div>
</section>

<style>
  .ab-sec { width:100%; margin-bottom: 25px; }
  .ab-tint { background:#F7F9FC; }
  .ab-inner { max-width:1440px; margin:0 auto; padding:0 30px; box-sizing:border-box; }
  .ab-band { padding:60px 0 40px; }
  .ab-bottom-band { padding:40px 0 60px; }
  
  .ab-title { text-align:center; font-family:'Inter',sans-serif; font-size:30px; font-weight:700; color:#4267AD; margin:0 0 26px; }
  
  .ab-prose { max-width:860px; margin:0 auto; }
  .ab-prose p { font-family:'Inter',sans-serif; font-size:17px; line-height:1.7; color:#1F2A44; margin:0 0 18px; text-align:left; }
  .ab-post-prose { margin-top:40px; }

  .divider { width: 100%; height: 1px; background: #dbe3ee; }

  .images-grid { display: flex; gap: 24px; justify-content: center; }
  .images-grid img { width: 100%; max-width: 420px; height: auto; display: block; }

  .ab-punch { max-width:880px; margin:32px auto 0; text-align:center; border-top:1px solid #E1E8F2; padding-top:28px; }
  .ab-punch p { font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:30px; line-height:1.2; color:#1F2A44; margin:0; }
  .ab-punch .accent { color:#F5841F; }

  @media (max-width:900px) {
    .images-grid { flex-direction: column; align-items: center; }
  }
</style>
