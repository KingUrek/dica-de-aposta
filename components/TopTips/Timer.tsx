'use client';
import { differenceInDays, differenceInSeconds } from 'date-fns';
import React, { useEffect, useState } from 'react';

export default function Timer({ date }) {
  const [[days, hours, minutes, seconds], setTimer] = useState(getTime(date));
  function getTime(date) {
    const totalSeconds = differenceInSeconds(new Date(date), new Date());
    const secondsInADay = 60 * 60 * 24;
    const secondsInAHours = 60 * 60;
    const secondsInAMinute = 60;
    const days = differenceInDays(new Date(date), new Date());
    const hours = Math.floor((totalSeconds - days * secondsInADay)/secondsInAHours)
    const minutes = Math.floor((totalSeconds - days * secondsInADay - hours * secondsInAHours) / secondsInAMinute)
    const seconds = Math.floor((totalSeconds - days * secondsInADay - hours * secondsInAHours - minutes * secondsInAMinute))
    return [days, hours, minutes, seconds]
  }
  useEffect(() => {
    const tick = setInterval(() => {
      setTimer(getTime(date));
    }, 1000);

    return () => {
      clearInterval(tick);
    };
  }, []);

  return <p>timer</p>;

  // return (
  //   <div className='flex gap-1'>
  //     <p className='text-16 text-white bg-primary-dark font-bold rounded w-20 h-20 grid place-content-center '>
  //       {days}
  //     </p>
  //     <p className=' text-40 leading-[30px] text-primary-dark'>:</p>
  //     <p className='text-16 text-white bg-primary-dark font-bold rounded w-20 h-20 grid place-content-center '>
  //       {hours}
  //     </p>
  //     <p className=' text-40 leading-[30px] text-primary-dark'>:</p>
  //     <p className='text-16 text-white bg-primary-dark font-bold rounded w-20 h-20 grid place-content-center '>
  //       {minutes}
  //     </p>
  //     <p className=' text-40 leading-[30px] text-primary-dark'>:</p>
  //     <p className='text-16 text-white bg-primary-dark font-bold rounded w-20 h-20 grid place-content-center '>
  //       {seconds}
  //     </p>
  //   </div>
  // );
}
