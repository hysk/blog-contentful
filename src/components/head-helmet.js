import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const HeadHelmet = ({ title, description }) => {
  const { site } = useStaticQuery(query)

  const seo = {
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description,
  }

  return (
    <Helmet>
      <meta name='description' content={seo.description} />
      <title>{seo.title}</title>
    </Helmet>
  )
}

export default HeadHelmet

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

