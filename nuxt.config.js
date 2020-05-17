import colors from "vuetify/es5/util/colors";

const env = require("dotenv").config();
export default {
  env: env.parsed,
  mode: "universal",
  pageTransition: {
    name: "page",
    mode: "out-in",
    enterActiveClass: "animated slideInLeft",
    leaveActiveClass: "animated slideOutRight"
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: "1clicom" || "",
    meta: [
      { charset: "utf-8" },
      // { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fb8c00" },
  /*
   ** Global CSS
   */
  css: ["aos/dist/aos.css", "assets/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/animate_number", ssr: false },
    { src: "~/plugins/vue-pdf.js", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify", "@nuxtjs/global-components"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "nuxtjs-mdi-font",
    "@nuxtjs/svg",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@neneos/nuxt-animate.css",
    [
      "@nuxtjs/redirect-module",
      {
        from: "/",
        to: "/home/"
      }
    ]
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.output.globalObject = "this";
      config.module.rules.push({
        test: /\.pdf$/,
        loader: "url-loader"
      });
    }
  },
  router: {
    base: "/",
    extendRoutes(routes, resolve) {
      routes.push({
        path: "/",
        redirect: "/home"
      });
    }
  }
};
