import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  logoUrl: string;
  link: string;
};

export default function Card({ logoUrl, link }: Props) {
  return (
    <Link href={link}>
      <div
        className={classNames(
          ' border-primary-gray relative rounded py-6 px-6 grid place-items-center w-[96px] h-[46px] border-2 bg-primary-desatured'
        )}
      >
        <div className=' relative h-full w-full'>
          <Image
            className=' object-contain'
            fill
            src={logoUrl}
            alt='logo casa de aposta'
          ></Image>
        </div>
      </div>
    </Link>
  );
}
