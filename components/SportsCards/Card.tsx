import Image from 'next/image';
import { ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children: ReactNode;
  icon: string;
  bgImage: string;
  cardsQuantity: number;
};
export default function Card({ children, icon, bgImage, cardsQuantity }: Props) {
  return (
    <div
      className={cn(`rounded px-7 py-7 bg-gray-dark flex items-center justify-center
    gap-[5px] tablet:gap-[7px] w-[110px] h-[48px] relative overflow-hidden  tablet:w-[130px] tablet:h-[56px] tabletg:w-[150px]`,
        {
          'tablet:w-[100px]': cardsQuantity >= 4,
        })}
    >
      <div className='w-full h-full absolute top-0 left-0'>
        <Image fill alt='imagem de fundo' src={bgImage}></Image>
      </div>
      <div className='w-full h-full absolute top-0 left-0 bg-black-darkest bg-opacity-60 z-10'></div>
      <div className='relative w-10 h-10 tablet:w-12 tablet:h-12'>
        <Image
          className=' z-20'
 fill
          alt='sport icon'
          src={icon}
        />
      </div>
      <p className=' text-16 tablet:text-20 text-white font-bold font-tittilium z-20'>
        {children}
      </p>
    </div>
  );
}
