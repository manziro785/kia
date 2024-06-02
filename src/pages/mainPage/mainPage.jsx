import React from 'react'
import Calendar from '../../components/calendar/calendar'
import Banner from '../../components/banner/banner'
import Car from '../../components/car/car'
import Num from '../../components/number cor/num'
import Timer from '../../components/timer/timer'


export default function MainPage() {
  return (
    <>
    <Banner/>
    <Timer/>
    <Calendar/>
    <Car/>
    <img src='./src/assets/header/Group 64.svg' style={{width: '210vh', marginTop: '500px'}}></img>
    <img src="./src/assets/header/Frame 4.svg"style={{width: '210vh', marginTop: '100px'}} alt="" />
    <img src="./src/assets/header/Frame 5 (2).svg"style={{width: '210vh', marginTop: '100px'}} alt="" />

    </>
  )
}
