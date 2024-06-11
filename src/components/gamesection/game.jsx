import React from "react";
import "./game.css";
import cs2 from "../../assets/dicipline/csss2 1.svg";
import pubg from "../../assets/dicipline/1.svg";
import dota from "../../assets/dicipline/2.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useSwiper, Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Btnswp from "../btnswp/btnswp";
import bggame from "../../assets/dicipline/calll 1.svg";

const GameSection = () => {
  return (
    <div className="game-section" style={{ backgroundImage: `url(${bggame})` }}>
      <div className="background-layer">
        <div className="gradient-overlay"></div>
        <div className="content-layer">
          <h1 className="igrh1">Игровые дисциплины</h1>
          <div className="gameSlider">
            <Swiper
              slidesPerView={1}
              spaceBetween={50}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Navigation, Pagination, A11y]}
              className="gameCards"
              loop={true}
            >
              <SwiperSlide className="game-card">
                <img src={cs2} alt="" className="swpimggame" />
                <a href="/register-cs" className="participate-button">
                  Участвовать
                </a>
              </SwiperSlide>
              <SwiperSlide className="game-card">
                <img src={dota} alt="" className="swpimggame" />
                <a href="/register-dota" className="participate-button">
                  Участвовать
                </a>
              </SwiperSlide>
              <SwiperSlide className="game-card">
                <img src={pubg} alt="" className="swpimggame" />
                <a href="/register-pubg" className="participate-button">
                  Участвовать
                </a>
              </SwiperSlide>
              <div className="btnGame">
                <Btnswp />
              </div>
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

export default GameSection;
