import React from "react";
import globeimg from '../../assests/globeimg.png'
import './h_globe.css';
const H_globe = () => {
  return (
    <div className="globe-container">
      <div className="globe-text">
        <h1>
          WEAR YOUR MOTIVATION COAT AND STEP INTO A WORLD WAITING FOR YOUR
          GROWTH.
        </h1>
      </div>
      <div>
        <img src={globeimg} />
      </div>
    </div>
  );
};

export default H_globe;
