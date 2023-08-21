// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  ssr: false,
  devtools: { enabled: true },

  app: {
    baseURL: '/',
    head: {
      title: 'Lion Loves Me',
      htmlAttrs: {
        lang: 'ko',
      },
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
      ],
    },
  },
  css: ['destyle.css', '@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";',
        },
      },
    },
  },
})
