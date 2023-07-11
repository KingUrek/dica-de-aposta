'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import DropDownArrow from 'public/icons/dropdown-arrow.svg';
import { format, parseISO } from 'date-fns';
import classNames from 'classnames';

export function ModalMatch({ match, description,matchTournament,matchTime }) {
  const [isOpen, setIsOpen] = useState(false);
  const dateFormat = "dd/MM/YYY 'às' k'h'mm";

  return (
    <div className='border-borderGray pb-10 border-b last:border-b-0 tablet:bg-gray-tipbg tablet:rounded tablet:py-11 tablet:px-14 tablet:border-t-[9px] tablet:border-primary tablet:border-b-0'>
      <div className='flex items-stretch tablet:top-20 mt-12 gap-5 mb-8 tablet:border-b-2 tablet:pb-4 tablet:border-borderGray     '>
        <div className='flex flex-col items-center gap-9 h-full'>
          <Image
            style={{ objectFit: 'contain', height: 30, width: 30 }}
            width={33}
            height={33}
            alt='logo da liga'
            src={match[0].teamLogo}
          />
          <p className=' text-center text-20 text-primary-dark  font-tittilium font-bold'>
            {match[0].title}
          </p>
        </div>
        <p className=' pt-[49px] text-center text-20 text-primary-dark  font-tittilium font-bold'>
          X
        </p>
        <div className='flex flex-col items-center gap-9 h-full'>
          <Image
            style={{ objectFit: 'contain', height: 30, width: 30 }}
            width={33}
            height={33}
            alt='logo da liga'
            src={match[1].teamLogo}
          />
          <p className=' text-center text-20 text-primary-dark font-tittilium font-bold'>
            {match[1].title}
          </p>
        </div>
        {description && <DropDownArrow
          className={classNames('mb-5 ml-auto cursor-pointer mt-auto', {
            'rotate-180':isOpen
          })}
          onClick={() => setIsOpen(!isOpen)}
        ></DropDownArrow>}
      </div>
      <div className='mb-12'>
        {matchTournament && <div className='bg-primary rounded-sm min-w-[130px] h-9 grid place-items-center text-white font-bold mb-6 w-fit px-5 text-10 tablet:text-14'>
        {matchTournament?.name}
        </div>}
        {matchTime && <time className='text-14 text-primary-gray tablet:text-16'>{ format(parseISO(matchTime), dateFormat)}</time>}
        
      </div>
      <div className={classNames('grid grid-rows-[0fr] overflow-hidden transition-all', {
        'grid-rows-[1fr]':isOpen
      })}>
        <p className='w-[80%] text-primary-gray min-h-0'>{description}</p>
      </div>
    </div>
  );
}
