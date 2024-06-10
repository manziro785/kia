import { React, useState, useEffect } from "react";
import "./calendar.css";
import a1 from "../../assets/calendar/Vector (2).svg";

import img1 from "../../assets/calendar/pubg 1 part.svg";
import img2 from "../../assets/calendar/cs 2 1 part.svg";
import img3 from "../../assets/calendar/dota 1 part.svg";
import img4 from "../../assets/calendar/pubg 2 part.svg";
import img5 from "../../assets/calendar/cs 2 2 part.svg";
import img6 from "../../assets/calendar/dota 2 part.svg";

import bggame from "../../assets/calendar/mapp 1.png";
import bd from "../../assets/calendar/calendar.svg";

import sc from "../../assets/calendar/scorpion 1.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useSwiper, Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Btnswp from "../btnswp/btnswp";
const events = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
  // Add more events as needed
];

export default function Calendar() {
  const swiper = useSwiper();

  return (
    <>
      <div
        id="game"
        style={{
          background: `linear-gradient(180deg, #2b1028 0%, rgba(94, 35, 87, 0.7) 50%, #2b1028 100%),url(${bggame})`,
        }}
      >
        <div className="wrapp-main containerr">
          <h1 style={{ marginTop: "5rem", textAlign: "left" }}>
            КАЛЕНДАРЬ СОБЫТИЙ
          </h1>
          <div className="evSlider">
            <Swiper
              loop={true}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                425: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                590: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                850: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
                1440: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}
              modules={[Navigation, Pagination, A11y]}
              className="calenSwiper"
            >
              {events.map((item) => (
                <SwiperSlide>
                  <img src={item.img} alt="" className="swpimg" />
                </SwiperSlide>
              ))}
              <Btnswp />
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
