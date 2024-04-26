// Gatsby supports TypeScript natively!
import React, { useEffect, useState } from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FirstPage = (props: PageProps) => {
  //add hooks for api data
  const [data, setData] = useState(null);


  useEffect(() => {
    fetch(`/api/global-fishing-watch`, {
      headers: {
        "content-type": `application/json`,
      },
    })
      .then(res => res.json())
      .then(body => {
        if (body.error) {
         console.log(body.error);
        } else {
          console.log(body.message);
          setData(body.message);
        }
      })
  }, []);
  
  return (
    <Layout>
      <SEO title="Page one" />
      <h1>Hi from the first page</h1>
      <p>Welcome to page 1 ({props.path})</p>
      <Link to="/">Go back to the homepage</Link>

      <div>Testing plumbing to a back end API...</div>

      <div>here's what's returned from calling Global Fishing Watch API:</div>
      <div>{ JSON.stringify(data) }</div>
    </Layout>
  )
}

export default FirstPage
