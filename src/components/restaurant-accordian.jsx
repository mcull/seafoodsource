import React from "react";
import { Accordion } from "flowbite-react";
 
const RestaurantAccordion = ({restaurants}) => {
  //workaround because Netlify is losing the Tailwind styles somehow
  const titleStyle = {
    textAlign: "left",
    fontSize: "1.5em"
  }

  console.log(restaurants);
  return (
    <Accordion className="mt-6">
        {restaurants.map((restaurant, index) => (
          
          <Accordion.Panel>
            <Accordion.Title className="text-sm" style={{titleStyle}}>{restaurant.name}</Accordion.Title>
            <Accordion.Content>
              <div>{restaurant.formatted_address}</div>
              <div><span className="font-bold">Open now?</span> {restaurant.opening_hours.open_now ? "yes" : "no"}</div>
              <div><span className="font-bold">Price</span>  {"$".repeat(restaurant.price_level)}</div>
              <div><span className="font-bold">Rating</span>  {"★".repeat(restaurant.rating)}{restaurant.rating*2%2 == 0 ? "" : "½"}</div>
            </Accordion.Content>
          </Accordion.Panel>
        ))}
    </Accordion>
  );
}

export default RestaurantAccordion;