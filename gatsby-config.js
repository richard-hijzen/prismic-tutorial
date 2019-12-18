/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}) 

module.exports = {
  siteMetadata: {
    siteUrl: `https://lovecode.nl`,
  },
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `prismictut`,
        accessToken: `${process.env.netlify_access_token}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },

    /*{
      resolve: 'gatsby-plugin-snipcart',
      options: {
          apiKey: 'ZTY2ZWQ2M2ItNDdkNy00ZGFhLTg1Y2MtOTg4MTI3YTMyZmRiNjM3MDY2NzQ3MjIyMTQ0MDc0',
          autopop: true
      }
  },*/

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Estate in Olanda`,
        short_name: `Olanda`,
        lang: 'nl',
        start_url: `/`,
        background_color: `#3abcda`,
        theme_color: `#3abcda`,
        display: `standalone`,
        icon: `src/images/summer.png`
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-material-ui`
  ],
}
