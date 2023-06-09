import React, { useEffect } from 'react';
import { format, parseISO } from 'date-fns';

//TODO: remover Logo mock
import Image from 'next/image';
import { getAllTips, getHighlightTip, getTipBySlug } from 'lib/api';
import Button from '../ui/button';
import Modal from './Modal';
import ModalButton from './ModalButton';

export default async function HighlightTipUi({ slug }) {
  const data = await getHighlightTip(slug);
  console.log(slug)
  if (!data) {
    return null;
  }
  //TODO: mudar a query abaixo para buscar a dica por id em vez de buscar todas e filtrar
  const modalInfo = (await getTipBySlug(data?.slug))

  const dateFormat = "dd 'de' MMM. 'de' YYY 'às' k'h'mm";



  return (
    <>
      <div className='rounded py-18 px-13  relative overflow-hidden tablet:px-16 h-full'>
        <div className='w-full h-full absolute top-0 left-0 z-10'>
          <Image style={{objectFit:'cover'}} alt='background' src={data?.image} fill></Image>
        </div>
        <div className='w-full h-full absolute top-0 left-0 gradient-80 z-10'></div>
        <div className='z-20 relative h-full flex flex-col'>
          <p className='rounded-sm bg-primary text-white text-10 py-2 px-18 font-bold w-fit cursor-pointer tablet:text-18'>
            {data?.tournamentName}
          </p>
          <div className='flex flex-col gap-12 tablet:gap-8  mb-18 tablet:mb-16'>
            <div className='flex items-stretch justify-between mt-18 gap-5 tablet:mb-8'>
              <div className='flex flex-col items-center gap-9 flex-1 mr-auto'>
                <div className='flex flex-col gap-9 ml-auto items-center'>
                  <Image
                    className='w-20 h-20 tablet:w-29 tablet:h-29 object-contain'
                    width={40}
                    height={40}
                    alt='league logo'
                    src={data.teams[0].logo}
                  />
                  <p className=' text-28 text-white font-tittilium font-bold text-center'>
                    {data.teams[0].name}
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
                    alt='league logo'
                    src={data.teams[1].logo}
                  />
                  <p className=' text-28 text-white font-tittilium font-bold text-center'>
                    {data.teams[1].name}
                  </p>
                </div>
              </div>
            </div>
            <p className=' text-16 font-bold text-white text-center'>
              {format(parseISO(data.eventTime), dateFormat)}
            </p>
            <p className=' text-16 font-bold text-white text-center'>
              {data?.location}
            </p>
          </div>
          <div className=' flex content-between gap-5 justify-center tablet:mb-32'>
            {data?.bookmakerOdds.map(({ odd, bookmakerLogo }) => {
              return (
                <div key={bookmakerLogo} className=' h-22 items-center border-2 border-white rounded flex px-2 py-6 w-fit bg-primary gap-3'>
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
          <div className='flex mx-auto justify-center gap-6 mt-18 tablet:mt-auto tablet:mb-24'>
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
