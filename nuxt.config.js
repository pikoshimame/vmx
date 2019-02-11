module.exports = {
  srcDir: 'src',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    title: 'VOCALOID-ManiaX オフィシャルサイト',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=640' },
      { hid: 'description', name: 'description', content: 'VOCALOID-ManiaX(ボーカロイドマニアクス)は、VOCALOID(ボーカロイド)が得意とするジャンルの一つである「ダンスミュージック」というジャンルを主軸にしたパーティーです。' },
      { itemprop: 'name', content: 'VOCALOID-ManiaX オフィシャルサイト' },
      { itemprop: 'description', content: 'VOCALOID-ManiaX(ボーカロイドマニアクス)は、VOCALOID(ボーカロイド)が得意とするジャンルの一つである「ダンスミュージック」というジャンルを主軸にしたパーティーです。' },
      { itemprop: 'itemprop', content: 'https://club-vmx.com/ogp.jpg' },
      { property: 'og:url', content: 'https://club-vmx.com' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'VOCALOID-ManiaX オフィシャルサイト' },
      { property: 'og:description', content: 'VOCALOID-ManiaX(ボーカロイドマニアクス)は、VOCALOID(ボーカロイド)が得意とするジャンルの一つである「ダンスミュージック」というジャンルを主軸にしたパーティーです。' },
      { property: 'og:image', content: 'https://club-vmx.com/ogp.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'VOCALOID-ManiaX オフィシャルサイト' },
      { name: 'twitter:description', content: 'VOCALOID-ManiaX(ボーカロイドマニアクス)は、VOCALOID(ボーカロイド)が得意とするジャンルの一つである「ダンスミュージック」というジャンルを主軸にしたパーティーです。' },
      { name: 'twitter:image', content: 'https://club-vmx.com/summary_large_image.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli:200,300' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:500' }
    ]
  },
  css: [
    'normalize.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#148dd3' },
  /*
  ** Build configuration
  */
  generate: {
    minify: {
      removeScriptTypeAttributes: true
    },
    fallback: true
  },
  build: {
    publicPath: '/assets/',
    /*
    ** Run ESLint on save
    */
    extend(config) {
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~/plugins/contentful', '~/plugins/vue-js-modal'],
  modules: ['@nuxtjs/dotenv', '@nuxtjs/google-analytics', '@nuxtjs/pwa'],
  'google-analytics': {
    id: 'UA-75339071-1'
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://.*contentful.com/.*',
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: 'https://.*ctfassets.net/.*',
        handler: 'staleWhileRevalidate'
      }
    ]
  }
}
