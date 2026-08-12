<script>
  // ClearSky — Professional Services. Order: Nav → Hero → Steps → Features → Websites → Founders.
  import Responsive from '$lib/Responsive.svelte';

  import Navigation from '$lib/components/Navigation.svelte';
  import ProfessionalServicesHero from '$lib/components/ProfessionalServicesHero.svelte';
  import TradesStepsSection from '$lib/components/TradesStepsSection.svelte';
  import TradesFeaturesSection from '$lib/components/TradesFeaturesSection.svelte';
  import WebsitesPlaceholderSection from '$lib/components/WebsitesPlaceholderSection.svelte';
  import FoundersSection from '$lib/components/FoundersSection.svelte';

  import NavigationMobile from '$lib/components/NavigationMobile.svelte';
  import ProfessionalServicesHeroMobile from '$lib/components/ProfessionalServicesHeroMobile.svelte';
  import TradesStepsSectionMobile from '$lib/components/TradesStepsSectionMobile.svelte';
  import TradesFeaturesSectionMobile from '$lib/components/TradesFeaturesSectionMobile.svelte';
  import WebsitesPlaceholderSectionMobile from '$lib/components/WebsitesPlaceholderSectionMobile.svelte';
  import FoundersSectionMobile from '$lib/components/FoundersSectionMobile.svelte';
</script>

<svelte:head><title>ClearSky — Professional Services</title></svelte:head>

<Responsive>
  <svelte:fragment slot="desktop">
    <Navigation active="/professional-services" />
    <ProfessionalServicesHero />
    <TradesStepsSection />
    <TradesFeaturesSection title="Features that move the Revenue Needle" />
    <WebsitesPlaceholderSection />
    <FoundersSection />
  </svelte:fragment>
  <svelte:fragment slot="mobile">
    <NavigationMobile />
    <ProfessionalServicesHeroMobile />
    <TradesStepsSectionMobile />
    <TradesFeaturesSectionMobile title="Features that move the Revenue Needle" />
    <WebsitesPlaceholderSectionMobile />
    <FoundersSectionMobile />
  </svelte:fragment>
</Responsive>
