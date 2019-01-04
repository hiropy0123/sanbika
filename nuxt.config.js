// https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/
const CTF_Config = require('./.contentful.json')

module.exports = {
  mode: 'spa',
  srcDir: 'app',

  /*
  ** Headers of the page
  */
  head: {
    title: '賛美歌詞検索アプリ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '賛美歌詞検索アプリ' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Contentful
  */
  env: {
    CTF_SPACE_ID: CTF_Config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: CTF_Config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: CTF_Config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: CTF_Config.CTF_BLOG_POST_TYPE_ID
  },

  /*
  ** Global CSS
  */
  css: ['element-ui/lib/theme-chalk/index.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/element-ui'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
