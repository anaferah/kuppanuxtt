const pkg = require("./package");

export default {
  mode: "universal",
  target: "static",
  loadingIndicator: {
    name: 'circle',
    color: '#03002f',
    background: 'white'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://use.typekit.net/uzx2elw.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/css/flag-icon.min.css",
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#03002f", throttle: 0, height: '5px'},

  /*
   ** Global CSS
   */
  css: [
    "@/assets/css/resetr.css", 
    "@/assets/css/common.css",    
  ],
  modules: [
    '@nuxtjs/style-resources',
    "nuxt-lazyimage",
    "@bazzite/nuxt-optimized-images"
  ],
  styleResources: {scss: ["@/assets/scss/main.scss"]},
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/prismicLinks", ssr: false },
    {src: '~/plugins/imagesLoaded.js', ssr: false },
    '@/plugins/gtag'
  ],
    /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/prismic", 
   ['nuxt-i18n', {
    // ...
    detectBrowserLanguage: {
      useCookie: false,
      cookieKey: 'i18n_redirected',
      // onlyOnRoot: true,  // recommended
    }
  }]
  ],
  buildModules: [    
    '@aceforth/nuxt-optimized-images',
    ['nuxt-i18n', {
      // ...
      detectBrowserLanguage: {
        useCookie: false,
        cookieKey: 'i18n_redirected',
        onlyOnRoot: true,  // recommended
      }
    }]
  ],
   optimizedImages: {
    optimizeImages: true
  },
  prismic: {
    endpoint: "https://kuppaweb.cdn.prismic.io/api/v2",
    disableGenerator: false,
    preview: false
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // to transform link with <nuxt-link> for the htmlSerializer
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    },
    transpile: [
      
    ],
  },

  generate: {
    fallback: "404.html", // Netlify reads a 404.html, Nuxt will load as an SPA
  },
};
