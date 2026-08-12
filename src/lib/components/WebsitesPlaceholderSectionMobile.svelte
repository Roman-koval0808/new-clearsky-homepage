<script>
  /* Alias (mobile): renders the locked ModernWebsitesSectionMobile carousel so
     the sector mobile pages share one source of truth. Props forwarded via
     $$restProps; child defaults apply when nothing is passed. */
  import ModernWebsitesSectionMobile from '$lib/components/ModernWebsitesSectionMobile.svelte';
</script>

<ModernWebsitesSectionMobile {...$$restProps} />
