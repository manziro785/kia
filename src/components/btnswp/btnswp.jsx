import React from "react";
import { useSwiper } from "swiper/react";
import "../calendar/calendar.css";
import a1 from "../../assets/calendar/Vector (2).svg";

const Btnswp = () => {
  const swiper = useSwiper();
  return (
    <>
      <button onClick={() => swiper.slidePrev()} className="btnswp1">
        <img src={a1} alt="" />
      </button>
      <button onClick={() => swiper.slideNext()} className="btnswp2">
        <img src={a1} alt="" />
      </button>
    </>
  );
};

export default Btnswp;
