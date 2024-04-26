import React, { useEffect, useState } from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ApiExplorer = (props: PageProps) => {
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
      <SEO title="API Explorer" />
      <h1>Global Fishing Watch</h1>

      <div>here's what's returned from calling Global Fishing Watch API:</div>
      <pre>https://gateway.api.globalfishingwatch.org/v3/vessels/search?query=7831410&datasets[0]=public-global-vessel-identity:latest</pre>
      <div>{ data && JSON.stringify(data) }</div>
    </Layout>
  )
}

export default ApiExplorer