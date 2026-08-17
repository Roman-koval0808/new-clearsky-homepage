<script>
  import '../app.css';
  import { onMount } from 'svelte';

  let leadboxContainer;

  onMount(() => {
    const leadboxScript = document.createElement('script');
    leadboxScript.src = "http://localhost:3005/embed/leadbox/cmkwq0cf20001f4gpo4ir2n3a?t=1786992490061";
    leadboxScript.async = true;
    if (leadboxContainer) {
      leadboxContainer.appendChild(leadboxScript);
    }
  });
</script>

<slot />
<div class="leadbox-container" bind:this={leadboxContainer}></div>
