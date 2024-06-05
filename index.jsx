import React, { useEffect, useState } from 'react';
import './style.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const containers = document.querySelectorAll('.main-container > div');

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
      const newPosition = currentIndex * containerWidth;
      document.querySelector('.main-container').scrollLeft = newPosition;
      showCurrentContainer();
    }

    const intervalId = setInterval(nextContainer, 3000);

    showCurrentContainer();

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="main-container">
      <div className="container">
        <div className="main">
          <div className="header">ТУРНИР В ЦИФРАХ</div>
          <div className="content">
            <div className="million">
              <span className="red">1 000  000</span> сом
            </div>
            <div className="info">Призовой фонд турнира</div>
          </div>
        </div>
        <div className="imh">
          <img src="/svg/CS win.svg" alt="" />
        </div>
      </div>
      <div className="container-2">
        <div className="content-2">
          <div className="header-2">
            <span className="red">50</span> команд
          </div>
          <div className="info-2">500+ участников</div>
        </div>
        <div className="img-2">
          <img src="/svg/CS tour.svg" alt="" />
        </div>
      </div>
      <div className="container-3">
        <div className="content-3">
          <div className="header-3">
            <span className="red-3">25</span> +
          </div>
          <div className="info-3">СПОНСОРОВ</div>
        </div>
        <div className="img-3">
          <img src="/svg/Screen.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
