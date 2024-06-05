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

function Num() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const containers = document.querySelectorAll('.main-container-u > div');

    function showCurrentContainer() {
      containers.forEach((container, index) => {
        if (index === currentIndex) {
          container.classList.add('active');
        } else {
          container.classList.remove('active');
        }
      });
    }

    function nextContainer() {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % containers.length);
      const containerWidth = containers[0].offsetWidth;
      const newPosition = (currentIndex + 1) % containers.length * containerWidth;
      document.querySelector('.main-container-u').scrollLeft = newPosition;
      showCurrentContainer();
    }

    const intervalId = setInterval(nextContainer, 1000000);

    showCurrentContainer();

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="main-container-u">
      <div className="container-u" >
        <div className="main-u">
          {/* <div className="header-u">ТУРНИР В ЦИФРАХ</div> */}
          <div className="content-u">
            
            <div className="million-u">
              <span className="red-u">1 000  000</span> сом
            </div>
            <div className="info-u">Призовой фонд турнира</div>

          </div>
        </div>
        <div className="imh-u">
          <img src={firstimg} alt="" />
        </div>
      </div>
      <div className="container-2-u">
        <div className="content-2-u">
          <div className="header-2-u">
            <span className="red-u">50</span> команд
          </div>
          <div className="info-2-u">500+ участников</div>
        </div>
        <div className="img-2-u">
          <img src={secondimg} alt="" />
        </div>
      </div>
      <div className="container-3-u">
        <div className="content-3-u">
          <div className="header-3-u">
            <span className="red-3-u">25</span> +
          </div>
          <div className="info-3-u">СПОНСОРОВ</div>
        </div>
        <div className="img-3-u">
          <img src={thirdimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Num;
