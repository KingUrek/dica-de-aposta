import Header from 'components/Header/Header';
import InnerHtmlComponent from 'components/InnerHtmlComponent';
import { getTipBySlug } from 'lib/api';
import React from 'react';
import { format, parseISO } from 'date-fns';
import Container from 'components/ui/container';
import Image from 'next/image';
import BackButton from 'components/ui/BackButton';
import SingleHighlightTip from 'components/SingleHighlightTip';
import Timer from 'components/TopTips/Timer';
import Button from 'components/ui/button';
import TopGuesses from 'components/TopGuessesClient';

export default async function Page({ params }) {
  const data = await getTipBySlug(params?.slug);
  const dateFormat = "dd 'de' MMM. 'de' YYY 'às' k'h'mm";
  return (
    <>
      <Header />
      <Container>
        <BackButton></BackButton>
        <div className='rounded-sm text-10 text-white font-bold bg-primary-light min-w-[130px] text-center w-fit py-1 px-9 mt-16 mb-5'>
          {data?.tipTournaments[0]?.name}
        </div>
        <SingleHighlightTip data={data}></SingleHighlightTip>
        <div className='border-b py-5 mb-12 mt-28 border-borderGray w-[80%] flex flex-col gap-4'>
          <time className='text-14 text-primary-gray'>
            {' '}
            {format(parseISO(data.modified), dateFormat)}
          </time>
          <div className='flex gap-3 items-center'>
            <Image
              className='rounded border border-primary'
              alt='imagem do author'
              src={data?.author?.node.avatar.url}
              width={20}
              height={20}
            />
            <p className='text-14 text-primary-gray '>
              Por {data?.author?.node.name}
            </p>
          </div>
        </div>
        <h1 className='text-primary-light text-28 font-bold mb-12'>
          {data?.title}
        </h1>
        <article className='mb-28 single-content'>
          <InnerHtmlComponent>{data?.content}</InnerHtmlComponent>
        </article>

        <div className='rounded bg-primary-light flex flex-col items-center justify-center px-11 py-13 gap-12 mb-28'>
          <p className='text-white font-bold text-28 text-center'>
            Tempo restante para apostar!
          </p>
          <Timer style='single' date={data?.tipEventDatetime}></Timer>
          <div className='w-full'>
            <Button type='outside' link='/'>
              Aposta agora
            </Button>
          </div>
        </div>
        <div>
          <h2 className='text-primary-light text-28 font-bold mb-12 text-center' >Outros palpites</h2>
        </div>
      </Container>
            <TopGuesses hideTitle={true}></TopGuesses>
    </>
  );
}
