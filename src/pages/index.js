import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="text-center sm:text-left ">
      <h1>Headline!</h1>
      <p>Lorem ipsum dolor sit amet</p>
      <div className="text-9xl my-24">
      🎣
      </div>
    </div>
  </Layout>
)

export default IndexPage
