<script>
  // ClearSky - Ecosystem section
</script>

<section class="ecosystem">
  <div class="inner">
    <h2 class="title">The Ecosystem that transform your business.</h2>
    <div class="grid">
      <img src="/images/ecosystem-transform/1.png" alt="Infrastructure" />
      <img src="/images/ecosystem-transform/2.png" alt="Ecosystem" />
      <img src="/images/ecosystem-transform/3.png" alt="Tools" />
      <img src="/images/ecosystem-transform/4.png" alt="Growth Engine" />
      <img src="/images/ecosystem-transform/5.png" alt="Unfair Advantages" />
      <img src="/images/ecosystem-transform/6.png" alt="The Guarantee" />
    </div>
  </div>
</section>

<style>
  .ecosystem {
    width: 100%;
    background: #ffffff;
    padding: 30px 0 60px;
  }
  .inner {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 30px;
    box-sizing: border-box;
  }
  .title {
    font-family: 'Playpen Sans', cursive, sans-serif;
    font-weight: 600;
    font-size: 28px;
    color: #4267AD;
    text-align: center;
    margin: 0 0 32px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    justify-items: center;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px; /* The images might have borders natively, but just in case */
  }

  @media (max-width: 1024px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .grid {
      grid-template-columns: 1fr;
    }
    .title {
      font-size: 24px;
    }
  }
</style>
