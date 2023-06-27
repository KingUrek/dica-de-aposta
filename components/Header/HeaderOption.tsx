'use client';
import classNames from 'classnames';
import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Container from '../ui/container';

type Props = {
  children: string | ReactNode;
  last?: boolean;
  link: string;
};

export default function HeaderOption({
  children,
  last = false,
  link = '/',
}: Props) {
  const menuClass = classNames(
    'font-tittilium max-w-[200px] font-bold py-12 text-28 text-primary border-borderGray hover:text-primary-invert tabletx:text-18 tabletx:text-white tabletx:border-b-0',
    {
      'border-b': !last,
    }
  );
  return (
    <Container>
      <Link href={link}>
        <p className={menuClass}>{children}</p>
      </Link>
    </Container>
  );
}
