import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/header/llogo.svg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
