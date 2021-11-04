import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink from "../components/post-link"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      <Hero />
      {data.allContentfulBlog.edges.map(edge =>
        <PostLink key={edge.node.slug} post={edge.node} />
      )}
    </Layout>
  )
}

export const query = graphql`
  query allContentfulPost {
    allContentfulBlog(
      sort: {
        fields: publishDate,
        order: DESC
        }
    )
    {
      edges {
        node {
          title
          slug
          coverImage {
            file {
              url
            }
            title
          }
          publishDate(locale: "ja-JP", formatString: "YYYY-MM-DD")
          bodyMarkdown {
            bodyMarkdown
          }
        }
      }
    }
  }
`
