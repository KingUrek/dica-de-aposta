"use client"
import classNames from 'classnames';
import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

type Props = {
  children: string | ReactNode;
  last?: boolean;
  link: string;
};

export default function HeaderOption({
  children,
  last = false,
  link='/'
}: Props) {
  const menuClass = classNames(
    'font-tittilium max-w-[200px] font-bold py-12 text-28 text-primary border-borderGray hover:text-primary-invert',
    {
      'border-b': !last,
    }
  );
  return (
    <div className='px-20'>
      <Link href={link}>
        <p className={menuClass}>{children}</p>
      </Link>
    </div>
  );
}
