import React from 'react';
import Container from '../ui/container';
import SoccerLogo from '../../public/mock/soccerLogo.png';
//TODO: remover Logo mock
import LogoMock from '../../public/logo.png';
import Image from 'next/image';
import { getHighlightTip } from '../../lib/api';

export default async function HighlightTipUi() {
  const data = await getHighlightTip();
  const { location, teams, tournamentName, bookmakerOdds } = data;
  return (
    <Container>
      <div className='rounded py-18 px-13 gradient-80'>
        <p className='rounded-sm bg-primary text-white text-10 py-2 px-18 font-bold w-fit cursor-pointer'>
          {tournamentName}
        </p>
        <div className='flex flex-col gap-12 mb-6'>
          <div className='flex items-end justify-between mt-18 gap-5'>
            <div className='flex flex-col items-center gap-9'>
              <Image
                width={40}
                height={40}
                alt='league logo'
                src={teams[0].logo}
              />
              <p className=' text-36 text-white font-tittilium font-bold'>
                {teams[0].name}
              </p>
            </div>
            <p className=' text-36 text-white font-tittilium font-bold'>X</p>
            <div className='flex flex-col items-center gap-9'>
              <Image
                width={40}
                height={40}
                alt='league logo'
                src={teams[1].logo}
              />
              <p className=' text-36 text-white font-tittilium font-bold text-end'>
                {teams[1].name}
              </p>
            </div>
          </div>
          <p className=' text-16 font-bold text-white text-center'>
            13 de Fev. de 2023 às 15h30
          </p>
          <p className=' text-16 font-bold text-white text-center'>
            {location}
          </p>
        </div>
        <div className=' flex content-between gap-5 justify-center'>
          {bookmakerOdds.map(({odd}) => {
            return (
              <div className=' h-22 items-center border-2 border-white rounded flex px-2 py-6 w-fit bg-primary gap-3'>
                <Image
                  width={50}
                  height={20}
                  src={LogoMock}
                  alt='logo casa de aposta'
                ></Image>
                <p className=' text-white font-bold text-12 '>{odd}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
