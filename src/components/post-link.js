import React from "react"
import { Link } from "gatsby"
import NO_IMAGE from "../../static/no_image_yoko.jpeg"
import "../styles/post-link.css"

export default function PostLink({ post }) {
  const { title, publishDate, coverImage } = post;
  const description = post.body ? post.body.raw : 'no desc';
  const pageLink = `/post/${post.slug}/`

  let image;
  if (coverImage) {
    image = coverImage.file.url;
  } else {
    image = NO_IMAGE
  }

          //<!-- <img src={coverImage.file.url} className="post-link-image" alt="post-cover"></img> -->
  return (
    <Link to={pageLink} className="post-link-anchor">
      <div className="post-link">
        <div clanName="post-link-text">
          <h2>{title}</h2>
          <p className="post-link-date">{publishDate}</p>
          <p className="post-link-body">{description}</p>
        </div>
        <div>
          <img src={image} className="post-link-image" alt="post-cover"></img>
        </div>
      </div>
    </Link>
  )
}


