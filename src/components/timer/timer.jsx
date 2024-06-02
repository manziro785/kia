import React, { useEffect, useState } from 'react';
import './timer.css';

export default function Timer() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = () => {
      const countDate = new Date('Jun 10, 2024 00:00:00').getTime();
      const now = new Date().getTime();
      const gap = countDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const days = Math.floor(gap / day);
      const hours = Math.floor((gap % day) / hour);
      const minutes = Math.floor((gap % hour) / minute);
      const seconds = Math.floor((gap % minute) / second);

      setTime({ days, hours, minutes, seconds });
    };

    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  return (
    <main className="container-n">
      <div className="content-n">
        ДО НАЧАЛА <span className="purple-n">ТУРНИРА</span>
      </div>
      <section className="timer-n">
        <div className="countdown-n">
          <div>
            <span id="days">{formatNumber(time.days)}</span><span className='doub'>:</span> <span className='sapn-tt'>дней</span>
          </div>
          <div>
            <span id="hours">{formatNumber(time.hours)}</span> <span className='doub'>:</span> <span className='sapn-tt'>часов</span>
          </div>
          <div>
            <span id="minutes">{formatNumber(time.minutes)}</span><span className='doub'>:</span> <span className='sapn-tt'>минут</span>
          </div>
          <div>
            <span id="seconds">{formatNumber(time.seconds)}</span> <span className='doub'></span><span className='sapn-tt'>секунд</span>
          </div>
        </div>
      </section>
    </main>
  );
}
