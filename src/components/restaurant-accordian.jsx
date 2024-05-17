import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
const RestaurantAccordion = ({restaurants}) => {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  console.log(restaurants);
 
  return (
    <>
        {restaurants.map((restaurant, index) => (
            <Accordion open={open === index}>
                <AccordionHeader className="text-sm" onClick={() => handleOpen(index)}>
                    {restaurant.name}
                </AccordionHeader>
                <AccordionBody>
                  <div>{restaurant.formatted_address}</div>
                  <div><span className="font-bold">Open now?</span> {restaurant.opening_hours.open_now ? "yes" : "no"}</div>
                  <div><span className="font-bold">Price</span>  {"$".repeat(restaurant.price_level)}</div>
                  <div><span className="font-bold">Rating</span>  {"★".repeat(restaurant.rating)}{restaurant.rating*2%2 == 0 ? "" : "½"}</div>
                  </AccordionBody>
            </Accordion>
        ))}
    </>
  );
}

export default RestaurantAccordion;