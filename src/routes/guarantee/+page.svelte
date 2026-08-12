<script>
  // ClearSky — GUARANTEE / Protected Markets. Order: Nav → Hero → Sectors →
  // Guarantee → Founders.
  import Responsive from '$lib/Responsive.svelte';

  import Navigation from '$lib/components/Navigation.svelte';
  import ProtectedMarketsHero from '$lib/components/ProtectedMarketsHero.svelte';
  import ProtectedSectorsSection from '$lib/components/ProtectedSectorsSection.svelte';
  import GuaranteeSection from '$lib/components/GuaranteeSection.svelte';
  import FoundersSection from '$lib/components/FoundersSection.svelte';

  import NavigationMobile from '$lib/components/NavigationMobile.svelte';
  import ProtectedMarketsHeroMobile from '$lib/components/ProtectedMarketsHeroMobile.svelte';
  import ProtectedSectorsSectionMobile from '$lib/components/ProtectedSectorsSectionMobile.svelte';
  import GuaranteeSectionMobile from '$lib/components/GuaranteeSectionMobile.svelte';
  import FoundersSectionMobile from '$lib/components/FoundersSectionMobile.svelte';
</script>

<svelte:head><title>ClearSky — Guarantee</title></svelte:head>

<Responsive>
  <svelte:fragment slot="desktop">
    <Navigation active="/guarantee" />
    <ProtectedMarketsHero />
    <ProtectedSectorsSection />
    <GuaranteeSection />
    <FoundersSection />
  </svelte:fragment>
  <svelte:fragment slot="mobile">
    <NavigationMobile />
    <ProtectedMarketsHeroMobile />
    <ProtectedSectorsSectionMobile />
    <GuaranteeSectionMobile />
    <FoundersSectionMobile />
  </svelte:fragment>
</Responsive>
