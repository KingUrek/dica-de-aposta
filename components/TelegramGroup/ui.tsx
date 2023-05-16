import Container from '../container';
import React from 'react';
import Button from '../ui/button';
import TelegramBackground from '../../public/telegram-background.png';
import Image from 'next/image';
import { getTelegramLink } from '../../lib/api';

export default async function TelegramGroupUi() {
  const {urlTelegram} = await getTelegramLink();
  return (
    <Container className='relative my-[56px] max-w-[425px] '>
      <div className='overflow-hidden rounded relative'>
        <div className='w-full h-full absolute top-0 left-0'>
          <Image src={TelegramBackground} alt='fundo telegram' />
        </div>

        <p className='relative px-14 py-[40px] w-[270px] mb-17 text-28 z-10 text-primary font-bold'>
          Faça parte do nosso grupo do Telegram!
        </p>
        <div className='z-10 relative mb-12 mx-12'>
          <Button link={urlTelegram} className={'z-10'}>
            Quero entrar
          </Button>
        </div>
      </div>
    </Container>
  );
}
