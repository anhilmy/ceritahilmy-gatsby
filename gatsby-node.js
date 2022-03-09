const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allWpPost {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching postss", result.errors)
  }

  const { allWpPost } = result.data
  if (allWpPost.nodes.length) {
    allWpPost.nodes.map(post => {
      createPage({
        component: path.resolve(`./src/templates/wp-post.js`),
        path: post.slug,
        context: post,
      })
    })
  }

}

// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     {
//       allWpPost(sort: {fields: [date]}){
//         nodes {
//           title
//           excerpt
//           content
//           slug
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allWpPost.nodes.map(node => {
//       createPage({
//         path: node.slug,
//         component: path.resolve(`./src/templates/blog-post.js`),
//         context: {
//           slug: node.slug
//         }
//       })
//     })
//   })
// }