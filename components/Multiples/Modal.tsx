'use client';
import React, { useState } from 'react';
import Container from 'components/ui/container';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import classNames from 'classnames';
import { ModalMatch } from './Components';
import Button from 'components/ui/button';

export default function Modal({
  modalId,
  featuredImage,
  multipleUntil,
  multipleBookmaker,
  multipleProfit,
  matches,
  multipleExternal
}) {
  const dateFormat = "dd/MM/YYY 'às' k'h'mm";
  const tableValues = [5, 50, 100, 200, 300];
  const [selectedOption, setSelectedOption] = useState(tableValues[0]);

  function closeDialog(e) {
    const dialog = document.getElementById(modalId);
    if (e.target === dialog) {
      /* @ts-expect-error */
      dialog?.close();
    }
  }
  function changeOption(value) {
    setSelectedOption(value);
  }

  function getProfitValue(value) {
    const [multiplier = 1, divider = 1] = multipleProfit?.split('/');
    return `R$ ${value * +multiplier * +divider},00`;
  }


  return (
    <dialog
      style={{ padding: 0, border: 0 }}
      id={modalId}
      onClick={closeDialog}
      className='backdrop bg-transparent'
    >
      <form method='dialog'>
        <Container>
          <div className='rounded bg-primary pt-4 overflow-hidden min-w-[375px] tablet:min-w-[750px]'>
            <div className='relative h-26 w-full tablet:h-[90px]'>
              <Image
                style={{ objectFit: 'cover' }}
                fill
                alt='imagem de fundo'
                src={featuredImage?.node.sourceUrl}
              ></Image>
              <div className='left-0 right-0 top-0 bottom-0 bg-black-darkest bg-opacity-50 absolute hidden tablet:block'></div>
            </div>
            <div className=' px-11 py-7 bg-gray-tipbg tablet:bg-white'>
              <p className='pb-5 border-b mb-12 text-primary-gray border-borderGray mt-5 tablet:max-w-[368px] tablet:'>
                Aposte até {format(parseISO(multipleUntil), dateFormat)}
              </p>
              <div className='flex items-center justify-between mb-15 tablet:justify-start tablet:gap-12'>
                <p className='font-bold text-primary-gray tablet:text-20'>Apostador</p>
                <div className='w-[92px] h-[42px] rounded flex items-center justify-center px-3 bg-primary border-2 border-primary-gray tablet:border-primary'>
                  <Image
                    width={50}
                    height={15}
                    alt={'logo ' + multipleBookmaker.title}
                    src={multipleBookmaker.featuredImage.node.mediaItemUrl}
                  ></Image>
                </div>
              </div>
              <div className='flex justify-between gap-32 tablet:justify-start tablet:gap-16'>
                <div className=''>
                  <p className='font-bold text-primary-gray tablet:text-20'>Aposte</p>
                  <ul className='bg-[#F3F3F3] rounded w-fit flex flex-col gap-7 py-4 mt-7 tablet:border tablet:border-[#D0D0D0]'>
                    {tableValues.map((value) => {
                      return (
                        <li
                          onClick={() => changeOption(value)}
                          className={classNames(
                            'text-primary-gray cursor-pointer pl-5 pr-20',
                            {
                              '!text-white rounded-sm bg-primary':
                                value === selectedOption,
                            }
                          )}
                          key={value}
                        >
                          R$ {value},00
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className=' bg-primary rounded-sm flex flex-col items-center justify-center h-fit px-6 py-4 my-auto tablet:flex-row tablet:gap-16 tablet:px-14 tablet:py-6'>
                  <p className='text-18 font-bold text-white tablet:text-20'>Retorno</p>
                  <p className='text-20 font-bold text-white tablet:text-28'>
                    {getProfitValue(selectedOption)}
                  </p>
                </div>
              </div>
              <div className='mb-10 flex flex-col gap-12 tablet:mt-20'>

              {matches.map(({ match, description, matchTime, matchTournament, }) => {
                return (
                  <ModalMatch
                    match={match}
                    description={description}
                    matchTime={matchTime}
                    matchTournament={matchTournament}
                    key={
                      match[0]?.databaseId +
                      match[1]?.databaseId +
                      match[0]?.title
                    }
                  ></ModalMatch>
                );
              })}
              </div>
              <div className='max-w-[268px] mx-auto'>
                
                {multipleExternal && <Button type='outside' link={multipleExternal}>Apostar na dica</Button>}
              </div>
                
            </div>
          </div>
          {/* <TipCard {...props}></TipCard> */}
        </Container>
      </form>
    </dialog>
  );
}
