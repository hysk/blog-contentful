import React from "react"
import "../styles/post.css"
import Layout from "../components/layout"
import HeadHelmet from "../components/head-helmet"

export default function Post({ pageContext }) {
  const { title, publishDate, coverImage } = pageContext.post;
  const body = pageContext.post.bodyMarkdown.childMarkdownRemark.html;
  const description = pageContext.post.description ? pageContext.post.description.description : '';

  let cover;
  if (coverImage) {
    cover = <img src={coverImage.file.url} className="post-image" alt="post-cover"></img>;
  }

  return (
    <Layout>
      <HeadHelmet
        title={title}
        description={description}
      />
      <div className="post-header">
        <h1>{title}</h1>
        <p className="post-date">{publishDate}</p>
      </div>
      {cover}
      <div dangerouslySetInnerHTML={{ __html: body }} className="post-body" />
    </Layout>
  )
}

