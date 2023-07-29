import React from "react";
import Slider from "infinite-react-carousel";
import "./PopularServices.scss";
import CardServices from "../CardServices/CardServices";
import { cards } from "../../Assets/Data/cards";
const PopularServices = () => {
  // console.log(cards);
  return (
    <div>
      <h1 className="max-w-screen-xl mx-auto pl-4 pt-12 text-3xl font-bold text-gray-500">Popular Services</h1>
      <div className="flex justify-center pt-3">
        <div className="relative w-11/12 left-3">
          <Slider slidesPerRow={5}>
            {cards.map((item, index) => (
              <div key={index}>
                <CardServices card={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
