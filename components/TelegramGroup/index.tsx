import Container from '../container';
import React from 'react'
import Button from '../ui/button';
import TelegramBackground from '../../public/telegram-background.png'
import Image from 'next/image';

export default function TelegramGroup() {
  return (
    <Container className='h-[240px] relative my-[56px] bg-[url("/public")'>
      <p className=' relative px-14 py-[58px] w-[270px] mb-17 text-28 z-10 text-primary font-bold'>Faça parte do nosso grupo do Telegram!</p>
      <Button link="telegram">Quero entrar</Button>
    </Container>
  )
}
