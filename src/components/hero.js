import React from "react"
import ICON from "../../static/icon.png"
import "../styles/hero.css"

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-text">
        Tech Canvas
      </h1>
      <div className="hero-author">
        <img src={ICON} className="hero-author-image" alt="avatar"></img>
        <p className="hero-author-text">
            Techな備忘をつらつらと書く
        </p>
      </div>
    </div>
  )
}
