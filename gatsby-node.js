const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
    {
      allContentfulBlog {
        edges {
          node {
            title
            description {
              description
            }
            slug
            coverImage {
              file {
                url
              }
              title
            }
            publishDate(locale: "ja-JP", formatString: "YYYY-MM-DD")
            bodyMarkdown {
              childMarkdownRemark {
                html
              }
              bodyMarkdown
            }
          }
        }
      }
    }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { edges }  = result.data.allContentfulBlog

  edges.forEach(edge => {
    createPage({
      path: `/post/${edge.node.slug}/`,
      component: path.resolve("./src/templates/post.js"),
      context: { post: edge.node }
    })
  });
}

