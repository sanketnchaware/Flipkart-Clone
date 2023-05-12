import React from "react";
import HeroSwiper from "../components/HeroSwiper";
import Categories from "../components/Categories";
import sbioffer from "../assets/sbiAdd.png";
import FlexCards from "../components/FlexCards";
const Home = () => {
  return (
    <div className="h-screen ">
      <Categories />
      <div className="px-2">
        <HeroSwiper />
        <img src={sbioffer} className="m-auto my-4 shadow-md " alt="sbioffer" />
        <FlexCards />
      </div>
    </div>
  );
};

export default Home;
