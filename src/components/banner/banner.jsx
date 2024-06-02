import React from 'react'
import './banner.css'
import Header from '../header/header'

export default function Banner() {
  return (
    <div>
        <Header/>

<main>
      <div className="intro">
        <div className="big-logo">
          <img src="../img/svg/KIA_background 2.svg" alt="Big Logo" />
        </div>
        <div className="video">
          <video controls>
            <source src="../img/6060027-uhd_2160_3840_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </main>
    </div>
  )
}
