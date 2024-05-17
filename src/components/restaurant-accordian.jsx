import React from "react";
import { Accordion } from "flowbite-react";
 
const RestaurantAccordion = ({restaurants}) => {
  console.log(restaurants);
  return (
    <Accordion>
        {restaurants.map((restaurant, index) => (
          
          <Accordion.Panel>
            <Accordion.Title>{restaurant.name}</Accordion.Title>
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