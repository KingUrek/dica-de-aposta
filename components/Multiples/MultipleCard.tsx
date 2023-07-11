import Image from 'next/image';
import React from 'react';
import { format, parseISO } from 'date-fns';
import ModalButton from './ModalButton';
import cn from 'classnames';
import Modal from './Modal';

export default function MultipleCard({
  multipleBookmaker,
  multipleProfit,
  multipleUntil,
  matches,
  featuredImage,
  title,
  databaseId,
  multipleExternal,
  ...rest
}) {
  const dateFormat = "dd/MM/YYY 'às' k'h'mm";
  const modalId = `multiple-modal-${databaseId}`;


  return (
    <>
      <div
        className={cn(
          'bg-primary-light rounded overflow-hidden max-w-[365px] hidden [&:nth-of-type(1)]:block tablet:[&:nth-of-type(2)]:block tabletg:block',
          {}
        )}
      >
        <p className=' text-white font-bold text-20 mx-4 text-center py-4'>
          {title}
        </p>
        <div className='relative h-full'>
          <Image
            fill
            className=' object-cover'
            alt={featuredImage.node.altText}
            src={featuredImage.node.sourceUrl}
          ></Image>
          <div className='w-full h-full absolute top-0 left-0 gradient-80 z-10'></div>
          <div className='p-12 z-20 relative'>
            <div className=' flex justify-between pb-12'>
              <div className='w-[92px] h-[42px] rounded flex items-center justify-center px-3 bg-primary border-2 border-white'>
                <Image
                  width={50}
                  height={15}
                  alt={'logo ' + multipleBookmaker.title}
                  src={multipleBookmaker.featuredImage.node.mediaItemUrl}
                ></Image>
              </div>
              <div className='w-[120px] h-[70px] rounded flex flex-col justify-center items-center px-3 py-5 bg-primary border-2 border-white'>
                <p className='font-bold text-white text-18 tablet:text-20'>
                  Retorno
                </p>
                <p className='font-bold text-white text-28'>{multipleProfit}</p>
              </div>
            </div>
            <p className='text-white font-bold pb-5 border-b border-white mb-22 tablet:mb-16'>
              Aposte até {format(parseISO(multipleUntil), dateFormat)}
            </p>
            <div className='flex gap-7 justify-center flex-wrap mb-18'>
              {matches.map(({ match }) => {
                return (
                  match.length >= 2 && (
                    <div
                      key={
                        match[0]?.databaseId +
                        match[1]?.databaseId +
                        match[0]?.title
                      }
                      className='w-[142px] h-[42px] rounded flex items-center justify-center px-3 bg-primary border-2 border-white gap-y-7 gap-x-9'
                    >
                      <Image
                        className=' object-contain w-13 h-13'
                        width={25}
                        height={25}
                        alt={'logo ' + match[0]?.title}
                        src={match[0]?.teamLogo}
                      ></Image>
                      <p className='text-[24px] font-bold text-white'>X</p>
                      <Image
                        className=' object-contain w-13 h-13'
                        width={25}
                        height={25}
                        alt={'logo ' + match[1]?.title}
                        src={match[1]?.teamLogo}
                      ></Image>
                    </div>
                  )
                );
              })}
            </div>
            <ModalButton modalId={modalId} />
          </div>
        </div>
      </div>
      <Modal
        modalId={modalId}
        featuredImage={featuredImage}
        multipleUntil={multipleUntil}
        multipleBookmaker={multipleBookmaker}
        multipleProfit={multipleProfit}
        matches={matches}
        multipleExternal={multipleExternal}
      ></Modal>
    </>
  );
}
