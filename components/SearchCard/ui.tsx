import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function SeachCardUi(props) {
  const { title, tipBookmakers, uri, tipContent } = props.node;
  const bookMakerLogo =
    tipBookmakers[0]?.single_bookmaker[0]?.featuredImage.node.sourceUrl;

  return (
    <div className=' bg-primary rounded pt-4 overflow-hidden'>
      <div className='bg-gray-tipbg pt-13 px-11 pb-10 tablet:pt-16 tablet:pb-18 tablet:px-22'>
        {bookMakerLogo && (
          <div className='w-[92px] h-[42px] rounded flex items-center justify-center px-3 bg-primary border-2 border-primary-gray mb-12'>
            <Image
              width={50}
              height={15}
              alt={
                'logo ' +
                tipBookmakers[0]?.single_bookmaker[0]?.featuredImage.node
                  .altText
              }
              src={bookMakerLogo}
            ></Image>
          </div>
        )}
        <p className='text-primary font-bold text-20 tablet:text-28 font-tittilium mb-8'>
          {title}
        </p>
        <p className='text-primary-gray text-14 tablet:text-16'>
          {tipContent}
          <Link className='text-orange font-bold pl-2' href={'palpite' + uri}>Veja mais</Link>
        </p>
      </div>
    </div>
  );
}
