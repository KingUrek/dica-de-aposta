'use client';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import React, { useState } from 'react';
import DropDownArrow from '../../public/icons/dropdown-arrow.svg';
import cn from 'classnames';
import Timer from './Timer';
import Button from '../ui/button';

export default function Card({
  featuredImage,
  tournamentName,
  tipBookmakers,
  tipEventDatetime,
  tipTimes,
}) {
  const dateFormat = "dd 'de' MMM. 'de' YYY 'às' k'h'mm";
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className='relative w-full bg-primary-dark rounded pt-4 overflow-hidden tablet:flex'>
      <div className='relative h-32 w-full tablet:w-[300px] tablet:flex-shrink-0 tablet:h-auto tablet:mt-[-8px]'>
        <Image fill alt='imagem de fundo' src={featuredImage?.node.mediaItemUrl}></Image>
        <div className='left-0 right-0 top-0 bottom-0 bg-black-darkest bg-opacity-50 absolute hidden tablet:block'></div>
      </div>
      <div className=' bg-gray-tipbg w-full py-12 px-11 tablet:flex tablet:gap-24'>
        <div>
          <div className='flex justify-between items-center pb-7'>
            <p className='rounded-sm bg-primary-dark text-white text-10 py-2 px-18 font-bold w-fit cursor-pointer tablet:absolute tablet:left-9 tablet:top-7 tablet:text-14 tablet:px-4 tablet:py-2'>
              {tournamentName}
            </p>
            <div className='relative px-7 py-5 bg-primary-dark rounded border-solid border-2 border-primary-gray flex justify-center tablet:border-white'>
              <Image
                alt={'logo ' + tipBookmakers[0].single_bookmaker[0].title}
                width={60}
                height={20}
                src={tipBookmakers[0].single_bookmaker[0].featuredImage.node.mediaItemUrl}
              ></Image>
            </div>
          </div>
          <div className='flex-col tablet:flex-row tablet:items-center tablet:gap-14 hidden tablet:flex mb-12'>
            <p className=' text-primary-dark text-20 font-bold font-tittilium mb-5 tablet:mb-0 '>
              Milan vence de 2 x 1
            </p>
            <p className='rounded-sm bg-primary-dark text-white text-10 py-2 px-18 font-bold w-fit cursor-pointer tablet:text-14'>
              ODD {tipBookmakers[0].bookmaker_odd}
            </p>
          </div>
          <p className='pb-5 border-b border-borderGray text-14 tablet:text-16 text-primary-gray'>
            {format(parseISO(tipEventDatetime), dateFormat)}
          </p>
          <p className=' text-primary-gray mt-12 text-14 hidden tablet:block mb-0 tablet:text-16'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Veja mais
          </p>
        </div>

        <div className='flex items-end justify-between mt-18 gap-5 tablet:absolute tablet:left-[30px] tablet:bottom-[46px]'>
          <div className='flex flex-col items-center gap-9 max-w-[100px]'>
            <Image
              width={33}
              height={33}
              alt='logo da liga'
              src={tipTimes[0].teamLogo}
            />
            <p className=' text-center text-20 text-primary-dark tablet:text-white font-tittilium font-bold'>
              {tipTimes[0].title}
            </p>
          </div>
          <p className=' text-center text-20 text-primary-dark tablet:text-white font-tittilium font-bold'>
            X
          </p>
          <div className='flex flex-col items-center gap-9 max-w-[100px]'>
            <Image
              width={33}
              height={33}
              alt='logo da liga'
              src={tipTimes[1].teamLogo}
            />
            <p className=' text-center text-20 text-primary-dark tablet:text-white font-tittilium font-bold'>
              {tipTimes[1].title}
            </p>
          </div>
          <DropDownArrow
            className='mb-5 ml-auto cursor-pointer tablet:hidden'
            onClick={() => setIsOpen(!isOpen)}
          ></DropDownArrow>
        </div>
        <div
          className={cn('w-full overflow-hidden tablet:max-h-none', {
            'max-h-0': !isOpen,
          })}
        >
          <p className=' text-primary-gray mt-12 text-14 mb-12 tablet:hidden'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Veja mais
          </p>
          <div className='flex flex-col tablet:flex-row tablet:items-center tablet:gap-14 tablet:hidden'>
            <p className=' text-primary-dark text-20 font-bold font-tittilium mb-5 tablet:mb-0'>
              Milan vence de 2 x 1
            </p>
            <p className='rounded-sm bg-primary-dark text-white text-10 py-2 px-18 font-bold w-fit cursor-pointer'>
              ODD {tipBookmakers[0].bookmaker_odd}
            </p>
          </div>

          <div className='w-full border-b border-borderGray mt-12 mb-12 tablet:hidden'></div>
          <div className='flex flex-col gap-5 mx-auto items-center tablet:h-full justify-center'>
            <p className=' font-tittilium text-primary-dark text-16 font-bold'>
              Tempo Restante para apostar
            </p>
            <Timer date={tipEventDatetime}></Timer>
            <div className='w-full mt-7 mb-2 max-w-[298px]'>
              <Button type='outside' link='/'>
                Apostar em {tipBookmakers[0].single_bookmaker[0].title}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
