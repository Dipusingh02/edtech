import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../home/Header";
import H_course from "./H_course";
import H_globe from "./H_globe";
import H_aboutc from "./H_aboutc";


const Home = () => {
  return (
    <div className="bg_colorh">
      <Navbar />
      <Header />
      <H_course />
      <H_globe />
      <H_aboutc />
    </div>
  );
};

export default Home;
