import React from 'react';
import Button from '../ui/button';
import Image from 'next/image';
import { parseAdvantages } from '../../lib/utils';
import ShieldIcon from '../../public/icons/ShieldIcon.svg';
import PresentIcon from '../../public/icons/PresentIcon.svg';
import InnerHtmlComponent from '../InnerHtmlComponent';

export default function Card({
  bookmakerLogo,
  bookmakerAdventages,
  bookmakerBonus,
  bookmakerUrl,
  title,
  bookmakerDescription
}) {
  return (
    <div className='rounded bg-deepblue max-w-[172px] tablet:max-w-[365px] desktop:w-[365px] tablet:last-of-type:hidden pt-5'>
      <div className='bg-primary rounded-b pb-7 h-full desktop:pb-18 desktop:pt-7'>
        <div className='px-5 h-full flex flex-col desktop:px-11'>
          <div className=' relative w-[84px] h-[50px]'>
            <Image
              alt='bookMaker logo'
              src={bookmakerLogo}
              fill
              className=' object-contain'
            />
          </div>
          <hr className=' text-white mb-12'></hr>
          <div className='flex flex-col gap-5 mb-13 tablet:grid grid-cols-2 tablet:gap-x-6 tablet:gap-y-8'>
            {parseAdvantages(bookmakerAdventages).map((ad) => {
              return (
                <div key={ad} className='flex gap-3 tablet:gap-4'>
                  <ShieldIcon style={{flexShrink: 0}}></ShieldIcon>
                  <p className='text-14 text-white tablet:text-16'>{ad}</p>
                </div>
              );
            })}
            {bookmakerBonus && (
              <div className='flex gap-3 mt-7 tablet:mt-0'>
                <PresentIcon style={{flexShrink: 0}}></PresentIcon>
                <InnerHtmlComponent className='text-14 text-white [&_strong]:!text-20 [&_p]:!text-16'>{bookmakerBonus}</InnerHtmlComponent>
              </div>
            )}
          </div>
          <hr className=' text-white mb-8 hidden tablet:block'></hr>
          <p className=' text-white text-16 mb-16 hidden tablet:block'>
            {bookmakerDescription}
            </p>
          <div className='mt-auto desktop:w-[298px] desktop:mx-auto'>
            <Button link={bookmakerUrl||'/'}>{title}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
