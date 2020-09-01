const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }, options) => {
  const { createPage } = actions

  const posts = await graphql(
    `
      {
        allMarkdownRemark(
          limit: 2000
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                description
                date
              }
            }
          }
        }
      }
    `
  )

  if (posts.data) {
    posts.data.allMarkdownRemark.edges.forEach(page => {
      let match = page.node.fields.slug.match(/^\/([\w-]+)\/(?:)/i)

      if (match !== null && match.length > 1) {
        match = match[1]
      } else {
        match = "default"
      }

      createPage({
        path: page.node.fields.slug,
        component: path.resolve(`./src/layouts/article/${match}.jsx`),
        context: {
          slug: page.node.fields.slug,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `articles` })
    const { createNodeField } = actions

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-javascript") {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === "MiniCssExtractPlugin"
    )

    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }

    actions.replaceWebpackConfig(config)
  }
}
