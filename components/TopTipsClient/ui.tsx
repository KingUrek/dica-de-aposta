'use client';
import React, { useEffect, useState } from 'react';
import Container from '../ui/container';
import Card from 'components/TopTips/Card';
import { getAllTips } from '../../lib/api';
import Button from '../ui/button';
import { PageInfo } from '../../lib/types';
import LoadMore from 'components/ui/Loadmore';
import PortelaTips from 'components/PortelaTipsClient';
import Loading from './loading';

export default function TopTipsClientUi({ slug = '' }) {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState<Partial<PageInfo>>({
    hasNextPage: false,
  });

  async function loadPage(currentPage: number, perPage = 6) {
    const tips = await getAllTips(slug, currentPage, perPage);
    setCards(tips.nodes);
    setPageInfo(tips.pageInfo);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadPage(1, 8);
  }, []);

  return (
    <Container>
      <h2 className=' text-primary-dark mb-12 tablet:mb-[56px] text-center tablet:text-40'>
        Principais Dicas
      </h2>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <div className='gap-12 flex flex-col mb-12 '>
            {cards.map((item, index) => {
              return (
                <>
                  {/* @ts-expect-error */}
                  <Card key={item.title} {...item}></Card>
                  {(index === 3 ||
                    (cards.length < 4 && index === cards.length - 1)) && (
                    <PortelaTips></PortelaTips>
                  )}
                </>
              )
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
  );
}
