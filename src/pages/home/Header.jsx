import React from "react";
import "./header.css";
import h1img from "../../assests/homeheader.jpg";
import containerend from "../../assests/container.jpg";

const Header = () => {
  return (
    <div className="bg-color">
      <div className="container-hheader">
        <img src={h1img} alt="image" />
        <div className="Heading-text">
          <div className="heading-text-top">
            <h1>50+ Courses.</h1>
            <h1>10+ Specialisation</h1>
          </div>
          <h1>Upskills and Transform </h1>
          <h1>Your Career!</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
