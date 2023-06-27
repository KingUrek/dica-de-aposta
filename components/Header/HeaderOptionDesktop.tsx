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

export default function HeaderOptionDesktop({
  children,
  last = false,
  link='/'
}: Props) {
  const menuClass = classNames(
    'font-tittilium max-w-[200px] font-bold   text-primary-invert text-18 tabletx:text-white ',
  );
  return (
    <div className='pr-12 border-white hover:border-b-2 py-2 hover:pb-1 flex items-center'>
      <Link href={link}>
        <p className={menuClass}>{children}</p>
      </Link>
    </div>
  );
}
