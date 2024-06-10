import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/header/llogo.svg';
import burger from '../../assets/header/burger.svg'


export default function Header() {
const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsVisible(!isVisible);
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };


  const scrollToElement = (element, duration) => {
    if (element) {
      const start = window.pageYOffset;
      const end = element.getBoundingClientRect().top;
  
      let startTime = null;
  
      const scrollStep = (timestamp) => {
        if (!startTime) {
          startTime = timestamp;
        }
  
        const progress = timestamp - startTime;
        const easeInOutCubic = progress => progress < 0.5
          ? 4 * progress ** 3
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  
        window.scrollTo(0, start + end * easeInOutCubic(progress / duration));
  
        if (progress < duration) {
          requestAnimationFrame(scrollStep);
        }
      };
  
      requestAnimationFrame(scrollStep);
    }
  };
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-wrapper">
          <div className="header-logo">
            <a href="/" className="header-logo-link">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="header-menu">
          <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
            <ul className="header-list">
              <li className="header-item">
                <div className="header-link" style={{cursor: 'pointer'}} onClick={() => scrollToElement(document.getElementById('car'), 1000)}>ОБЩАЯ ИНФОРМАЦИЯ</div>
              </li>
              <li className="header-item">
                <div className="header-link" style={{cursor: 'pointer'}} onClick={() => scrollToElement(document.getElementById('streams'), 1000)}>СМОТРЕТЬ</div>
              </li>
              <li className="header-item">
                <div className="header-link" style={{cursor: 'pointer'}} onClick={() => scrollToElement(document.getElementById('motiv'), 1000)} >УЧАСТНИКИ</div>
              </li>
              <li className="header-item">
                <div className="header-link" style={{cursor: 'pointer'}} onClick={() => scrollToElement(document.getElementById('footer'), 1000)}>СВЯЗАТЬСЯ С НАМИ</div>
              </li>
            </ul>
          </nav>
          <div className="hamburger-menu">
          {/* <button className="burger" onClick={handleToggle}>
            menu
          </button> */}
          {/* <label for="navbar__burger"></label> */}
            {/* <ul>
              <li><a href="#">ОБЩАЯ ИНФОРМАЦИЯ</a></li>
              <li><a href="#">СМОТРЕТЬ</a></li>
              <li><a href="#">УЧАСТНИКИ</a></li>
              <li><a href="#">СВЯЗАТЬСЯ С НАМИ</a></li>
            </ul>   */}
            	{/* <div class="navbar__toggle-menu">
              <ul style={{ display: isVisible ? 'block' : 'none', transition: 'opacity 1s' }}>
                <li><a href="#">About me</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div> */}
          </div>
          </div>
          <div className="custom-tooltip">
            <img src={burger}  onClick={toggleMenu}  alt="Mini Photo" className="mini-photo" id="person" />
              <div className="tooltiptext">
                <div className='burger-item' style={{cursor: 'pointer'}} onClick={() => scrollToElement(document.getElementById('car'), 1000)}>ОБЩАЯ ИНФОРМАЦИЯ</div>
                <div className='burger-item' style={{cursor: 'pointer'}} onClick={() => scrollToElement(document.getElementById('streams'), 1000)}>СМОТРЕТЬ</div>
                <div className='burger-item'style={{cursor: 'pointer'}} onClick={() => scrollToElement(document.getElementById('motiv'), 1000)}>УЧАСТНИКИ</div>
                <div className='burger-item' style={{cursor: 'pointer'}} onClick={() => scrollToElement(document.getElementById('footer'), 1000)}>СВЯЗАТЬСЯ С НАМИ</div>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
}
