<script>
  import '../app.css';
  import { onMount } from 'svelte';

  let leadboxContainer;

  onMount(() => {
    const leadboxScript = document.createElement('script');
    leadboxScript.src = "https://a2p.viewroom.ca/embed/leadbox/cmkwq0cf20001f4gpo4ir2n3a?t=1786976631020";
    leadboxScript.async = true;
    if (leadboxContainer) {
      leadboxContainer.appendChild(leadboxScript);
    }
  });
</script>

<slot />
<div class="leadbox-container" bind:this={leadboxContainer}></div>
