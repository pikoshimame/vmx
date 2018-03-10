module.exports = {
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
      { itemprop: 'itemprop', content: 'https://club-vmx.com/ogp.png' },
      { property: 'og:url', content: 'https://club-vmx.com' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'VOCALOID-ManiaX オフィシャルサイト' },
      { property: 'og:description', content: 'VOCALOID-ManiaX(ボーカロイドマニアクス)は、VOCALOID(ボーカロイド)が得意とするジャンルの一つである「ダンスミュージック」というジャンルを主軸にしたパーティーです。' },
      { property: 'og:image', content: 'https://club-vmx.com/ogp.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'VOCALOID-ManiaX オフィシャルサイト' },
      { name: 'twitter:description', content: 'VOCALOID-ManiaX(ボーカロイドマニアクス)は、VOCALOID(ボーカロイド)が得意とするジャンルの一つである「ダンスミュージック」というジャンルを主軸にしたパーティーです。' },
      { name: 'twitter:image', content: 'https://club-vmx.com/summary_large_image.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli:200,200i,300,300i' }
    ]
  },
  css: [
    'normalize.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#00a782' },
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
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['~/plugins/contentful', '~/plugins/vue-js-modal']
  },
  plugins: ['~/plugins/contentful', '~/plugins/vue-js-modal'],
  modules: ['@nuxtjs/dotenv', '@nuxtjs/google-analytics'],
  'google-analytics': {
    id: 'UA-75339071-1'
  }
}
