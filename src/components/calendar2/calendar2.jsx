import React from "react";
import "./calendar2.css";
import cs2 from "../../assets/dicipline/csss2 1.svg";
import pubg from "../../assets/dicipline/1.svg";
import dota from "../../assets/dicipline/2.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useSwiper, Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../assets/calendar/img-pubg.svg";
import img2 from "../../assets/calendar/img-dota.svg";
import img3 from "../../assets/calendar/img-pubg2.svg";
import img4 from "../../assets/calendar/img-dota2.svg";
import img5 from "../../assets/calendar/img-pubg3.svg";
import img6 from "../../assets/calendar/img-dota3.svg";

import "swiper/css";
import "swiper/css/pagination";
import Btnswp from "../btnswp/btnswp";
import bggame from "../../assets/dicipline/calll 1.svg";

const Calendar2 = () => {
  return (
    <div
      className="game-section"
      id="game"
      style={{ backgroundImage: `url(${bggame})` }}
    >
      <div className="background-layer">
        <div className="gradient-overlay"></div>
        <div className="content-layer">
          <h2>Календарь событий</h2>
          <div className="evSlider">
            <Swiper
              slidesPerView={1}
              spaceBetween={50}
              breakpoints={{
                430: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                860: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
                1440: {
                  slidesPerView: 6,
                  spaceBetween: 50,
                },
              }}
              modules={[Navigation, Pagination, A11y]}
              className="gameCards"
            >
              <SwiperSlide className="game-card">
                <img src={img1} alt="" className="swpimg" />
              </SwiperSlide>
              <SwiperSlide className="game-card">
                <img src={img2} alt="" className="swpimg" />
              </SwiperSlide>
              <SwiperSlide className="game-card">
                <img src={img3} alt="" className="swpimg" />
              </SwiperSlide>
              <SwiperSlide className="game-card">
                <img src={img4} alt="" className="swpimg" />
              </SwiperSlide>

              <SwiperSlide className="game-card">
                <img src={img5} alt="" className="swpimg" />
              </SwiperSlide>
              <SwiperSlide className="game-card">
                <img src={img6} alt="" className="swpimg" />
              </SwiperSlide>
              {/* <SwiperSlide className="game-card">
                <img src={cs2} alt="" className="swpimg" />
                <a href="/register-cs" className="participate-button">
                  Участвовать
                </a>
              </SwiperSlide>
              <SwiperSlide className="game-card">
                <img src={dota} alt="" className="swpimg" />
                <a href="/register-dota" className="participate-button">
                  Участвовать
                </a>
              </SwiperSlide>
              <SwiperSlide className="game-card">
                <img src={pubg} alt="" className="swpimg" />
                <a href="/register" className="participate-button">
                  Участвовать
                </a>
              </SwiperSlide>
              <SwiperSlide className="game-card">
                <img src={cs2} alt="" className="swpimg" />
                <a href="/register" className="participate-button">
                  Участвовать
                </a>
              </SwiperSlide>
              <SwiperSlide className="game-card">
                <img src={dota} alt="" className="swpimg" />
                <a href="/register" className="participate-button">
                  Участвовать
                </a>
              </SwiperSlide> */}
              <Btnswp />
            </Swiper>
            <a href="/register" className="participate-button">
              Участвовать
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar2;
