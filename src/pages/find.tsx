import React, { useEffect, useState } from "react"
import { PageProps, Link } from "gatsby"
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

import Layout from "../components/layout"
import SEO from "../components/seo"

type Restaurant = {
  name: string;
  address: string;
  statement: string;
  url: string;
  lat: string;
  long: string;
};

const Find = (props: PageProps) => { 
  const position = {lat: 37.7749, lng: -122.407234};
  const restaurants = [{
                        name: "Waterbar",
                        address: "399 The Embarcadero, San Francisco, CA 94105",
                        statement: "Waterbar strives to ensure the highest standard of environmentally safe, sustainably-sourced seafood from both local and international waters, respecting seasonality and the natural essence of the sea.",
                        url:"https://www.waterbarsf.com/",
                        lat: "37.789700",
                        long: "-122.388367"
                      },
                      {
                        name: "Fog Harbor",
                        address: "Pier 39, San Francisco, CA 94133",
                        statement: "Fog Harbor is proud to be the first restaurant on Fisherman’s Wharf to offer a 100% sustainable seafood menu and proud to be a Platinum Sustainable Seafood Alliance partner based on recommendations from Aquarium of the Bay.",
                        url: "https://fogharbor.com/",
                        lat: "37.809669",
                        long: "-122.409988"
                      },
                      {
                        name: "Aphotic",
                        address: "816 Folsom Street, San Francisco, CA 94107",
                        statement: "Aphotic Restaurant was born out of necessity. Chef Peter Hemsley set out to establish a best-practice seafood restaurant with transparency and traceability as core objectives, all while delivering unparalleled quality and creative intrigue for the benefit of our guests.",
                        url:"https://aphoticrestaurant.com/",
                        lat: "37.781840",
                        long: "-122.401740"
                      }

  ];

  const [currentRestaurant, setCurrentRestaurant] = useState<Restaurant | null>(null); 

  const Markers = () => {
    return restaurants.map((restaurant, index) => (
      <Marker
        key={index}
        position={{ lat: parseFloat(restaurant.lat), lng: parseFloat(restaurant.long) }}
        onClick={() => setCurrentRestaurant(restaurant)}
      />
    ));
  }

  const displayCurrentRestaurant = () => {
    if (!currentRestaurant) {
      return null;
    }
    return (
      <div className="text-sm">
          <div className="text-bold text-lg"><a href="{currentRestaurant.url}">{currentRestaurant.name}</a></div>
          <div>📍{currentRestaurant.address}</div>
          <div>"{currentRestaurant.statement}"</div>
      </div>
    );
  }

  return (
    <Layout>
      <div>
        {displayCurrentRestaurant()}
      </div>
      <div className="h-screen">
        <APIProvider apiKey='AIzaSyB7zqm5DZe69b4yhNABx90krs5Ck4u2MYE'>
        <Map defaultCenter={position} defaultZoom={12}>
          { Markers() }
        </Map>
      </APIProvider>
      </div>
    </Layout>
  )
}

export default Find
