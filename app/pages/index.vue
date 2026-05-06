<template>
  <main>
    <HeroComingSoon v-if="comingSoon" />
    <HeroSection v-else />
    <template v-if="!comingSoon">
      <VenuePhoto />
      <RsvpSection />
      <FloralDivider />
      <RegistrySection />
      <FloralDivider />
      <DirectionsSection />
      <FloralDivider />
      <ThankYouSection />
      <SiteFooter />
    </template>
  </main>
</template>

<script setup lang="ts">
const { comingSoon } = useAppConfig()


useHead({
  title: 'Baby Shower — Suzanne Runyard',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Dancing+Script:wght@500;700&family=Jost:wght@300;400;500&display=swap'
    }
  ]
})
</script>
