import React from 'react';
import './banner.css';
import Header from '../header/header';
import dd from '../../assets/car/0.svg';

export default function Banner() {
  return (
    <div>
      <Header/>
      <main>
        <div className="title-mm"></div>
        <div className='tt'><img src={dd} alt="" /></div>
        <div className="intro">
          <div className="big-logo"></div>
        </div>
      </main>
    </div>
  );
}
