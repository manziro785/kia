import React, {useState, useEffect} from 'react'
import './car.css'
import d1 from '../../assets/car/Frame 1 (1).svg'
import d2 from '../../assets/car/kiiia 1.svg'


export default function Car() {

  return (
    <div>
        
        <div className="wrapp-car">
            <div className="overlay"></div>
            <div className="title-car">
<img src={d1} alt="" />
            </div>
            <div className="text-car">
                <div className='info-car'>
<div>На нашем киберспортивном турнире мы с гордостью будем использовать инновационный электромобиль KIA EV9.</div>
<div>Этот передовой автомобиль способен раздавать электричество, что позволяет нам питать компьютеры и оборудование прямо с его батареи. Благодаря KIA EV9, мы обеспечим стабильное и надежное энергоснабжение, необходимое для бесперебойного проведения соревнований.</div>

<div>Кроме того, использование электромобиля снижает углеродный след и способствует защите окружающей среды. KIA EV9 предоставляет нам гибкость в организации турниров, позволяя проводить мероприятия в любых местах без привязки к стационарным источникам энергии.</div>

                </div>
            </div>
            <div className="photo-container2"> 
                 <img src={d2} alt="" /> 
             </div>
        </div>
        
    </div>
  )
}
