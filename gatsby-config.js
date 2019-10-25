/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}) 

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `prismictut`,
        accessToken: `${process.env.netlify_access_token}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Calibre\:300,400,400i,500,700`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },

    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
          apiKey: process.env.GATSBY_SNIPCART_APIKEY
      }
  },

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
        start_url: `/`,
        background_color: `#3abcda`,
        theme_color: `#3abcda`,
        display: `standalone`,
        icon: `src/images/summer.png`
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
