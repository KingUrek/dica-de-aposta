import Container from '../ui/container';
import React from 'react';
import Button from '../ui/button';
import TelegramBackground from '../../public/telegram-background.png';
import TelegramSend from '../../public/icons/TelegramSend.svg';

import Image from 'next/image';
import { getTelegramLink } from '../../lib/api';

export default async function TelegramGroupUi() {
  const {urlTelegram} = await getTelegramLink();
  return (
      <div className='overflow-hidden rounded relative'>
        <div className='w-full h-full absolute top-0 left-0'>
          <Image style={{objectFit:'cover'}} fill src={TelegramBackground} alt='fundo telegram' />
        </div>

        <p className='relative px-14 py-[40px] w-[270px] mb-17 text-28 z-10 text-primary font-bold tablet:w-[299px] font-tittilium tablet:pb-16 tablet:pt-20'>
          Faça parte do nosso grupo do Telegram!
        </p>
      <div className='z-10 relative mb-12 mx-12'>
        <div className='max-w-[298px]'>
          <Button link={urlTelegram} className={'z-10'}>
            <div className='flex items-center justify-center gap-5'>
            Quero entrar <TelegramSend></TelegramSend>
            </div>

          </Button>
        </div>

        </div>
      </div>
  );
}
