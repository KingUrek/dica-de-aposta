'use client';
import classNames from 'classnames';
import { differenceInDays, differenceInSeconds } from 'date-fns';
import React, { useEffect, useState } from 'react';

export default function Timer({ date, style='modal' }) {
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

  return (
    <div className='flex gap-1'>
      <p className={classNames('text-16 text-white bg-primary-dark font-bold rounded w-20 h-20 grid place-content-center ',{
        '!bg-white !text-primary-light':style==='single'
      })}>
        {days}
      </p>
      <p className={classNames(' text-40 leading-[30px] text-primary-dark',{
        '!text-white':style==='single'
      })}>:</p>
      <p className={classNames('text-16 text-white bg-primary-dark font-bold rounded w-20 h-20 grid place-content-center ',{
        '!bg-white !text-primary-light':style==='single'
      })}>
        {hours}
      </p>
      <p className={classNames(' text-40 leading-[30px] text-primary-dark',{
        '!text-white':style==='single'
      })}>:</p>
      <p className={classNames('text-16 text-white bg-primary-dark font-bold rounded w-20 h-20 grid place-content-center ',{
        '!bg-white !text-primary-light':style==='single'
      })}>
        {minutes}
      </p>
      <p className={classNames(' text-40 leading-[30px] text-primary-dark',{
        '!text-white':style==='single'
      })}>:</p>
      <p className={classNames('text-16 text-white bg-primary-dark font-bold rounded w-20 h-20 grid place-content-center ',{
        '!bg-white !text-primary-light':style==='single'
      })}>
        {seconds}
      </p>
    </div>
  );
}
