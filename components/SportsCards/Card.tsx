import Image from 'next/image';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  icon: string;
  bgImage: string;
};
export default function Card({ children, icon, bgImage }: Props) {
  return (
    <div className=' rounded px-7 py-7 bg-gray-dark flex items-center justify-center
    gap-[5px] w-[110px] h-[48px] relative overflow-hidden'>
      <div className='w-full h-full absolute top-0 left-0'>
      <Image fill alt="imagem de fundo" src={bgImage}></Image>
      </div>
      <div className='w-full h-full absolute top-0 left-0 bg-black-darkest bg-opacity-60 z-10'>

      </div>

      <Image className=' z-20' width={20} height={20} alt='sport icon' src={icon} />
      <p className='font-16 text-white font-bold font-tittilium z-20'>
      {children}
      </p>

    </div>
  );
}
