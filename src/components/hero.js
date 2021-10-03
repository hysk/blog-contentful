import React from "react"
import ICON from "../../static/icon.png"
import "../styles/hero.css"

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-text">
        Welcome to my blog.<br />
        Enjoy lots of posts.<br />
      </h1>
      <div className="hero-author">
        <img src={ICON} className="hero-author-image" alt="avatar"></img>
        <p className="hero-author-text">
            Written by HOGEHOGE.<br />
            Food fighter at Hoge.Inc. Love Eating.
        </p>
      </div>
    </div>
  )
}
