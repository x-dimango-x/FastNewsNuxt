export default defineNuxtConfig({
  title: 'Fast News',
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
})
