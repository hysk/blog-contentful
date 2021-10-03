import React from "react"
import "../styles/post.css"
import Layout from "../components/layout"

export default function Post({ pageContext }) {
  const { title, publishDate, coverImage } = pageContext.post;
  //const body = pageContext.post.bodyMarkdown.bodyMarkdown.childMarkdownRemark.html;
  const body = pageContext.post.bodyMarkdown.childMarkdownRemark.html;

  return (
    <Layout>
      <div className="post-header">
        <h1>{title}</h1>
        <p className="post-date">{publishDate}</p>
      </div>
      <img src={coverImage.file.url} className="post-image" alt="post-cover"></img>
      <div dangerouslySetInnerHTML={{ __html: body }} className="post-body" />
    </Layout>
  )
}

