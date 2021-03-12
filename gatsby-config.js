const siteMetadata = {
  title: "Zahnärztin Dr. Sandra Faltermeier",
  description: "Zahnärztin Dr. Sandra Faltermeier",
  siteUrl: "https://drfaltermeier.de",
  short_name: "Zahnärztin Dr. Faltermeier",
  author: "Inaki Breinbauer",
};

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = siteMetadata.siteUrl,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: { ...siteMetadata },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preload-fonts`,
    "gatsby-plugin-preact",
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "uploads",
      },
    },
    "gatsby-plugin-image",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-svgr",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images-v2",
            options: {
              staticFolderName: "src/img",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1300,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.short_name,
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        icon: "src/img/dr-faltermeier-favicon.png",
        display: "standalone",
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        exclude: ["/admin", "/bewertung"],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    //`gatsby-plugin-offline`,
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GOOGLE TAG MANAGER ID",
        includeInDevelopment: false,
        // Defaults to gatsby-route-change
        routeChangeEventName: "page_change",
      },
    },
    "gatsby-plugin-postcss",
    //"gatsby-plugin-netlify-cache",
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
