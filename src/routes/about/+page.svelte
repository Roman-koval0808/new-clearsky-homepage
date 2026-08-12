<script>
  // ClearSky — ABOUT / Who We Are. Order (from preview): AboutHero → WhatWeDo →
  // OurVision → WhyClearSky → Founders.
  import Responsive from '$lib/Responsive.svelte';

  import Navigation from '$lib/components/Navigation.svelte';
  import AboutHero from '$lib/components/AboutHero.svelte';
  import WhatWeDoSection from '$lib/components/WhatWeDoSection.svelte';
  import OurVisionSection from '$lib/components/OurVisionSection.svelte';
  import WhyClearSkySection from '$lib/components/WhyClearSkySection.svelte';
  import FoundersSection from '$lib/components/FoundersSection.svelte';

  import NavigationMobile from '$lib/components/NavigationMobile.svelte';
  import AboutHeroMobile from '$lib/components/AboutHeroMobile.svelte';
  import WhatWeDoSectionMobile from '$lib/components/WhatWeDoSectionMobile.svelte';
  import OurVisionSectionMobile from '$lib/components/OurVisionSectionMobile.svelte';
  import WhyClearSkySectionMobile from '$lib/components/WhyClearSkySectionMobile.svelte';
  import FoundersSectionMobile from '$lib/components/FoundersSectionMobile.svelte';
</script>

<svelte:head><title>ClearSky — About Us</title></svelte:head>

<Responsive>
  <svelte:fragment slot="desktop">
    <Navigation active="/about" />
    <AboutHero />
    <WhatWeDoSection />
    <OurVisionSection />
    <WhyClearSkySection />
    <FoundersSection />
  </svelte:fragment>
  <svelte:fragment slot="mobile">
    <NavigationMobile />
    <AboutHeroMobile />
    <WhatWeDoSectionMobile />
    <OurVisionSectionMobile />
    <WhyClearSkySectionMobile />
    <FoundersSectionMobile />
  </svelte:fragment>
</Responsive>
