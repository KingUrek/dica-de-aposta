import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  logoUrl:string
  link: string;
  type?: 'normal' | 'bonus';
  index?: number;
  numberOfCards?:number
};

export default function Card({  link, type = 'normal', index, logoUrl,numberOfCards }: Props) {

  return (
    <Link href={link}>
      <div
        className={classNames(
          ' border-primary-gray relative rounded py-2 px-2 grid place-items-center w-[64px] h-[32px] ',
          {
            'border-2 bg-primary-desatured tablet:w-[90px] tablet:h-[46px]': type === 'normal',
            'bg-primary-invert h-full tablet:w-[140px] tablet:h-[46px] tablet:font-20': type === 'bonus',
            'tablet:hidden':index===0 && numberOfCards && numberOfCards >= 4
          }
        )}
      >
        {type === 'normal' ? (
          <div className=' relative h-full w-full'>
          <Image
            className=' object-contain'
            fill
            src={logoUrl}
            alt='logo casa de aposta'
            ></Image>
          </div>
            
        ) : (
          <p className='font-16 text-white font-bold'>Bônus</p>
        )}
      </div>
    </Link>
  );
}
