import React from 'react';
import './banner.css';
import Header from '../header/header';
import dd from '../../assets/car/Kia tittle.svg';
import Timer from '../timer/timer'

import bgasia from '../../assets/asiamall beck.svg' 

export default function Banner() {
  return (
    <div>
        {/* <Header/> */}
      <main className='banner' style={{ backgroundImage: `url(${bgasia})`} }>
        {/* <div className="title-mm"></div> */}
        <div className='tt'><img src={dd} alt="" /></div>
        {/* <div className="intro"> */}
          {/* <div className="big-logo"></div> */}
        {/* </div> */}
            <Timer/>
      </main>
    </div>
  );
}
