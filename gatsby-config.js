module.exports = {
  siteMetadata: {
    title: "Gatsby Blog",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "CFPAT-8QtLAcDG7r4mGASVdfKEJmiledXqsMqslCAJCg51dwo",
        spaceId: "eiryeb6ln5ij",
      },
    },
  ],
};
