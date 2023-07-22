import React from "react";
import { NavLink } from "react-router-dom";
import "./CardServices.scss"
const CardServices = () => {
  return (
    <NavLink to="/gigs?cat=design">
      <div className="catCard">
      <img alt="AI Artists" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/f27bec553efc12cc60baed89b8f2223e-1674661140708/ai-artists-2x.png"/>
        <span className="desc">AI</span>
        <span className="title"></span>
      </div>
    </NavLink>
  );
};

export default CardServices;
