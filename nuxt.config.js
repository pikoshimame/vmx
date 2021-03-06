export default {
  srcDir: 'src',
  env: {
    twitterUrl: 'https://twitter.com/club_vmx',
    twitterHashUrl: 'https://twitter.com/search?q=%23%E3%83%9C%E3%82%AB%E3%83%9E%E3%83%8B&f=live'
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: 'VOCALOID-ManiaX オフィシャルサイト',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'VOCALOID-ManiaX(ボーカロイドマニアクス)は、VOCALOID(ボーカロイド)が得意とするジャンルの一つである「ダンスミュージック」というジャンルを主軸にしたパーティーです。'},
      {itemprop: 'name', content: 'VOCALOID-ManiaX オフィシャルサイト'},
      {itemprop: 'description', content: 'VOCALOID-ManiaX(ボーカロイドマニアクス)は、VOCALOID(ボーカロイド)が得意とするジャンルの一つである「ダンスミュージック」というジャンルを主軸にしたパーティーです。'},
      {itemprop: 'itemprop', content: 'https://club-vmx.com/ogp.jpg'},
      {property: 'og:url', content: 'https://club-vmx.com'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'VOCALOID-ManiaX オフィシャルサイト'},
      {property: 'og:description', content: 'VOCALOID-ManiaX(ボーカロイドマニアクス)は、VOCALOID(ボーカロイド)が得意とするジャンルの一つである「ダンスミュージック」というジャンルを主軸にしたパーティーです。'},
      {property: 'og:image', content: 'https://club-vmx.com/ogp.jpg'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'VOCALOID-ManiaX オフィシャルサイト'},
      {name: 'twitter:description', content: 'VOCALOID-ManiaX(ボーカロイドマニアクス)は、VOCALOID(ボーカロイド)が得意とするジャンルの一つである「ダンスミュージック」というジャンルを主軸にしたパーティーです。'},
      {name: 'twitter:image', content: 'https://club-vmx.com/summary_large_image.jpg'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png'},
      {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png'},
      {rel: 'manifest', href: '/manifest.json'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli:200,300'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:500'}
    ]
  },
  css: [
    'reset-css',
    '~/assets/scss/_global.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#000'
  },
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/assets/',
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },
  plugins: [
    '~/plugins/contentful',
    '~/plugins/vue-js-modal'
  ],
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  googleAnalytics: {
    id: 'UA-75339071-1'
  },
  styleResources: {
    scss: [
      '~/assets/scss/_variables.scss',
    ],
  },
  router: {
    trailingSlash: false,
    middleware: 'redirect'
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
};
