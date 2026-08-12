<script>
  // ClearSky — TRADES. Order: Nav → TradesHero → Steps → Features →
  // ModernWebsites → Founders.
  import Responsive from '$lib/Responsive.svelte';

  import Navigation from '$lib/components/Navigation.svelte';
  import TradesHero from '$lib/components/TradesHero.svelte';
  import TradesStepsSection from '$lib/components/TradesStepsSection.svelte';
  import TradesFeaturesSection from '$lib/components/TradesFeaturesSection.svelte';
  import ModernWebsitesSection from '$lib/components/ModernWebsitesSection.svelte';
  import FoundersSection from '$lib/components/FoundersSection.svelte';

  import NavigationMobile from '$lib/components/NavigationMobile.svelte';
  import TradesHeroMobile from '$lib/components/TradesHeroMobile.svelte';
  import TradesStepsSectionMobile from '$lib/components/TradesStepsSectionMobile.svelte';
  import TradesFeaturesSectionMobile from '$lib/components/TradesFeaturesSectionMobile.svelte';
  import ModernWebsitesSectionMobile from '$lib/components/ModernWebsitesSectionMobile.svelte';
  import FoundersSectionMobile from '$lib/components/FoundersSectionMobile.svelte';
</script>

<svelte:head><title>ClearSky — Trades</title></svelte:head>

<Responsive>
  <svelte:fragment slot="desktop">
    <Navigation active="/trades" />
    <TradesHero />
    <TradesStepsSection />
    <TradesFeaturesSection />
    <ModernWebsitesSection />
    <FoundersSection />
  </svelte:fragment>
  <svelte:fragment slot="mobile">
    <NavigationMobile />
    <TradesHeroMobile />
    <TradesStepsSectionMobile />
    <TradesFeaturesSectionMobile />
    <ModernWebsitesSectionMobile />
    <FoundersSectionMobile />
  </svelte:fragment>
</Responsive>
