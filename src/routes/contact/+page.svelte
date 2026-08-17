<script>
  // ClearSky — CONTACT. No design was delivered for this page; this is an
  // on-brand stub so the nav link resolves. Replace with the real contact
  // design/form when supplied. Form posts nowhere yet (action TODO).
  import Responsive from '$lib/Responsive.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import NavigationMobile from '$lib/components/NavigationMobile.svelte';
  import FoundersSection from '$lib/components/FoundersSection.svelte';
  import FoundersSectionMobile from '$lib/components/FoundersSectionMobile.svelte';
  import { onMount } from 'svelte';

  let leadboxContainer;

  onMount(() => {
    const script = document.createElement('script');
    script.src = "https://a2p.viewroom.ca/embed/leadbox/cmkwq0cf20001f4gpo4ir2n3a?t=1786976631020";
    script.async = true;
    if (leadboxContainer) {
      leadboxContainer.appendChild(script);
    }
  });
</script>

<svelte:head><title>ClearSky — Contact Us</title></svelte:head>

<Responsive>
  <svelte:fragment slot="desktop"><Navigation active="/contact" /></svelte:fragment>
  <svelte:fragment slot="mobile"><NavigationMobile /></svelte:fragment>
</Responsive>

<section class="contact">
  <div class="inner">
    <p class="eyebrow">Contact Us</p>
    <h1>Let's talk about your growth</h1>
    <p class="lead">Tell us about your business and we'll show you where the missed
      demand is. <!-- TODO(design): replace stub with real contact page + wire form --></p>
    <div class="leadbox-container" bind:this={leadboxContainer}></div>
  </div>
</section>

<Responsive>
  <svelte:fragment slot="desktop"><FoundersSection /></svelte:fragment>
  <svelte:fragment slot="mobile"><FoundersSectionMobile /></svelte:fragment>
</Responsive>

<style>
  .contact { background: #fff; }
  .inner { max-width: 720px; margin: 0 auto; padding: 48px 24px 60px; box-sizing: border-box; }
  .eyebrow { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 600; color: #1F2A44; margin: 0 0 10px; }
  h1 { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 44px; line-height: 1.05; color: #3D6DB5; margin: 0 0 16px; }
  .lead { font-family: 'Inter', sans-serif; font-size: 17px; line-height: 1.6; color: #1F2A44; margin: 0 0 28px; }
  .form { display: flex; flex-direction: column; gap: 16px; }
  .form label { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; color: #1F2A44; display: flex; flex-direction: column; gap: 6px; }
  .form input, .form textarea { font-family: 'Inter', sans-serif; font-size: 15px; padding: 10px 12px; border: 1px solid #E6ECF5; border-radius: 8px; background: #F7F9FC; }
  .form input:focus, .form textarea:focus { outline: 2px solid #3D6DB5; background: #fff; }
  .form button { align-self: flex-start; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 600; color: #fff; background: #F5841F; border: 0; border-radius: 999px; padding: 12px 28px; cursor: pointer; }
  .form button:hover { background: #e0741a; }
</style>
