const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve('src/templates/page.js');
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: `${edge.node.frontmatter.path}`,
        component: pageTemplate,
        context: {},
      });
    });
  });
};
