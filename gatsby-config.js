module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `board`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
