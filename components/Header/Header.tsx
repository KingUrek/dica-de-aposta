'use client';

import Image from 'next/image';
import Button from '../ui/button';
import Logo from '../../public/logo.png';
import { useState } from 'react';
import HeaderOption from './HeaderOption';
import classNames from 'classnames';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuOptions = [
    { title: 'Home', link: '/' },
    { title: 'Palpites', link: '/palpites' },
    { title: 'Dicas de Aposta', link: '/dicas-de-aposta' },
    { title: 'Casas de Aposta', link: '/casas-de-aposta' },
  ];
  return (
    <header>
      <div className='bg-primary py-5 px-20 flex justify-between items-center'>
        <Image placeholder='blur' priority src={Logo} alt='logo'></Image>
        <div className='flex gap-[26px] items-center'>
          <Image
            src='/icons/search.svg'
            alt='search icons'
            width={16}
            height={16}
          />
          <Button onClick={() => setIsOpen(!isOpen)}>Menu</Button>
        </div>
      </div>
      <div
        className={classNames('bg-primary/5 max-h-[310px] absolute w-full overflow-hidden transition-all z-50', {
          '!max-h-0': !isOpen,
        })}
      >
        {menuOptions.map((option, index) => (
          <HeaderOption
            key={option.title}
            link={option.link}
            last={index === menuOptions.length - 1}
          >
            {option.title}
          </HeaderOption>
        ))}
      </div>
    </header>
  );
}
