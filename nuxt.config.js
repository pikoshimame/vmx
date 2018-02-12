const nodeExternals = require('webpack-node-externals');

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
      { name: 'viewport', content: 'width=640, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'VOCALOID-ManiaX(ボーカロイドマニアクス)は、VOCALOID(ボーカロイド)が得意とするジャンルの一つである「ダンスミュージック」というジャンルを主軸にしたパーティーです。' },
      { property: 'og:title', content: 'VOCALOID-ManiaX オフィシャルサイト' },
      { property: 'og:description', content: 'VOCALOID-ManiaX(ボーカロイドマニアクス)は、VOCALOID(ボーカロイド)が得意とするジャンルの一つである「ダンスミュージック」というジャンルを主軸にしたパーティーです。' },
      { property: 'og:image', content: 'https://club-vmx.com/images/ico_logo.gif' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:image:src', content: 'https://club-vmx.com/images/twitter_card_large.png' },
      { property: 'twitter:description', content: 'VOCALOID-ManiaX(ボーカロイドマニアクス)は、VOCALOID(ボーカロイド)が得意とするジャンルの一つである「ダンスミュージック」というジャンルを主軸にしたパーティーです。' }
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
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (isServer) {
        config.externals = [
          nodeExternals({
            // default value for `whitelist` is
            // [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i]
            whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/]
          })
        ]
      }
    },
    vendor: ['~/plugins/contentful']
  },
  plugins: ['~/plugins/contentful'],
  modules: ['@nuxtjs/dotenv']
}
