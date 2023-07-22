import React from "react";
import Slider from "infinite-react-carousel";
import "./PopularServices.scss";
import CardServices from "../CardServices/CardServices";

const PopularServices = () => {
  return (
    <div>
    
    <h1>Popular Services</h1>
    <div className="slide">
      <div className="container">
        <Slider slidesPerRow={5}>
          <div>
            <CardServices />
          </div>
          <div>
            <CardServices />
          </div>
          <div>
            <CardServices />
          </div>
          <div>
            <CardServices />
          </div>
          <div>
            <CardServices />
          </div>
          <div>
            <CardServices />
          </div>
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default PopularServices;
