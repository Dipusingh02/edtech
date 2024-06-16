import React from "react";
import "./features.css";

const Features = ({
  image,
  text1,
  text2,
  text3,
  techstack1,
  techstack2,
  techstack3,
  instructorname,
  pricevalueamt,
}) => {
  return (
    <div className="container-features">
      <img className="c-img" src={image} alt={text1} />
      <div className="content-fc">
        <div id="cheading">
          <h1>
            {text1} <span id="text2">{text2}</span><div>{text3}</div> 
          </h1>
        </div>
        <div className="container-techstack">
          <ul>
            <li>{techstack1}</li>
            <li>{techstack2}</li>
            <li>{techstack3}</li>
          </ul>
        </div>
        <div className="container-instructor">
          <ul>
            <li>Instructor</li>
            <li>{instructorname}</li>
          </ul>
        </div>
        <div className="container-price">
          <ul>
            <li>Price</li>
            <li>{pricevalueamt}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
