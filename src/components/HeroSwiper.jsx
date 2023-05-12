import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper";

const HeroSwiper = () => {
  const ads = [
    "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/18975d2f8729761c.jpg?q=50",
    "https://storiesflistgv2.blob.core.windows.net/stories/2021/05/FKSfooterbanner_new__.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0EmZL3QYLCiql3PhEZMrfbpQppe7T8dHiDw&usqp=CAU",
    "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/c5651dbe48b342c8.jpg?q=50",
  ];
  return (
    <div className="flex ">
      <Swiper
        navigation={true}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {ads.map((ad) => {
          return (
            <SwiperSlide>
              <div className="">
                <img src={ad} className="w-full h-72 " alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
