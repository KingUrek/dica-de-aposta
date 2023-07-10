'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import DropDownArrow from 'public/icons/dropdown-arrow.svg';

export function ModalMatch({match}) {
  const [isOpen, setIsOpen] = useState(false)
  console.log(match)
  return (
    <div className='flex items-stretch justify-center tablet:top-20 mt-12 gap-5  '>
      <div className='flex flex-col items-center gap-9 max-w-[100px] h-full'>
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
      <p className=' pt-[59px] text-center text-20 text-primary-dark  font-tittilium font-bold'>
        X
      </p>
      <div className='flex flex-col items-center gap-9 max-w-[100px] h-full'>
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
      <DropDownArrow
        className='mb-5 ml-auto cursor-pointer mt-auto'
        onClick={() => setIsOpen(!isOpen)}
      ></DropDownArrow>
    </div>
  );
}
