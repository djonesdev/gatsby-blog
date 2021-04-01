const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: "Gatsby Blog",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-material-ui`, 
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "F9zoGRMVaUwkEQkm5KFubf6kK48ZHcxHw9GDCy35jaw",
        spaceId: "eiryeb6ln5ij",
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: { 
           typeName: `gatsbyappsync`,
           fieldName: `gatsbyappsync`,
           url: `https://a5tctlkw5vgyficpnzcbhkzs7a.appsync-api.eu-west-1.amazonaws.com/graphql`,
           headers: {
               'x-api-key': 'da2-amhy4wasvfgwhemfzweukqv73u'
           }
      },
    }
  ],
};
