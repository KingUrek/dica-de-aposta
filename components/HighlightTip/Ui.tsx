import React from 'react';
import Container from '../ui/container';
import { format, parseISO } from 'date-fns';

//TODO: remover Logo mock
import Image from 'next/image';
import { getAllTips, getHighlightTip } from '../../lib/api';
import Button from '../ui/button';
import Modal from './Modal';
import ModalButton from './ModalButton';

export default async function HighlightTipUi() {
  const data = await getHighlightTip();
  const modalInfo = (await getAllTips()).find(({ slug }) => data.slug === slug);
  const { location, teams, tournamentName, bookmakerOdds } = data;
  const dateFormat = "dd 'de' MMM. 'de' YYY 'às' k'h'mm";

  return (
    <>
      <div className='rounded py-18 px-13  relative overflow-hidden tablet:px-16'>
        <div className='w-full h-full absolute top-0 left-0 z-10'>
          <Image alt='background' src={data.image} fill></Image>
        </div>
        <div className='w-full h-full absolute top-0 left-0 gradient-80 z-10'></div>
        <div className='z-20 relative'>
          <p className='rounded-sm bg-primary text-white text-10 py-2 px-18 font-bold w-fit cursor-pointer tablet:text-18'>
            {tournamentName}
          </p>
          <div className='flex flex-col gap-12 mb-18 tablet:mb-16'>
            <div className='flex items-end justify-between mt-18 gap-5'>
              <div className='flex flex-col items-center gap-9 flex-1 mr-auto'>
                <div className='flex flex-col ml-auto items-center'>
                  <Image
                    width={40}
                    height={40}
                    alt='league logo'
                    src={teams[0].logo}
                  />
                  <p className=' text-28 text-white font-tittilium font-bold text-center'>
                    {teams[0].name}
                  </p>
                </div>
              </div>
              <p className=' text-28 text-white font-tittilium font-bold flex-1 text-center max-w-[120px]'>
                X
              </p>
              <div className='flex flex-col items-center gap-9 ml-auto flex-1'>
                <div className='flex flex-col items-center'>
                  <Image
                    width={40}
                    height={40}
                    alt='league logo'
                    src={teams[1].logo}
                  />
                  <p className=' text-36 text-white font-tittilium font-bold text-center'>
                    {teams[1].name}
                  </p>
                </div>
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
          <div className='flex mx-auto justify-center gap-6 mt-18 tablet:mt-32 tablet:mb-24'>
            <ModalButton />
            {data.link && (
              <div className='w-[144px] tablet:w-[222px]'>
                <Button
                  className='!leading-[14px] text-white border-white'
                  type='inside'
                  link={data.link}
                >
                  Ver Palpite
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal {...modalInfo}></Modal>
    </>
  );
}
