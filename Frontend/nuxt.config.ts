// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: process.env.NameApp,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          hid: "description",
          name: "description",
          content: process.env.DescriptionApp,
        },
      ],
    }
  },
  modules: [
      'nuxt-windicss',
    ],
})
