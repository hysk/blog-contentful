import React from "react"
import "../styles/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      Copyright {new Date().getFullYear()} Tech Blog
    </footer>
  )
}

