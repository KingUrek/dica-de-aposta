import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  logoUrl: string;
  link: string;
  type?: 'normal' | 'bonus';
};

export default function Card({ logoUrl, link, type = 'normal' }: Props) {
  return (
    <Link href={link}>
      <div
        className={classNames(
          ' border-primary-gray relative rounded py-2 px-2 grid place-items-center w-[64px] h-[32px]',
          {
            'border-2 bg-primary-desatured': type === 'normal',
            'bg-primary-invert h-full': type === 'bonus',
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
