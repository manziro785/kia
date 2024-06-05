import React, { useState, useEffect } from "react";
import "./num.css";
import imm from "../../assets/calendar/Vector (2).svg";

import imm2 from "../../assets/corusel/1.1.svg";
import imm3 from "../../assets/corusel/1.2.svg";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const events = [
  {
    date: "June 22th-30th",
    title: "Regional Qualifiers Asia",
    type: "ONLINE",
    backgroundImage: "path-to-image-1.png",
  },
  {
    date: "July 6th-31th",
    title: "Regional Qualifiers Europe",
    type: "ONLINE",
    backgroundImage: "path-to-image-2.png",
  },
  {
    date: "Jul 25th - Aug 7th",
    title: "Regional Qualifiers America",
    type: "ONLINE",
    backgroundImage: "path-to-image-3.png",
  },
  {
    date: "August 17th - 21st",
    title: "Regional Qualifiers Africa",
    type: "OFFLINE",
    backgroundImage: "path-to-image-4.png",
  },
  {
    date: "September 6th - 14th",
    title: "Regional Qualifiers Asia",
    type: "OFFLINE",
    backgroundImage: "path-to-image-5.png",
  },
  {
    date: "November 11th - 19th",
    title: "World Esports Championship",
    type: "OFFLINE",
    backgroundImage: "path-to-image-6.png",
  },
  {
    date: "December 1st - 10th",
    title: "Regional Qualifiers Australia",
    type: "OFFLINE",
    backgroundImage: "path-to-image-7.png",
  },
  {
    date: "December 15th - 20th",
    title: "Regional Qualifiers Antarctica",
    type: "ONLINE",
    backgroundImage: "path-to-image-8.png",
  },
  // Add more events as needed
];

export default function Num() {
  return (
    <>
      <div>
        <h1 style={{ fontSize: "2rem", marginLeft: "5rem" }}>
          ТУРНИР В ЦИФРАХ
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, A11y]}
        >
          <SwiperSlide>
            <div className="box1">
              <div className="left">
                <div className="ups">
                  <span>1 000 000</span> сом
                </div>
                <div className="dd">Призовой фонд турнира</div>
              </div>
              <div className="right">
                <img src={imm2} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box1">
              <div className="left">
                <div className="ups">
                  <span>50</span> команд
                </div>
                <div className="dd">500+ участников </div>
              </div>
              <div className="right">
                <img src={imm3} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box1">
              <div className="left">
                <div className="ups">
                  <span>25</span> +
                </div>
                <div className="dd">Спонсоров</div>
              </div>
              <div className="right">
                <img src="./src/assets/corusel/1.2.svg" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
