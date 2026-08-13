<script>
  /* ClearSky — About HERO (MOBILE, 390px). Ported from desktop AboutHero:
     stacked text → video poster. Copy verbatim. */
  export let eyebrow = "About Us";
  export let title = "Who we are";
  export let posterSrc = "/images/about/platform-video-poster.png";
  export let videoBar = "ClearSky Business Platform";
  export let videoHref = "https://www.youtube.com/watch?v=EDQ3xZKlMC8";
  export let videoEmbed = "https://www.youtube.com/embed/EDQ3xZKlMC8?autoplay=1";

  let playing = false;
</script>

<section class="mab">
  <p class="eyebrow">{eyebrow}</p>
  <h1 class="h1">{title}</h1>
  <p class="lead">ClearSky Software is dedicated to empowering small businesses through innovative technology. With over 15 years of experience, we tailor the most effective tools to the real needs of the businesses we serve.</p>
  <p class="lead">We break down the barriers that hold smaller firms back &mdash; giving you the same advantages as the largest companies.</p>
  <div class="inner">
    {#if !playing}
      <button class="video" type="button" on:click={() => playing = true}>
        <div class="vbar">{videoBar}</div>
        <img class="poster" src={posterSrc} alt={videoBar} />
        <span class="play"></span>
      </button>
    {:else}
      <div class="video-embed">
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
</section>

<style>
  .mab { background:#fff; padding:24px 20px 36px; max-width:390px; margin:0 auto; box-sizing:border-box; }
  .eyebrow { font-family:'Inter',sans-serif; font-size:18px; font-weight:600; color:#1F2A44; margin:0 0 10px; }
  .h1 { font-family:'Barlow Condensed',sans-serif; font-weight:600; font-size:40px; line-height:1.05; color:#3D6DB5; margin:0 0 18px; }
  .lead { font-family:'Inter',sans-serif; font-size:16px; line-height:1.6; color:#1F2A44; margin:0 0 16px; }
  .video { display:block; width:100%; margin-top:6px; border-radius:10px; overflow:hidden; position:relative; box-shadow:0 12px 30px rgba(20,30,50,.18); text-decoration:none; appearance:none; background:none; border:none; padding:0; cursor:pointer; }
  .video .poster { width:100%; height:auto; display:block; }
  .video .vbar { position:absolute; top:0; left:0; right:0; background:rgba(20,30,50,.80); color:#fff; font-family:'Inter',sans-serif; font-size:14px; font-weight:700; text-align:center; padding:8px 10px; z-index:2; }
  .video .play { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:60px; height:60px; border-radius:50%; background:rgba(255,255,255,.92); display:flex; align-items:center; justify-content:center; box-shadow:0 4px 14px rgba(0,0,0,.3); }
  .video .play::after { content:""; border-style:solid; border-width:12px 0 12px 20px; border-color:transparent transparent transparent #3D6DB5; margin-left:5px; }

  .video-embed { width:100%; aspect-ratio:1120/658; border-radius:10px; overflow:hidden; box-shadow:0 12px 30px rgba(20,30,50,.18); margin-top:6px; }
  .video-embed iframe { width:100%; height:100%; display:block; }
</style>
