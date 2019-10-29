module.exports = {
  pathPrefix: `/tour-of-taiwan`,
  siteMetadata: {
    title: 'Tour of Taiwan',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-flow',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'UMCP TASA Tour of Taiwan',
        short_name: 'Tour of Taiwan',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/img/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
}