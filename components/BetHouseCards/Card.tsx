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
          ' border-primary-gray rounded py-2 grid place-items-center w-[64px]',
          {
            'border-2 bg-primary-desatured': type === 'normal',
            'bg-primary-invert h-full': type === 'bonus',
          }
        )}
      >
        {type === 'normal' ? (
          <Image
            width={42}
            height={20}
            src={logoUrl}
            alt='logo casa de aposta'
          ></Image>
        ) : (
          <p className='font-16 text-white font-bold'>Bônus</p>
        )}
      </div>
    </Link>
  );
}
