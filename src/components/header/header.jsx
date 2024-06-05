import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/header/llogo.svg';
import burger from '../../assets/header/burger.svg'


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
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
                <a href="/" className="header-link">ОБЩАЯ ИНФОРМАЦИЯ</a>
              </li>
              <li className="header-item">
                <a href="/" className="header-link">СМОТРЕТЬ</a>
              </li>
              <li className="header-item">
                <a href="/" className="header-link">УЧАСТНИКИ</a>
              </li>
              <li className="header-item">
                <a href="/" className="header-link">СВЯЗАТЬСЯ С НАМИ</a>
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
            <img src={burger} alt="Mini Photo" className="mini-photo" id="person" />
              <div className="tooltiptext">
                <a href='' className='burger-item'>ОБЩАЯ ИНФОРМАЦИЯ</a>
                <a href='' className='burger-item'>СМОТРЕТЬ</a>
                <a href='' className='burger-item'>УЧАСТНИКИ</a>
                <a href='' className='burger-item'>СВЯЗАТЬСЯ С НАМИ</a>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
}
