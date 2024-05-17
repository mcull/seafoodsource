import React, { useEffect, useState } from "react"
import { PageProps, Link } from "gatsby"
import {APIProvider, Map, Marker, ControlPosition} from '@vis.gl/react-google-maps';
import axios from 'axios';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import {CustomMapControl} from '../components/map-control';
import MapHandler from '../components/map-handler';
import RestaurantAccordian from '../components/restaurant-accordian';

import Layout from "../components/layout"
import SEO from "../components/seo"
import SubNav from "../components/subnav"

const DEFAULT_PLACE = 
  { name: "San Francisco",
    lat: 37.7749,
    long: -122.407234
  }

const Index = (props: PageProps) => { 
 
  const sanFrancisco = {lat: 37.7749, lng: -122.407234};
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);
  const [restaurantList, setRestaurantList] = useState([]);

  const position = {lat: DEFAULT_PLACE.lat, lng: DEFAULT_PLACE.long};

  const Markers = () => {
    return restaurantList.map((restaurant: any, index: number) => (
      <Marker
        key={index}
        position={{ lat: parseFloat(restaurant.geometry.location.lat), lng: parseFloat(restaurant.geometry.location.lng) }}
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
            >
              <Markers />
            </Map>
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
        <RestaurantAccordian restaurants={restaurantList} />
      </div>
    </Layout>
  )
}

export default Index
