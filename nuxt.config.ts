// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/fig-assets/flower.svg' }]
    }
  },

  css: ['~/assets/scss/main.scss'],

  svgo: {
    defaultImport: 'component'
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit'
      ]
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables" as *;'
        }
      }
    }
  },

  modules: ['@nuxtjs/device', 'nuxt-svgo']
})