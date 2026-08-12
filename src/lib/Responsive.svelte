<script>
  /* Renders the `desktop` slot by default (SSR + wide screens) and swaps to the
     `mobile` slot below the breakpoint. Honors the project's "separate mobile
     components, not responsive CSS" rule — each slot mounts its own component
     tree. Default breakpoint 820px (between the 390 mobile and 1440 desktop
     design widths). */
  import { onMount } from 'svelte';
  export let breakpoint = 820;

  let isMobile = false;
  let mounted = false;

  onMount(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const apply = () => (isMobile = mq.matches);
    apply();
    mounted = true;
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  });
</script>

{#if mounted && isMobile}
  <slot name="mobile" />
{:else}
  <slot name="desktop" />
{/if}
