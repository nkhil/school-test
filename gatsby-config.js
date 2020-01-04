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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`limelight`, `ibm plex sans:300,600`],
        display: 'swap',
      },
    },
    `gatsby-transformer-remark`,
  ],
};
