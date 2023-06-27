import React from 'react';
import Container from '../ui/container';
import Card from './Card';
import { getAllTips } from '../../lib/api';
import Button from '../ui/button';

export default async function TopGuessesUi({ slug }) {
  console.log(slug)
  const data = (await getAllTips()).filter(({ tipEventDatetime, content }) => {
    return new Date(tipEventDatetime) >= new Date();
  });
  return data.length && (
    <Container>
            <h2 className=' text-primary-light mb-12 tablet:mb-[56px] text-center tablet:text-40'>Principais Palpites</h2>
      <div className='gap-7 flex mb-20 justify-center '>
        {data.slice(0, 3).map((item) => {
          return <Card {...item} key={item.databaseId}></Card>;
        })}
      </div>
      <Button type='inside' link="palpites">Ver mais</Button>
    </Container>
  );
}
