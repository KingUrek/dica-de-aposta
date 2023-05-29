'use client';

import Image from 'next/image';
import Button from '../ui/button';
import Logo from '../../public/logo.png';
import { useState } from 'react';
import HeaderOption from './HeaderOption';
import classNames from 'classnames';
import HeaderOptionDesktop from './HeaderOptionDesktop';
import Search from './Search';
import SearchIcon from '../../public/icons/search.svg';
import Container from '../ui/container';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuOptions = [
    { title: 'Home', link: '/' },
    { title: 'Palpites', link: '/palpites' },
    { title: 'Dicas de Aposta', link: '/dicas-de-aposta' },
    { title: 'Casas de Aposta', link: '/casas-de-aposta' },
  ];
  return (
    <header className='bg-primary'>
      <Container id="header">
        <div  className=' py-5 tablet:py-11 flex justify-between items-center gap-10 tablet:justify-normal tablet:gap-[48px] '>
          <Image placeholder='blur' priority src={Logo} alt='logo'></Image>
          <div className='flex gap-[26px] items-center tablet:hidden'>
            <SearchIcon className='text-white'></SearchIcon>
            <Button onClick={() => setIsOpen(!isOpen)}>Menu</Button>
          </div>
          <div className='hidden tablet:flex gap-[34px]'>
            {menuOptions.map((option, index) => (
              <HeaderOptionDesktop
                key={option.title}
                link={option.link}
                last={index === menuOptions.length - 1}
              >
                {option.title}
              </HeaderOptionDesktop>
            ))}
          </div>
          <Search></Search>
        </div>
      </Container>
      <div
        className={classNames(
          'bg-primary/5 max-h-[310px] absolute w-full tablet:hidden overflow-hidden transition-all z-50',
          {
            '!max-h-0': !isOpen,
          }
        )}
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
