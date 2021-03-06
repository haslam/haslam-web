module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.hassansalami.com',
    title: 'Haslam web',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
}
