'use client';
import React, { useEffect, useState } from 'react';
import Container from '../ui/container';
import Card from './Card';
import { getAllTips } from '../../lib/api';
import Button from '../ui/button';
import { PageInfo } from '../../lib/types';
import LoadMore from 'components/ui/Loadmore';
import Loading from './Loading';

type Props = {
  slug?: string;
  isArchive?: boolean;
};

export default function TopGuessesUi({ slug, isArchive = false }: Props) {
  // const data = (await getAllTips(slug)).nodes.filter(
  //   ({ tipEventDatetime, content, slug }) => {
  //     // return new Date(tipEventDatetime) >= new Date();
  //     return true;
  //   }
  // );

  // const data = (await getAllTips(slug)).nodes.filter(({ tipEventDatetime }) => {
  //   return new Date(tipEventDatetime) >= new Date();
  // });

  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState<Partial<PageInfo>>({
    hasNextPage: false,
  });

  async function loadPage(currentPage: number, perPage = 6) {
    const tips = await getAllTips(slug, currentPage, perPage);
    console.log(tips);
    setCards(tips.nodes);
    setPageInfo(tips.pageInfo);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadPage(1, 3);
  }, []);

  return (
    (
      <Container>
        <h2 className=' text-primary-light mb-12 tablet:mb-[56px] text-center tablet:text-40'>
          Principais Palpites
        </h2>
        {loading ? (
          <Loading></Loading>
        ) : (
          <>
            <div className='gap-7 flex flex-wrap mb-20 justify-center '>
              {cards.map((item) => {
                /* @ts-expect-error */
                return <Card {...item} key={item.databaseId}></Card>;
              })}
            </div>
            <div className='mb-28 max-w-[365px] mx-auto w-full flex'>
              <LoadMore
                hasNextPage={pageInfo.hasNextPage || false}
                loadFunction={() => loadPage(page + 1, 6)}
              ></LoadMore>
            </div>
          </>
        )}
      </Container>
    )
  );
}
