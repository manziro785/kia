import React, { useState, useEffect } from 'react';
import sc from '../../assets/calendar/scorpion 1.svg';
import a1 from '../../assets/calendar/Vector (2).svg'
import img1 from '../../assets/calendar/Group 40 (1).svg';

import img2 from '../../assets/calendar/15.svg';
import img3 from '../../assets/calendar/14.svg';
import img4 from '../../assets/calendar/Group - 1.svg';
import img5 from '../../assets/calendar/Group2.svg';
import img6 from '../../assets/calendar/Group3.svg';
import './corus2.css'


const events = [
  {
    image: {img1},
  },
  {
    image: {img1},

  },
  {
    image: {img1},
  },
  {
    image: {img1},
  },

  // Добавьте больше событий по мере необходимости
];

export default function Calendar1() {
  const totalPages = events.length; // Общее количество страниц соответствует количеству событий
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentEvent = events[currentPage]; // Получаем текущее событие

  useEffect(() => {
    const photoContainers1 = document.querySelectorAll('.photo-container1');
    const photoContainers2 = document.querySelectorAll('.photo-container2');

    const checkBox = (elements) => {
      const trigger = window.innerHeight / 5 * 4;

      elements.forEach((element) => {
        const topOfBox = element.getBoundingClientRect().top;

        if (topOfBox < trigger) {
          element.classList.add('show');
        } else {
          element.classList.remove('show');
        }
      });
    };

    const handleScroll = () => {
      checkBox(photoContainers1);
      checkBox(photoContainers2);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="wrapp-main">
        <div className="wrapper-calen">
          <div className="events-calendar">
            <div className="calendar-header">
              <h1>КАЛЕНДАРЬ СОБЫТИЙ</h1>
              <div className="navigation"></div>
            </div>
            <div className="wrap-cal">
              <button onClick={handlePrevClick} disabled={currentPage === 0}>
                <img src="./src/assets/calendar/btn-l.svg" alt="Previous" />
              </button>
              <div className="events-slider-wrapper">
                <div className="events-slider" style={{ transform: `translateX(${-currentPage * 100}%)` }}>
                  {events.map((event, index) => (
                    <div className="event" key={index}>
                      <img src={event.image} alt={event.title} />
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={handleNextClick} disabled={currentPage === totalPages - 1}>
                <img src="./src/assets/calendar/btn-r.svg" alt="Next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
