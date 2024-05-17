import React, { useEffect, useState } from "react"
import { PageProps, Link } from "gatsby"
import {APIProvider, Map, Marker, ControlPosition} from '@vis.gl/react-google-maps';
import axios from 'axios';

import {CustomMapControl} from '../components/map-control';
import MapHandler from '../components/map-handler';

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubNav from "../components/subnav"

type Restaurant = {
  name: string;
  address: string;
  statement: string;
  url: string;
  lat: string;
  long: string;
};

const DEFAULT_PLACE = 
  { name: "San Francisco",
    lat: 37.7749,
    long: -122.407234
  }

const Index = (props: PageProps) => { 
  
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

  const sanFrancisco = {lat: 37.7749, lng: -122.407234};
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);
  const [restaurantList, setRestaurantList] = useState([]);

  const position = {lat: DEFAULT_PLACE.lat, lng: DEFAULT_PLACE.long};

  const Markers = () => {
    return restaurants.map((restaurant, index) => (
      <Marker
        key={index}
        position={{ lat: parseFloat(restaurant.lat), lng: parseFloat(restaurant.long) }}
        onClick={() => ""}
      />
    ));
  }

  const otherRestaurantsHeader = () => {
    if (!selectedPlace) {
      return DEFAULT_PLACE.name;
    }
    return selectedPlace.formatted_address;
  }

  useEffect(() => {
    console.log("using effect")
    let lat = DEFAULT_PLACE.lat;
    let long = DEFAULT_PLACE.long;
    if (selectedPlace !== null) {
      lat = selectedPlace.geometry?.location?.lat() ?? 0;
      long = selectedPlace.geometry?.location?.lng() ?? 0;
    }
    
    const query = `/api/places/all-restaurants?lat=${lat}&long=${long}`;

    axios.get(query)
        .then(function (response) {
            // handle success
            setRestaurantList(response.data.results);
        })
        .catch(function (error) {
            // handle error
            return (<>error! ${error}</>)
        })
        .finally(function () {
            // always executed
        });
    
  }, [selectedPlace]);

  const otherRestaurants = () => {

    console.log('restaurantList in other restaurants...');
    console.log(restaurantList);
    return(
      <>
        {restaurantList.map((data: any, index: number) => (
          <div key={index}>{data.name}</div>
        ))}
      </>
    )         
}

  const drawMap = () => {
    if (typeof window !== `undefined` && typeof document !== `undefined`) {
      return (
        <div className="w-full aspect-square">
          <APIProvider apiKey="AIzaSyB7zqm5DZe69b4yhNABx90krs5Ck4u2MYE">
            <Map
              defaultZoom={12}
              defaultCenter={sanFrancisco}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
            />
            <CustomMapControl
              controlPosition={ControlPosition.TOP}
              onPlaceSelect={setSelectedPlace}
            />
            <MapHandler place={selectedPlace} />
          </APIProvider>
        </div>
      )
    }
    return null;
  }

  return (
    <Layout>
      <SubNav page="restaurants"></SubNav>
      {drawMap()}
      <div>
        <div>Other seafood restauraunts in {otherRestaurantsHeader()}</div>
        {otherRestaurants()}
      </div>
    </Layout>
  )
}

export default Index
