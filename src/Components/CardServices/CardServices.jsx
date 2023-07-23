import React from "react";
import { NavLink } from "react-router-dom";

const CardServices = ({card}) => {
    console.log(card)
  return (
    
    <NavLink to="/gigs?cat=design">
      <div className="relative w-56 h-80 text-white">
      <img className="w-full h-full object-fit:cover" alt="AI Artists" src={card.img}/>
        <span className="absolute top-3 left-3 font-light">{card.desc}</span>
        <span className="absolute top-8 left-3 font-medium text-2xl">{card.title}</span>
      </div>
    </NavLink>
  );
};

export default CardServices;
