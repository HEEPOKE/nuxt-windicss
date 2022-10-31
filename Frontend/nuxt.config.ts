// import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        'nuxt-windicss',
      ],
      windicss: {
        scan: {
          dirs: ['./'],
          exclude: [
            'node_modules',
            'dist',
            '.nuxt',
          ],
        },
      },
})
