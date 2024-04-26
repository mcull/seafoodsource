// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FirstPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page one" />
    <h1>Hi from the first page</h1>
    <p>Welcome to page 1 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FirstPage
