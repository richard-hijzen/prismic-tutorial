const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for article nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const getPosts = makeRequest(graphql, `
    {
      allPrismicPost {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `).then(result => {
    // Create pages for each article in prismic
    result.data.allPrismicPost.edges.forEach(({ node }) => {
        createPage({
          path: `/${node.uid}`,
          component: path.resolve(`src/templates/post.jsx`),
          context: {
            uid: node.uid,
          },
        })
    })
  });

  // Create pages for each page in prismic
  const getPages = makeRequest(graphql, `
  {
    allPrismicPage {
      edges {
        node {
          id
          uid
        }
      }
    }
  }
`).then(result => {
  // Create pages for each article.
  result.data.allPrismicPage.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.uid}`,
        component: path.resolve(`src/templates/page.jsx`),
        context: {
          uid: node.uid,
        },
      })
  })
});

  // Create pages for each product in prismic
  const getProducts = makeRequest(graphql, `
  {
    allPrismicProduct {
      edges {
        node {
          id
          uid
        }
      }
    }
  }
`).then(result => {
  // Create pages for each article.
  result.data.allPrismicProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.uid}`,
        component: path.resolve(`src/templates/product.jsx`),
        context: {
          uid: node.uid,
        },
      })
  })
});

  return Promise.all([
    getPosts,
    getPages,
    getProducts
  ])
};