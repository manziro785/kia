import { React, useState, useEffect } from "react";
import "./calendar.css";
import a1 from "../../assets/calendar/Vector (2).svg";

import img1 from "../../assets/calendar/img-pubg.svg";
import img2 from "../../assets/calendar/img-dota.svg";
import img3 from "../../assets/calendar/img-pubg2.svg";
import img4 from "../../assets/calendar/img-dota2.svg";
import img5 from "../../assets/calendar/img-pubg3.svg";
import img6 from "../../assets/calendar/img-dota3.svg";

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

export default function Calendar() {
  const swiper = useSwiper();

  return (
    <>
      <div className="wrapp-main containerr">
        <h1 style={{ marginTop: "5rem" }}>КАЛЕНДАРЬ СОБЫТИЙ</h1>
        <div className="evSlider">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            breakpoints={{
              450: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 7,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation, Pagination, A11y]}
            className="calenSwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="" className="swpimg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" className="swpimg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" className="swpimg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" className="swpimg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="" className="swpimg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="" className="swpimg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="" className="swpimg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" className="swpimg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" className="swpimg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" className="swpimg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="" className="swpimg" />
            </SwiperSlide>
            <Btnswp />
          </Swiper>
        </div>
      </div>
    </>
  );
}
