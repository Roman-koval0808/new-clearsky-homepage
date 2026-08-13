<!--
  ClearSky Software — Mobile Navigation (locked)
  ----------------------------------------------
  Separate mobile component (NOT responsive breakpoints on the desktop nav).
  Frame: 390px design width.

  Specs:
    Bar height      : 64px
    Background      : white, bottom border (#f1f5f9)
    Shadow          : 0 4px 10px rgba(0,0,0,0.10)   (locked — matches desktop)
    Side padding    : 20px
    Logo            : top-left (inline cloud placeholder — swap for /logo.png)
                      "ClearSky" #3D6DB5 600 / "Software" #6B9BD1 400, 19px stacked
    Hamburger       : top-right, 3 bars #3D6DB5, animates to an X when open
    Menu            : full-width drop-down under the bar (max-height slide, .28s)
                      links Inter 16px/500 #3D6DB5, Contact Us, orange Guarantee pill
    Scrim           : dims page (rgba(0,0,0,.35)); tap to close
    Close triggers  : hamburger, link tap, scrim tap, Esc

  NOTE ON LOGO: replace the inline cloud SVG with <img src="/logo.png" .../>.
  Requires Inter loaded globally.
-->
<script>
  // Nav links (carried from desktop). Edit freely — data-driven.
  export let links = [
    { label: 'Trades',                href: '/trades' },
    { label: 'Tourism',               href: '/tourism' },
    { label: 'Manufacturers',         href: '/manufacturers' },
    { label: 'Professional Services', href: '/professional-services' },
    { label: 'Associations',          href: '/associations' },
    { label: 'About Us',              href: '/about' }
  ];
  export let contactHref = '/contact';
  export let guaranteeHref = '/guarantee';

  let open = false;
  const close = () => (open = false);
  const toggle = () => (open = !open);

  function onKey(e) { if (e.key === 'Escape') close(); }
</script>

<svelte:window on:keydown={onKey} />

<div class="m-nav-root">
  <header class="m-header">
    <a class="m-logo" href="/" aria-label="ClearSky Software home">
      <!-- TODO: replace with <img src="/logo.png" alt="ClearSky Software" /> -->
      <svg viewBox="0 0 24 24" fill="none" stroke="#3D6DB5" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true">
        <path d="M7 18a4 4 0 1 1 .5-7.97A5.5 5.5 0 0 1 18 9a3.5 3.5 0 0 1-.5 9H7z" />
      </svg>
      <span class="brand"><span class="c">ClearSky</span><span class="s">Software</span></span>
    </a>

    <button
      class="m-burger"
      class:open
      type="button"
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls="m-menu"
      on:click={toggle}
    >
      <span></span><span></span><span></span>
    </button>
  </header>

  <div class="m-scrim" class:open on:click={close} aria-hidden="true"></div>

  <nav class="m-menu" class:open id="m-menu">
    <div class="links">
      {#each links as l}
        <a class="link" href={l.href} on:click={close}>{l.label}</a>
      {/each}
    </div>
    <div class="footer">
      <a class="contact" href={contactHref} on:click={close}>Contact Us</a>
      <a class="guarantee" href={guaranteeHref} on:click={close}>Guarantee</a>
    </div>
  </nav>
</div>

<style>
  .m-nav-root { position: sticky; top: 0; z-index: 100; }

  .m-header {
    position: relative; z-index: 60; height: 64px; background: #fff;
    border-bottom: 1px solid #f1f5f9; box-shadow: 0 4px 10px rgba(0,0,0,0.10);
    display: flex; align-items: center; justify-content: space-between; padding: 0 20px;
  }

  .m-logo { display: flex; align-items: center; gap: 8px; text-decoration: none; }
  .m-logo svg { width: 34px; height: 34px; }
  .m-logo .brand { display: flex; flex-direction: column; line-height: 1; }
  .m-logo .brand .c { font-family: 'Inter', sans-serif; font-weight: 600; font-size: 19px; letter-spacing: -0.3px; color: #3D6DB5; }
  .m-logo .brand .s { font-family: 'Inter', sans-serif; font-weight: 400; font-size: 19px; letter-spacing: -0.3px; color: #6B9BD1; margin-top: 1px; }

  .m-burger {
    width: 44px; height: 44px; display: flex; flex-direction: column;
    justify-content: center; align-items: center; gap: 5px;
    background: none; border: 0; padding: 0; cursor: pointer; margin-right: -8px;
  }
  .m-burger span { display: block; width: 24px; height: 2.5px; border-radius: 2px; background: #3D6DB5; transition: transform .25s ease, opacity .2s ease; }
  .m-burger.open span:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
  .m-burger.open span:nth-child(2) { opacity: 0; }
  .m-burger.open span:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }

  .m-menu {
    position: absolute; top: 64px; left: 0; right: 0; z-index: 50; background: #fff;
    box-shadow: 0 12px 18px rgba(0,0,0,0.10); overflow: hidden; max-height: 0; transition: max-height .28s ease;
  }
  .m-menu.open { max-height: 560px; }
  .m-menu .links { display: flex; flex-direction: column; padding: 6px 0 4px; }
  .m-menu .link { font-family: 'Inter', sans-serif; padding: 15px 24px; font-size: 16px; font-weight: 500; color: #3D6DB5; text-decoration: none; border-bottom: 1px solid #f4f6f9; }
  .m-menu .link:active { background: #f7f9fc; }
  .m-menu .footer { padding: 16px 24px 22px; display: flex; flex-direction: column; gap: 14px; }
  .m-menu .contact { font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 500; color: #4A4A4A; text-decoration: none; }
  .m-menu .guarantee {
    display: block; text-align: center; background: #F5841F; color: #fff;
    font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 600;
    padding: 13px; border-radius: 999px; text-decoration: none;
  }
  .m-menu .guarantee:active { background: #e0741a; }

  .m-scrim { position: fixed; inset: 0; z-index: 40; background: rgba(0,0,0,0); pointer-events: none; transition: background .28s ease; }
  .m-scrim.open { background: rgba(0,0,0,0.35); pointer-events: auto; }
</style>
