import React from "react"
import { Link } from "gatsby"
import "../styles/post-link.css"

export default function PostLink({ post }) {
  const { title, publishDate, coverImage } = post;
  const description = post.body.raw;
  const pageLink = `/post/${post.slug}/`

  return (
    <Link to={pageLink} className="post-link-anchor">
      <div className="post-link">
        <div>
          <img src={coverImage.file.url} className="post-link-image" alt="post-cover"></img>
        </div>
        <div clanName="post-link-text">
          <h2>{title}</h2>
          <p className="post-link-date">{publishDate}</p>
          <p className="post-link-body">{description}</p>
        </div>
      </div>
    </Link>
  )
}


