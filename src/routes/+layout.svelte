<script>
  import '../app.css';
  import { onMount } from 'svelte';
  import { initTracker } from '$lib/telemetry/tracker';

  let leadboxContainer;

  onMount(() => {
    initTracker();

    const leadboxScript = document.createElement('script');
    // leadboxScript.src = "https://a2p.viewroom.ca/embed/leadbox/cmkwq0cf20001f4gpo4ir2n3a?t=1786992490061";
    leadboxScript.src = "http://localhost:3005/embed/leadbox/cmkwq0cf20001f4gpo4ir2n3a?t=1786992490061";
    leadboxScript.async = true;
    if (leadboxContainer) {
      leadboxContainer.appendChild(leadboxScript);
    }
  });
</script>

<slot />
<div class="leadbox-container" bind:this={leadboxContainer}></div>
