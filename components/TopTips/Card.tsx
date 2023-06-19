'use client';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import React, { useState } from 'react';
import DropDownArrow from '../../public/icons/dropdown-arrow.svg';
import cn from 'classnames';
import Timer from './Timer';
import Button from '../ui/button';

export default function Card({
  image,
  tournamentName,
  bookmakerOdds,
  eventTime,
  teams,
}) {
  const dateFormat = "dd 'de' MMM. 'de' YYY 'às' k'h'mm";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full bg-primary-dark rounded pt-4 overflow-hidden'>
      <div className='relative h-32 w-full'>
        <Image fill alt='imagem de fundo' src={image}></Image>
      </div>
      <div className=' bg-gray-tipbg w-full py-12 px-11'>
        <div className='flex justify-between items-center pb-7'>
          <p className='rounded-sm bg-primary-dark text-white text-10 py-2 px-18 font-bold w-fit cursor-pointer'>
            {tournamentName}
          </p>
          <div className='relative px-7 py-5 bg-primary-dark rounded border-solid border-2 border-primary-gray flex justify-center'>
            <Image
              alt={bookmakerOdds[0].bookmakerName}
              width={60}
              height={20}
              src={bookmakerOdds[0].bookmakerLogo}
            ></Image>
          </div>
        </div>
        <p className='pb-5 border-b border-borderGray'>
          {format(parseISO(eventTime), dateFormat)}
        </p>
        <div className='flex items-end justify-between mt-18 gap-5'>
          <div className='flex flex-col items-center gap-9 max-w-[100px]'>
            <Image
              width={33}
              height={33}
              alt='logo da liga'
              src={teams[0].logo}
            />
            <p className=' text-center text-20 text-primary-dark font-tittilium font-bold'>
              {teams[0].name}
            </p>
          </div>
          <p className=' text-center text-20 text-primary-dark font-tittilium font-bold'>
            X
          </p>
          <div className='flex flex-col items-center gap-9 max-w-[100px]'>
            <Image
              width={33}
              height={33}
              alt='logo da liga'
              src={teams[1].logo}
            />
            <p className=' text-center text-20 text-primary-dark font-tittilium font-bold'>
              {teams[1].name}
            </p>
          </div>
          <DropDownArrow
            className='mb-5 ml-auto cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
          ></DropDownArrow>
        </div>
        <div
          className={cn('w-full overflow-hidden', {
            ' max-h-0': isOpen,
          })}
        >
          <p className=' text-primary-gray mt-12 text-14 mb-12'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Veja mais
          </p>
          <p className=' text-primary-dark text-20 font-bold font-tittilium mb-5'>
            Milan vence de 2 x 1
          </p>
          <p className='rounded-sm bg-primary-dark text-white text-10 py-2 px-18 font-bold w-fit cursor-pointer'>
            ODD {bookmakerOdds[0].odd}
          </p>
          <div className='w-full border-b border-borderGray mt-12 mb-12'></div>
          <div className='flex flex-col gap-5 mx-auto items-center'>
            <p className=' font-tittilium text-primary-dark text-16 font-bold'>
              Tempo Restante para apostar
            </p>
            <Timer date={eventTime}></Timer>
            <div className='w-full mt-7 mb-2'>

              <Button type='outside' link="/">Apostar em {bookmakerOdds[0].bookmakerName}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
