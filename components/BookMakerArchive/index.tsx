'use client';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { getBookmakers } from '../../lib/api';
import LoadMore from './Loadmore';

export default function BookMakerArchive() {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);

  async function loadPage(currentPage: number, perPage = 6) {
    const bookMakers = await getBookmakers(undefined, currentPage, perPage);
    setCards(bookMakers);
    setPage(page + 1);
  }

  useEffect(() => {
    loadPage(1, 6);
  }, []);

  return (
    <>
      <h1 className='font-bold text-28 mb-12 text-center text-primary-desatured'>
        Casas de Aposta
      </h1>
      <div className='flex gap-12 flex-wrap justify-center items-stretch mb-12'>
        {cards.map((bookMaker) => {
         {/* @ts-expect-error */}

          return <Card {...bookMaker}></Card>;
        })}
      </div>
      <div className='mb-28 max-w-[365px] mx-auto w-full flex'>
        <LoadMore loadFunction={() => loadPage(page + 1, 6)}></LoadMore>
      </div>

    </>
  );
}
