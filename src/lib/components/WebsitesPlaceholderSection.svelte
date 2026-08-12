<script>
  /* Alias: sector pages import WebsitesPlaceholderSection; it renders the locked
     ModernWebsitesSection so there is a single source of truth for the websites
     showcase. Any props passed here are forwarded via $$restProps, so the
     child's own defaults apply when nothing is passed. */
  import ModernWebsitesSection from '$lib/components/ModernWebsitesSection.svelte';
</script>

<ModernWebsitesSection {...$$restProps} />
