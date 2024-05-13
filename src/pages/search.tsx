// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubNav from "../components/subnav"

const Search = (props: PageProps) => (
  <Layout>
    <SubNav page="search"></SubNav>
    <SEO title="Page three" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 3 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Search
