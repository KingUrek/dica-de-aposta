import React, { useEffect } from 'react';
import { format, parseISO } from 'date-fns';

//TODO: remover Logo mock
import Image from 'next/image';
import { getAllTips, getHighlightTip, getTipBySlug } from 'lib/api';
import Button from '../ui/button';
import Modal from './Modal';
import ModalButton from './ModalButton';

export default async function SingleHighlightTipUi({ data }) {
  if (!data) {
    return null;
  }
  //TODO: mudar a query abaixo para buscar a dica por id em vez de buscar todas e filtrar
  const dateFormat = "dd 'de' MMM. 'de' YYY 'às' k'h'mm";


  return (
    <>
      <div className='rounded py-18 px-13  relative overflow-hidden tablet:px-16 h-full border-t-[10px] border-primary-light'>
        <div className='w-full h-full absolute top-0 left-0 z-10'>
          <Image style={{objectFit:'cover'}} alt='background' src={data?.featuredImage.node.mediaItemUrl} fill></Image>
        </div>
        <div className='w-full h-full absolute top-0 left-0 gradient-80 z-10'></div>
        <div className='z-20 relative h-full flex flex-col'>
          <div className='flex flex-col gap-12 tablet:gap-8  mb-18 tablet:mb-16'>
            <div className='flex items-stretch justify-between mt-18 gap-5 tablet:mb-8'>
              <div className='flex flex-col items-center gap-9 flex-1 mr-auto'>
                <div className='flex flex-col gap-9 ml-auto items-center'>
                  <Image
                    className='w-20 h-20 tablet:w-29 tablet:h-29 object-contain'
                    width={40}
                    height={40}
                    alt='league teamLogo'
                    src={data.tipTimes[0].teamLogo}
                  />
                  <p className=' text-28 text-white font-tittilium font-bold text-center'>
                    {data.tipTimes[0].title}
                  </p>
                </div>
              </div>
              <p className=' text-28 text-white font-tittilium font-bold flex-1 text-center max-w-[90px] tablet:pt-[78px] pt-29'>
                X
              </p>
              <div className='flex flex-col items-center gap-9 ml-auto flex-1'>
                <div className='flex flex-col items-center gap-9 mr-auto'>
                  <Image
                    className='w-20 h-20 tablet:w-29 tablet:h-29 object-contain'
                    width={40}
                    height={40}
                    alt='league teamLogo'
                    src={data.tipTimes[1].teamLogo}
                  />
                  <p className=' text-28 text-white font-tittilium font-bold text-center'>
                    {data.tipTimes[1].title}
                  </p>
                </div>
              </div>
            </div>
            <p className=' text-16 font-bold text-white text-center'>
              {format(parseISO(data.tipEventDatetime), dateFormat)}
            </p>
            {!!data?.tipLocalEvent.length && <p className=' text-16 font-bold text-white text-center'>
              {data?.tipLocalEvent[0]?.title}
            </p>}
          </div>
          <div className=' flex content-between gap-5 justify-center tablet:mb-32'>
            {data?.tipBookmakers.map(({ bookmaker_odd, bookmakerLogo, single_bookmaker }) =>
            {
              return (
                <div key={single_bookmaker[0].featuredImage.node.mediaItemUrl} className=' h-22 items-center border-2 border-white rounded flex px-2 py-6 w-fit bg-primary gap-3'>
                  <Image
                    width={50}
                    height={20}
                    src={single_bookmaker[0].featuredImage.node.mediaItemUrl}
                    alt='teamLogo casa de aposta'
                  ></Image>
                  <p className=' text-white font-bold text-12 '>{bookmaker_odd}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
