import Image from 'next/image';
import { ReactNode } from 'react';
import cn from 'classnames';
import Link from 'next/link';

type Props = {
  children: ReactNode;
  icon: string;
  bgImage: string;
  isSmall: boolean;
  slug: string;
};
export default function Card({ children, icon, bgImage, isSmall, slug }: Props) {
  return (
    <Link href={`/${slug}`}>
    <div
      className={cn(
        `rounded  py-7 bg-gray-dark flex items-center justify-center
    gap-[5px] tablet:gap-[7px] w-[110px] h-[48px] relative overflow-hidden   tablet:h-[56px] tabletg:w-[150px]`,
        {
          'tablet:w-[100px] px-4': isSmall,
          'tablet:w-[130px] px-7': !isSmall,
        }
      )}
    >
      <div className='w-full h-full absolute top-0 left-0'>
        <Image fill alt='imagem de fundo' src={bgImage}></Image>
      </div>
      <div className='w-full h-full absolute top-0 left-0 bg-black-darkest bg-opacity-60 z-10'></div>
      <div
        className={cn('relative  shrink-0', {
          'w-8 h-8 tabletg:w-12 tabletg:h-12': isSmall,
          'w-10 h-10 tablet:w-12 tablet:h-12': !isSmall,
        })}
      >
        <Image className=' z-20' fill alt='sport icon' src={icon} />
      </div>
      <p
        className={cn('   text-white font-bold font-tittilium z-20 ', {
          'text-12 mobileg:text-16 tabletg:text-20': isSmall,
          'text-16 tablet:text-20': !isSmall,
        })}
      >
        {children}
      </p>
      </div>
    </Link>
      
  );
}
