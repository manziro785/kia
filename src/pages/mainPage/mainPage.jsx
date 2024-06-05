import React from 'react'
import Calendar from '../../components/calendar/calendar'
import Banner from '../../components/banner/banner'
import Car from '../../components/car/car'
import Num from '../../components/number cor/num'
import Timer from '../../components/timer/timer'
import GameSection from '../../components/gamesection/game'
import Watch from '../../components/watch/watch'
import Partners from '../../components/partners/partner'
import cs22 from '../../assets/header/Frame 5 (2).svg'
import FAQ from '../../components/questions/question'
import GameSection2 from '../../components/game2/game2'





export default function MainPage() {
  return (
    <>
      <Banner />

    <Calendar/>
    <Car/>
    {/* <Num/> */}
    <div className="wrap-game-sec" style={{display: 'none'}}>
    <GameSection/>

    </div>
    <div className="wrap-game-sec2">
    <GameSection2/>

    </div>
    <Watch/>
    <Partners/>
    <FAQ/>

    </>
  );
}
