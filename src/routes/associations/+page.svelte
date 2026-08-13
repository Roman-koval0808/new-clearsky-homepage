<script>
  // ClearSky — ASSOCIATIONS. Order (from preview): Hero → ScaleAdvantage
  // ("Why It Only Works at Scale") → LeverageScale ("How We Leverage Scale") →
  // CTA. No Founders section on Associations (per mobile handoff).
  import Responsive from '$lib/Responsive.svelte';

  import Navigation from '$lib/components/Navigation.svelte';
  import AssociationsHero from '$lib/components/AssociationsHero.svelte';
  import ScaleAdvantageSection from '$lib/components/ScaleAdvantageSection.svelte';
  import LeverageScaleSection from '$lib/components/LeverageScaleSection.svelte';
  import WhyClearSkySection from '$lib/components/WhyClearSkySection.svelte';
  import AssociationsCTA from '$lib/components/AssociationsCTA.svelte';

  import NavigationMobile from '$lib/components/NavigationMobile.svelte';
  import AssociationsHeroMobile from '$lib/components/AssociationsHeroMobile.svelte';
  import ScaleAdvantageSectionMobile from '$lib/components/ScaleAdvantageSectionMobile.svelte';
  import LeverageScaleSectionMobile from '$lib/components/LeverageScaleSectionMobile.svelte';
  import WhyClearSkySectionMobile from '$lib/components/WhyClearSkySectionMobile.svelte';
  import AssociationsCTAMobile from '$lib/components/AssociationsCTAMobile.svelte';
</script>

<svelte:head><title>ClearSky — Associations</title></svelte:head>

<Responsive>
  <svelte:fragment slot="desktop">
    <Navigation active="/associations" />
    <AssociationsHero />
    <ScaleAdvantageSection />
    <LeverageScaleSection />
    <WhyClearSkySection />
    <AssociationsCTA />
  </svelte:fragment>
  <svelte:fragment slot="mobile">
    <NavigationMobile />
    <AssociationsHeroMobile />
    <ScaleAdvantageSectionMobile />
    <LeverageScaleSectionMobile />
    <WhyClearSkySectionMobile />
    <AssociationsCTAMobile />
  </svelte:fragment>
</Responsive>
