import Image from 'next/image';
import React from 'react';
import { format, parseISO } from 'date-fns';
import Button from '../ui/button';

export default function Card({
  tipTournaments,
  tipBookmakers,
  tipEventDatetime,
  tipTimes,
  uri,
  content,
  featuredImage
}) {
  const dateFormat = "dd 'de' MMM. 'de' YYY 'às' k'h'mm";

  return (
    <div className='w-[365px] bg-primary-light rounded pt-4 overflow-hidden hidden [&:nth-of-type(1)]:block tabletp:[&:nth-of-type(2)]:block tabletx:block '>
      <div className='bg-gray relative h-full'>
        <Image fill alt="background" src={featuredImage?.node.mediaItemUrl}></Image>
        <div className='w-full h-full absolute top-0 left-0 gradient-80 z-10'></div>
        <div className='pt-16 pb-20 px-16 relative z-20 flex flex-col h-full'>
          <p className='bg-primary-light rounded-sm min-w-[130px] h-9 grid place-items-center text-white font-bold w-fit mb-16 px-5'>
            {tipTournaments[0]?.name}
          </p>
          <div className='w-[92px] h-[42px] rounded flex items-center justify-center px-3 bg-primary border-2 border-white mb-12'>
            <Image
              width={50}
              height={15}
              alt={'logo ' + tipBookmakers[0].single_bookmaker[0].title}
              src={
                tipBookmakers[0].single_bookmaker[0].featuredImage?.node
                  .mediaItemUrl
              }
            ></Image>
          </div>
          <time className='text-white border-b border-white text-16 pb-5 mb-16 block'>
            {format(parseISO(tipEventDatetime), dateFormat)}
          </time>
          <div className='flex items-end justify-between mt-18 gap-5 mb-16'>
            <div className='flex flex-col items-center gap-9 flex-1 mr-auto'>
              <div className='flex flex-col ml-auto items-center gap-5'>
                <Image
                  width={40}
                  height={40}
                  alt='league logo'
                  src={tipTimes[0].teamLogo}
                />
                <p className=' text-28 text-white font-tittilium font-bold text-center'>
                  {tipTimes[0].title}
                </p>
              </div>
            </div>
            <p className=' text-28 text-white font-tittilium font-bold flex-1 text-center max-w-[40px]'>
              X
            </p>
            <div className='flex flex-col items-center gap-9 ml-auto flex-1'>
              <div className='flex flex-col items-center gap-5'>
                <Image
                  width={40}
                  height={40}
                  alt='league logo'
                  src={tipTimes[1].teamLogo}
                />
                <p className=' text-28 text-white font-tittilium font-bold text-center'>
                  {tipTimes[1].title}
                </p>
              </div>
            </div>
          </div>
          <div className='mt-auto'>

          <Button
            type='inside'
            link={`/palpite${uri}`}
            className='text-white border-white mt-auto'
          >
            Ver Palpite
            </Button>
          </div>
            
        </div>
      </div>
    </div>
  );
}
