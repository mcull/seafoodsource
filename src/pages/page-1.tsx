import React, { useEffect, useState } from "react"
import { PageProps, Link } from "gatsby"
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

import Layout from "../components/layout"
import SEO from "../components/seo"

const FirstPage = (props: PageProps) => { 
  const position = {lat: 61.2176, lng: -149.8997};
  return (
    <Layout>
      <div style={{width:"100%", height:"100%"}}>
        <APIProvider apiKey='AIzaSyB7zqm5DZe69b4yhNABx90krs5Ck4u2MYE'>
        <Map defaultCenter={position} defaultZoom={10}>
          <Marker position={position} />
        </Map>
      </APIProvider>
      </div>
    </Layout>
  )
}

export default FirstPage
