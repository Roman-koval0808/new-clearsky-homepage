<script>
  // ClearSky — HOME. Order (from README): Nav → Hero → Revenue → Sectors →
  // GrowthEngine → Founders. Desktop/mobile swap via Responsive.
  import Responsive from '$lib/Responsive.svelte';

  import Navigation from '$lib/components/Navigation.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import RevenueSection from '$lib/components/RevenueSection.svelte';
  import SectorsSection from '$lib/components/SectorsSection.svelte';
  import EcosystemSection from '$lib/components/EcosystemSection.svelte';
  import GrowthEngineSection from '$lib/components/GrowthEngineSection.svelte';
  import FoundersSection from '$lib/components/FoundersSection.svelte';

  import NavigationMobile from '$lib/components/NavigationMobile.svelte';
  import HeroMobile from '$lib/components/HeroMobile.svelte';
  import RevenueSectionMobile from '$lib/components/RevenueSectionMobile.svelte';
  import SectorsSectionMobile from '$lib/components/SectorsSectionMobile.svelte';
  import GrowthEngineSectionMobile from '$lib/components/GrowthEngineSectionMobile.svelte';
  import FoundersSectionMobile from '$lib/components/FoundersSectionMobile.svelte';
</script>

<svelte:head><title>ClearSky Software — Managed Growth Ecosystem</title></svelte:head>

<Responsive>
  <svelte:fragment slot="desktop">
    <Navigation active="/" />
    <Hero />
    <!-- <RevenueSection /> -->
    <SectorsSection />
    <EcosystemSection />
    <GrowthEngineSection />
    <FoundersSection />
  </svelte:fragment>
  <svelte:fragment slot="mobile">
    <NavigationMobile />
    <HeroMobile />
    <!-- <RevenueSectionMobile /> -->
    <SectorsSectionMobile />
    <!-- <EcosystemSection /> -->
    <GrowthEngineSectionMobile />
    <FoundersSectionMobile />
  </svelte:fragment>
</Responsive>
