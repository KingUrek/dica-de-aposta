'use client';

import Button from '../ui/button';
import CloseIcon from '../../public/icons/CloseMobile.svg';
import CloseMenuMobile from '../../public/icons/CloseMenuMobile.png';
import Container from '../ui/container';
import HeaderOption from './HeaderOption';
import HeaderOptionDesktop from './HeaderOptionDesktop';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import Search from './Search';
import SearchIcon from '../../public/icons/search.svg';
import classNames from 'classnames';
import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import LeagueSubmenu from './LeagueSubmenu';
import Link from 'next/link';

type Props = {
  slug?: string,
  tournaments?:any[]
}

export default function Header({ slug = '', tournaments }:Props) {
  function getSubmenus() {
    if (slug && tournaments) {
      
      let currentTournament = tournaments.find((tour) => {
        return tour.slug === slug;
      });
      if (currentTournament?.parent) {
        currentTournament = tournaments.find((tour) => {
          return tour.slug === currentTournament.parent.node.slug;
        });
      }
      if (
        currentTournament?.children &&
        currentTournament?.children.nodes.length >= 2
      ) {
        const submenus = currentTournament.children.nodes;
        return submenus;
      }
    }
    return null
  }

  const [isOpen, setIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const submenuOptions = getSubmenus();
  const menuOptions = [
    { title: 'Home', link: '/' },
    { title: 'Palpites', link: '/palpites' },
    { title: 'Dicas de Aposta', link: '/dicas-de-aposta' },
    { title: 'Casas de Aposta', link: '/casas-de-aposta' },
  ];
  return (
    <header className='bg-primary'>
      <Container id='header'>
        <div className=' py-5 tabletx:py-11 flex justify-between items-center gap-10 tabletx:justify-normal tabletx:gap-[48px] relative '>
          {!searchIsOpen && (
            <Link className=' shrink-0' href={'/'}>
            <Image priority src={Logo} alt='logo'></Image>
            </Link>
          )}
          <div className={classNames('flex gap-[26px] items-center tabletx:hidden w-full ml-auto justify-end', {
            '!gap-6':searchIsOpen
          })}>
            {searchIsOpen && (
              <>
                <input
                  className='bg-transparent rounded py-6 text-white text-10 pl-16 border-white border-2 placeholder:text-white w-full h-19'
                  placeholder='Digite aqui sua busca'
                ></input>
                <CloseIcon
                  onClick={() => setSearchIsOpen(false)}
                  className='absolute right-[125px]'
                ></CloseIcon>
              </>
            )}

            {isOpen ? (
              <Image
                onClick={() => setIsOpen(!isOpen)}
                src={CloseMenuMobile}
                alt='close icon'
              />
            ) : (
              <>
                <SearchIcon
                  onClick={() => setSearchIsOpen(!searchIsOpen)}
                  className={classNames('text-white', {
                    'absolute left-5': searchIsOpen,
                  })}
                ></SearchIcon>
                <Button className=' leading-6' onClick={() => setIsOpen(!isOpen)}>MENU</Button>
              </>
            )}
          </div>
          <div className='hidden tabletx:flex gap-10 tabletg:gap-16 '>
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
        {submenuOptions?.length && <LeagueSubmenu options={submenuOptions}></LeagueSubmenu>}
      </Container>

      <div
        className={classNames(
          'bg-[#f2f9fa] max-h-[370px] absolute w-full tabletx:hidden overflow-hidden transition-all z-50',
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
