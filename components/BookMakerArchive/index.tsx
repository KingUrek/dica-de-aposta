'use client';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { getBookmakers } from '../../lib/api';
import LoadMore from '../ui/Loadmore';
import Loading from './Loading';
import { PageInfo } from '../../lib/types';

export default function BookMakerArchive() {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState<Partial<PageInfo>>({hasNextPage:false})

  async function loadPage(currentPage: number, perPage = 6) {
    const bookMakers = await getBookmakers(undefined, currentPage, perPage);
    setCards(bookMakers.nodes);
    setPageInfo(bookMakers.pageInfo)
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadPage(1, 6);
  }, []);

  return (
    <>
      <h1 className='mb-12 tablet:mb-28 text-center text-primary-desatured'>
        Casas de Aposta
      </h1>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <div className='flex gap-12 tablet:gap-20 flex-wrap justify-center items-stretch mb-12 tablet:mb-20'>
            {cards.map((bookMaker) => {
              {/* @ts-expect-error */}
              return <Card {...bookMaker}></Card>;
            })}
          </div>
          <div className='mb-28 max-w-[365px] mx-auto w-full flex'>
            <LoadMore hasNextPage={pageInfo.hasNextPage || false} loadFunction={() => loadPage(page + 1, 6)}></LoadMore>
          </div>
        </>
      )}
    </>
  );
}
