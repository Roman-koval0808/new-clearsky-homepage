<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { initTracker } from '$lib/telemetry/tracker';

  let leadboxContainer;

  onMount(() => {
    initTracker();

    const leadboxScript = document.createElement('script');
    const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:3005' : 'https://a2p.viewroom.ca';
    leadboxScript.src = `${baseUrl}/embed/leadbox/cmkwq0cf20001f4gpo4ir2n3a?t=1786992490061`;
    leadboxScript.async = true;
    if (leadboxContainer) {
      leadboxContainer.appendChild(leadboxScript);
    }
  });
</script>

<slot />
<div class="leadbox-container" bind:this={leadboxContainer}></div>
