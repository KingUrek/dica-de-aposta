import React from 'react';
import Container from '../ui/container';
import { format, parseISO } from 'date-fns';
//TODO: remover Logo mock
import Image from 'next/image';
import { getHighlightTip } from '../../lib/api';
import Button from '../ui/button';

export default async function HighlightTipUi() {
  const data = await getHighlightTip();
  const { location, teams, tournamentName, bookmakerOdds } = data;
  const dateFormat = "dd 'de' MMM. 'de' YYY 'às' k'h'mm";

  return (
    <Container>
      <div className='rounded py-18 px-13  relative overflow-hidden'>
        <div className='w-full h-full absolute top-0 left-0 z-10'>
          <Image
            alt='background'
            src={data.image}
            fill
          ></Image>
        </div>
        <div className='w-full h-full absolute top-0 left-0 gradient-80 z-10'></div>
        <div className='z-20 relative'>
          <p className='rounded-sm bg-primary text-white text-10 py-2 px-18 font-bold w-fit cursor-pointer'>
            {tournamentName}
          </p>
          <div className='flex flex-col gap-12 mb-6'>
            <div className='flex items-end justify-between mt-18 gap-5'>
              <div className='flex flex-col items-center gap-9 flex-1 mr-auto'>
                <Image
                  width={40}
                  height={40}
                  alt='league logo'
                  src={teams[0].logo}
                />
                <p className=' text-28 text-white font-tittilium font-bold'>
                  {teams[0].name}
                </p>
              </div>
              <p className=' text-28 text-white font-tittilium font-bold flex-1 text-center'>
                X
              </p>
              <div className='flex flex-col items-center gap-9 ml-auto flex-1'>
                <Image
                  width={40}
                  height={40}
                  alt='league logo'
                  src={teams[1].logo}
                />
                <p className=' text-36 text-white font-tittilium font-bold text-end'>
                  {teams[1].name}
                </p>
              </div>
            </div>
            <p className=' text-16 font-bold text-white text-center'>
              {format(parseISO(data.eventTime), dateFormat)}
            </p>
            <p className=' text-16 font-bold text-white text-center'>
              {location}
            </p>
          </div>
          <div className=' flex content-between gap-5 justify-center'>
            {bookmakerOdds.map(({ odd, bookmakerLogo }) => {
              return (
                <div className=' h-22 items-center border-2 border-white rounded flex px-2 py-6 w-fit bg-primary gap-3'>
                  <Image
                    width={50}
                    height={20}
                    src={bookmakerLogo}
                    alt='logo casa de aposta'
                  ></Image>
                  <p className=' text-white font-bold text-12 '>{odd}</p>
                </div>
              );
            })}
          </div>
          <div className='flex mx-auto justify-center gap-6 mt-18'>
            <div className='w-[144px] h-[42px]'>
              <Button type='outside' link='/'>
                Ver Dica
              </Button>
            </div>
            <div className='w-[144px]'>
              <Button className='w-full text-16 font-bold py-7'>Ver Palpite</Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
