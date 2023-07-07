'use client'
import React, { useEffect, useState } from 'react';
import Container from '../ui/container';
import Card from './Card';
import { getAllTips } from '../../lib/api';
import Button from '../ui/button';
import { PageInfo } from '../../lib/types';

export default async function TopTipsUi({slug=''}) {
  const data = (await getAllTips(slug)).nodes.filter(({ tipEventDatetime }) => {
    return new Date(tipEventDatetime) >= new Date();
  });

  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState<Partial<PageInfo>>({hasNextPage:false})

  async function loadPage(currentPage: number, perPage = 6) {
    const tips = await getAllTips(undefined, currentPage, perPage);
    console.log(tips)
    setCards(tips.nodes);
    setPageInfo(tips.pageInfo)
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadPage(1, 6);
  }, []);
  
  
  return (
    <Container>
      <h2 className=' text-primary-dark mb-12 tablet:mb-[56px] text-center tablet:text-40'>
        Principais Dicas
      </h2>
      <div className='gap-12 flex flex-col mb-12 '>
        {data.slice(0,4).map((item) => {
          return <Card key={item.title} {...item}></Card>;
        })}
      </div>
      <div>
      <Button link="/dicas" type='inside'>Ver mais</Button>

      </div>
    </Container>
  );
}
