module.exports = {
  siteMetadata: {
    title: `Kwinten Delrue`,
    description: `I am Kwinten and I am a Infrastructure engineer & frontend developer`,
    author: `Kwinten Delrue`,
    siteUrl: `https://kwinten.me`
  },
  plugins: [
    `gatsby-plugin-cname`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio kwinten`,
        short_name: `kwinten`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/me.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'nl',
        useLangKeyLayout: false
      }
    },
    // {
    //   resolve: `gatsby-plugin-posthog-analytics`,
    //   options: {
    //     // Specify the API key for your Posthog Project (required)
    //     apiKey: "xUHFiBHmqFBKb4AUrXHFDwnr57_fCtPLw0nqJ-vQauw",
    //     // Specify the app host if self-hosting (optional, default: https://app.posthog.com)
    //     appHost: "https://analytics.kwinten.me",
    //     // Puts tracking script in the head instead of the body (optional, default: true)
    //     head: true,
    //   },
    // },
  ],
}
