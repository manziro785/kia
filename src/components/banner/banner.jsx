import React from 'react'
import './banner.css'
import Header from '../header/header'
import dd from '../../assets/car/0.svg'
import bg from '../../assets/car/Frame 3.svg' ;
import bg1 from '../../assets/org/Frame 10 (2).svg' ;



export default function Banner() {
  
  
  return (
    <div>
        <Header/>

<main>

    <div className="title-mm">
        {/* <img src="./src/assets/car/Frame 3.svg" alt="" /> */}
    </div>
    <div className='tt'><img src={dd} alt="" /></div>

   <div className="ovv">
    <img src={bg} alt="" />
   </div>
   <div className="ovvs">
    <img src={bg1} alt="" />
   </div>
   

      <div className="intro">
        <div className="big-logo">
        </div>
        {/* <div className="video">
          <video controls>
            <source src="../img/6060027-uhd_2160_3840_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
      </div>
    </main>
    </div>
  )
}
