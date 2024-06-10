// import React from 'react';
// import './partner.css';
// import ala from '../../assets/org/1.svg'
// import sanarip from '../../assets/org/2.svg'
// import kiaorig from '../../assets/org/3.svg'
// import flag from '../../assets/org/4.svg'

// const Partners = () => {
//     return (
//         <div>
//             <section className="sponsors" id="sponsors">
//                 <div className="container">
//                     <h1 className="title">Спонсоры</h1>
//                     <div className="sponsor-container">
//                         <div className="sponsor-item">
//                             <img src={ala} className="sponsor-image" alt="Спонсор 1"/>
//                         </div>
//                         <div className="sponsor-item">
//                             <img src={sanarip} className="sponsor-image" alt="Спонсор 2"/>
//                         </div>
//                         <div className="sponsor-item">
//                             <img src={kiaorig} className="sponsor-image" alt="Спонсор 3"/>
//                         </div>
//                         <div className="sponsor-item">
//                             <img src={flag} className="sponsor-image" alt="Спонсор 4"/>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Partners;

import React from "react";
import "./partner.css";
import ala from "../../assets/org/1.svg";
import sanarip from "../../assets/org/2.svg";
import kiaorig from "../../assets/org/3.svg";
import flag from "../../assets/org/4.svg";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { useSwiper, Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
const Partners = () => {
  return (
    <div>
      <section className="sponsors" id="sponsors">
        <div className="containerr">
          <h1 className="title">Спонсоры</h1>
          {/* <div className="sponsor-container"> */}
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            freeMode={true}
            breakpoints={{
              425: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              650: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              // 860: {
              //   slidesPerView: 4,
              //   spaceBetween: 40,
              // },
              // 1024: {
              //   slidesPerView: 5,
              //   spaceBetween: 50,
              // },
              // 1440: {
              //   slidesPerView: 6,
              //   spaceBetween: 50,
              // },
            }}
            modules={[Autoplay, Navigation, Pagination, A11y]}
          >
            <SwiperSlide>
              <div className="sponsor-item">
                <a href="https://alatoo.edu.kg/">
                  <img src={ala} className="sponsor-image" alt="Ала-Тоо" />
                </a>
                <div className="sponsor-name">
                  Международный университет "Ала-Тоо"
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sponsor-item">
                <a href="https://ict.sanarip.org/">
                  <img
                    src={sanarip}
                    className="sponsor-image"
                    alt="Санарип"
                    style={{ background: "white" }}
                  />
                </a>
                <div className="sponsor-name">
                  Министерство цифрового развития Кыргызской Республики
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sponsor-item">
                <a href="https://www.kia-bishkek.kg/">
                  <img src={kiaorig} className="sponsor-image" alt="KIA" />
                </a>
                <div className="sponsor-name">
                  Официальный дистрибьютор Kia в Кыргызстане
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sponsor-item">
                <a href="https://esf.kg/">
                  <img src={flag} className="sponsor-image" alt="Flag" />
                </a>
                <div className="sponsor-name">
                  Федерация Компьютерного Спорта Кыргызской Республики
                </div>
              </div>
            </SwiperSlide>{" "}
          </Swiper>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default Partners;
