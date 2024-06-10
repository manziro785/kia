import React, { useEffect, useState } from 'react';
import './num.css';
import firstimg from '../../assets/corusel/img-cor.svg'
import secondimg from '../../assets/corusel/img-cor2.svg'
import thirdimg from '../../assets/corusel/img-cor3.svg'


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

    const intervalId = setInterval(nextContainer, 3000);

    showCurrentContainer();

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <>
                     <h1 className='title-bum'  id='motiv' style={{marginTop: '6rem', marginLeft: '8rem', fontSize: '3rem', marginBottom: '0'}}>ТУРНИР В ЦИФРАХ</h1> 

    <div className="main-container-u">

      <div className="container-u" >
        <div className="main-u">
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
            <span className="red-3-u">35</span> +
          </div>
          <div className="info-3-u">СПОНСОРОВ, ПАРТНЕРОВ</div>
        </div>
        <div className="img-3-u">
          <img src={thirdimg} alt="" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Num;
