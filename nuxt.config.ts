import { Context } from "vm";

const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/nuxt-gh-pages-404-reproduction/",
        },
      }
    : {};

export default {
  /** Build configuration */
  build: {
    extend(config: any, context: Context) {
      if (context.isDev && !process.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(ts|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
    loaders: {
      // we want to use sass instead of node-sass
      sass: {
        import: ["~assets/style/app.sass", "~assets/style/default.sass"],
        implementation: require("sass"),
        fiber: require("fibers"),
      },
    },
    plugins: [new VuetifyLoaderPlugin()],
    transpile: ["vuetify/lib"],
    typescript: {
      // this is required - if set to true the HMR in dev will time out
      typeCheck: false,
    },
  },
  /** @see https://typescript.nuxtjs.org/migration.html */
  buildModules: ["@nuxt/typescript-build"],
  /** Plugins to load before mounting the App **/
  plugins: ["~/plugins/hello", "~/plugins/vuetify"],
  /** typescript config for nuxt */
  typescript: {
    typeCheck: false,
    ignoreNotFoundWarnings: true,
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Global CSS
   */
  css: [
    { src: "~assets/style/default.scss", lang: "scss" }, // sass 대신 scss
  ],
  ...routerBase,
};
