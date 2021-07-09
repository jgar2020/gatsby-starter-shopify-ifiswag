require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "Independent forensics Swag Store",
    siteTitleDefault: "Independent forensics Swag Store",
    siteUrl: "https://ifiswag.gatsbyjs.io",
    hrefLang: "en",
    siteDescription:
      "A fun swag store for Independent Forensics.",
    siteImage: "/favicon.ico",
    twitter: "@jgcreates",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_ADMIN_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}
