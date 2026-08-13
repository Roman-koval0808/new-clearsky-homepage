<script>
  export let eyebrow = "About Us";
  export let title = "Who we are";
  // Holographic platform poster, native 1120×658. Developer: place at /images/about/platform-video-poster.png
  export let posterSrc = "/images/about/platform-video-poster.png";
  export let videoBar = "ClearSky Business Platform";
  export let videoHref = "https://www.youtube.com/watch?v=EDQ3xZKlMC8";
  export let videoEmbed = "https://www.youtube.com/embed/EDQ3xZKlMC8?autoplay=1";

  let playing = false;
</script>

<section class="ab-sec ab-white">
  <div class="ab-inner ab-hero">
    <div class="ab-left">
      <p class="ab-eyebrow">{eyebrow}</p>
      <h1 class="ab-h1">{title}</h1>
      <p class="ab-lead">ClearSky Software is dedicated to empowering small businesses through innovative technology. With over 15 years of experience, we tailor the most effective tools to the real needs of the businesses we serve.</p>
      <p class="ab-lead">We break down the barriers that hold smaller firms back &mdash; giving you the same advantages as the largest companies.</p>
    </div>
    <div class="ab-right">
      {#if !playing}
        <button class="ab-video" type="button" on:click={() => playing = true}>
          <div class="vbar">{videoBar}</div>
          <img class="poster" src={posterSrc} alt={videoBar} />
          <span class="play"></span>
        </button>
      {:else}
        <div class="ab-video-embed">
          <iframe 
            src={videoEmbed} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  .ab-sec { width:100%; }
  .ab-white { background:#fff; }
  .ab-inner { max-width:1440px; margin:0 auto; padding:0 30px; box-sizing:border-box; }
  .ab-hero { display:flex; gap:44px; align-items:flex-start; padding:0 30px 56px; }
  .ab-left { flex:1; max-width:600px; padding-top:30px; }
  /* Hero media sits 4px below the nav shadow (locked rule) */
  .ab-right { flex-shrink:0; width:600px; padding-top:4px; }
  .ab-eyebrow { font-family:'Inter',sans-serif; font-size:22px; font-weight:600; color:#1F2A44; margin:0 0 14px; }
  .ab-h1 { font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:46px; line-height:1.05; color:#3D6DB5; margin:0 0 22px; }
  .ab-lead { font-family:'Inter',sans-serif; font-size:16px; line-height:1.6; color:#1F2A44; margin:0 0 16px; }

  .ab-video { display:block; width:100%; margin:0; border-radius:10px; overflow:hidden; position:relative; box-shadow:0 12px 30px rgba(20,30,50,.18); text-decoration:none; appearance:none; background:none; border:none; padding:0; cursor:pointer; }
  .ab-video .poster { width:100%; height:auto; display:block; }
  .ab-video .vbar { position:absolute; top:0; left:0; right:0; background:rgba(20,30,50,.80); color:#fff; font-family:'Inter',sans-serif; font-size:15px; font-weight:700; text-align:center; padding:9px 10px; z-index:2; }
  .ab-video .play { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:66px; height:66px; border-radius:50%; background:rgba(255,255,255,.92); display:flex; align-items:center; justify-content:center; box-shadow:0 4px 14px rgba(0,0,0,.3); }
  .ab-video .play::after { content:""; border-style:solid; border-width:13px 0 13px 22px; border-color:transparent transparent transparent #3D6DB5; margin-left:5px; }

  .ab-video-embed { width:100%; aspect-ratio:1120/658; border-radius:10px; overflow:hidden; box-shadow:0 12px 30px rgba(20,30,50,.18); }
  .ab-video-embed iframe { width:100%; height:100%; display:block; }

  @media (max-width:1100px) { .ab-hero { flex-direction:column; } .ab-right { width:100%; } }
</style>
