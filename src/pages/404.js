import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function NotFound() {
  return (
    <Layout>
      <h1>Not Found</h1>
      <div>
        <Link to="/">top page</Link>
      </div>
    </Layout>
  )
}

