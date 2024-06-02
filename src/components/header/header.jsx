import React from 'react'

export default function Header() {
  return (
    <div>
        <header className="header">
      <div className="wrapper">
        <div className="header-wrapper">
          <div className="header-logo">
            <a href="/" className="header-logo-link">
              <img src="./src/assets/header/llogo.svg" alt="Logo" />
            </a>
          </div>
          <nav className="header-nav">
            <ul className="header-list">
              <li className="header-item-1">
                <a href="/" className="header-link">ОБЩАЯ ИНФОРМАЦИЯ</a>
              </li>
              <li className="header-item-2">
                <a href="/" className="header-link">СМОТРЕТЬ</a>
              </li>
              <li className="header-item-3">
                <a href="/" className="header-link">УЧАСТНИКИ </a>
              </li>
              <li className="header-item-4">
                <a href="/" className="header-link">СВЯЗАТЬСЯ С НАМИ</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    </div>
  )
}
