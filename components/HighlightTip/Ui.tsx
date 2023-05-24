import React from 'react';
import Container from '../container';
import SoccerLogo from '../../public/mock/soccerLogo.png';
//TODO: remover Logo mock
import LogoMock from '../../public/logo.png';
import Image from 'next/image';

export default async function HighlightTipUi() {
  return (
    <Container>
      <div className='rounded py-18 px-13 gradient-80'>
        <p className='rounded-sm bg-primary text-white text-10 py-2 px-18 font-bold w-fit cursor-pointer'>
          Liga Europa
        </p>
        <div className='flex flex-col gap-12 mb-6'>
          <div className='flex items-end justify-between mt-18'>
            <div className='flex flex-col items-center gap-9'>
              <Image
                width={40}
                height={40}
                alt='league logo'
                src={SoccerLogo}
              />
              <p className=' text-36 text-white font-tittilium font-bold'>
                Islândia
              </p>
            </div>
            <p className=' text-36 text-white font-tittilium font-bold'>X</p>
            <div className='flex flex-col items-center gap-9'>
              <Image
                width={40}
                height={40}
                alt='league logo'
                src={SoccerLogo}
              />
              <p className=' text-36 text-white font-tittilium font-bold'>
                Islândia
              </p>
            </div>
          </div>
          <p className=' text-16 font-bold text-white text-center'>
            13 de Fev. de 2023 às 15h30
          </p>
          <p className=' text-16 font-bold text-white text-center'>
            Camp Nou Stadium
          </p>
        </div>
        <div className=' flex content-between'>
          {[1, 1, 1].map(() => {
            return (
              <div className=' h-22 items-center border-2 border-white rounded flex px-2 py-6 w-fit bg-primary gap-3'>
                <Image
                  width={50}
                  height={20}
                  src={LogoMock}
                  alt='logo casa de aposta'
                ></Image>
                <p className=' text-white font-bold text-12 '>2.05</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
