import React from 'react'
import './footer.css'
import logofooter from '../../assets/footer/logof.svg'
import icon from '../../assets/footer/icon.svg'
import icon2 from '../../assets/footer/icon2.svg'

import icon3 from '../../assets/footer/icon3.svg'


export default function Footer() {
  return (
    <div>

<div className="footer-wrapper" id='footer'>
<div className="footer-wrapp">
    <div className="footer-main">
    <div className="logo-foot">
<img src={logofooter} alt="" />
    </div>
    <div className="contacts">
        <div className="cont">
<div className="tittle-foot">
Для связи по комерческим вопросам
</div>
<div style={{cursor: 'pointer'}}>+996 559 880 208</div>

<div style={{cursor: 'pointer'}}>+996 708 032 662</div>
</div>
<div className="socials-link">
<div><a href="https://www.youtube.com/@kiamotors5613"><img src={icon} alt="" /></a></div>
<div><a href="https://www.facebook.com/kia.bishkek/"><img src={icon2} alt="" /></a></div>
<div><a href="https://www.instagram.com/kiakyrgyzstan/"><img src={icon3} alt="" /></a></div>

</div>
</div>
    </div>
</div>
</div>
    </div>
  )
}
