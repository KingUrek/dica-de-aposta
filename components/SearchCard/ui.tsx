import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../ui/button';

export default function SeachCardUi({
  title,
  tipBookmakers,
  uri
}) {
  const bookMakerLogo = tipBookmakers[0]?.single_bookmaker[0]?.featuredImage.node.sourceUrl
  return (
    <div className=' bg-primary rounded pt-4 overflow-hidden'>
      <div className='bg-gray-tipbg pt-16 px-22 pb-19'>
        {bookMakerLogo && (
          <div className='w-[92px] h-[42px] rounded flex items-center justify-center px-3 bg-primary border-2 border-white mb-12'>
            <Image
              width={50}
              height={15}
              alt={'logo ' + tipBookmakers[0]?.single_bookmaker[0]?.featuredImage.node.altText}
              src={bookMakerLogo}
            ></Image>
          </div>
        )}
        <p className='text-primary font-bold text-20 font-tittilium mb-8'>
          {title}
        </p>
        <Button type='inside' link={uri}>Ver Palpite</Button>
      </div>
    </div>
  );
}
