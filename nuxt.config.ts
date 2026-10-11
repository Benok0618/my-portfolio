import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

const photoCandidates = ['hero.jpg', 'hero.webp', 'profile.webp', 'profile.jpg', 'profile.png']
const profilePhoto =
  photoCandidates.find((file) => existsSync(resolve(process.cwd(), 'public/images', file))) ?? ''

export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  runtimeConfig: {
    public: {
      hasProfilePhoto: Boolean(profilePhoto),
      profilePhoto: profilePhoto ? `/images/${profilePhoto}` : '',
    },
  },
  nitro: {
    output: {
      publicDir: 'dist',
    },
  },
  css: [
    '@fontsource-variable/inter/index.css',
    '@fontsource-variable/jetbrains-mono/index.css',
    '~/assets/css/app.css',
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Lennox Luis Omaña — Full-stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Full-stack developer building government and health-tech systems with Laravel, Vue 3 and Inertia.js. Computer Science graduate based in Los Baños, Laguna, Philippines.',
        },
        { name: 'theme-color', content: '#0a0c10' },
        { name: 'author', content: 'Lennox Luis Omaña' },
        {
          name: 'keywords',
          content:
            'Full-stack Developer, Laravel, Vue.js, Inertia.js, PHP, Python, Portfolio, Health-Tech, Philippines',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Lennox Luis Omaña — Full-stack Developer' },
        {
          property: 'og:description',
          content:
            'Full-stack developer building government and health-tech systems with Laravel, Vue 3 and Inertia.js.',
        },
        { property: 'og:locale', content: 'en_PH' },
        { property: 'og:image', content: '/og.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Lennox Luis Omaña — Full-stack Developer' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Lennox Luis Omaña — Full-stack Developer' },
        {
          name: 'twitter:description',
          content:
            'Full-stack developer building government and health-tech systems with Laravel, Vue 3 and Inertia.js.',
        },
        { name: 'twitter:image', content: '/og.png' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
})
