<!--
  ClearSky Software — Desktop Navigation (locked)
  ------------------------------------------------
  Ported from Tailwind utilities to scoped CSS to match every other component
  in the project (the rest are self-styled scoped-CSS Svelte). Specs preserved:
    Container 1440 / 30px sides · header 86px · white, bottom border + soft shadow
    Baseline: logo, links, Guarantee bottom-aligned, 13px above the shadow
    Links: Inter 16/500 #3D6DB5, 32px gap · Contact Us Inter 14/500 #4A4A4A
    Guarantee: orange #F5841F pill · Right block +20px right margin

  NOTE ON LOGO: replace the inline cloud SVG with the real logo asset when
  supplied (/logo.png).
-->
<script>
  export let active = '';
  const links = [
    { href: '/trades', label: 'Trades' },
    { href: '/tourism', label: 'Tourism' },
    { href: '/manufacturers', label: 'Manufacturers' },
    { href: '/professional-services', label: 'Professional Services' },
    { href: '/associations', label: 'Associations' },
    { href: '/about', label: 'About Us' }
  ];
</script>

<header class="nav">
  <div class="inner">
    <a href="/" class="logo" aria-label="ClearSky Software home">
      <!-- TODO: replace with <img src="/logo.png" alt="ClearSky Software" /> -->
      <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="#3D6DB5" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true">
        <path d="M7 18a4 4 0 1 1 .5-7.97A5.5 5.5 0 0 1 18 9a3.5 3.5 0 0 1-.5 9H7z" />
      </svg>
      <span class="wordmark">
        <span class="w1">ClearSky</span>
        <span class="w2">Software</span>
      </span>
    </a>

    <nav class="links">
      {#each links as l}
        <a href={l.href} class:current={active === l.href}>{l.label}</a>
      {/each}
    </nav>

    <div class="right">
      <a href="/contact" class="contact">Contact Us</a>
      <a href="/guarantee" class="guarantee">Guarantee</a>
    </div>
  </div>
</header>

<style>
  .nav { width: 100%; background: #fff; border-bottom: 1px solid #f1f5f9; box-shadow: 0 4px 10px 0 rgba(0,0,0,.10); }
  .inner { max-width: 1440px; margin: 0 auto; height: 86px; padding: 0 30px 13px; display: flex; align-items: flex-end; justify-content: space-between; box-sizing: border-box; }

  .logo { display: flex; align-items: center; gap: 8px; text-decoration: none; }
  .wordmark { display: flex; flex-direction: column; line-height: 1; }
  .wordmark .w1 { font-family: 'Inter', sans-serif; font-size: 24px; font-weight: 600; letter-spacing: -.3px; color: #3D6DB5; }
  .wordmark .w2 { font-family: 'Inter', sans-serif; font-size: 24px; font-weight: 400; letter-spacing: -.3px; color: #6B9BD1; margin-top: 1px; }

  .links { display: flex; align-items: center; gap: 32px; }
  .links a { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 500; color: #3D6DB5; text-decoration: none; }
  .links a:hover, .links a.current { color: #2c5490; }

  .right { margin-right: 20px; display: flex; flex-direction: column; align-items: center; gap: 6px; }
  .contact { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500; color: #4A4A4A; text-decoration: none; }
  .contact:hover { color: #3D6DB5; }
  .guarantee { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; color: #fff; background: #F5841F; border-radius: 999px; padding: 8px 20px; text-decoration: none; }
  .guarantee:hover { background: #e0741a; }
</style>
