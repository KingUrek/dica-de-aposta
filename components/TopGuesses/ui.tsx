import React from 'react';
import Container from '../ui/container';
import Card from './Card';
import { getAllTips } from '../../lib/api';
import Button from '../ui/button';

type Props = {
  slug?: string;
  isArchive?: boolean;
};

export default async function TopGuessesUi({ slug, isArchive=false }: Props) {
  const data = (await getAllTips(slug)).filter(
    ({ tipEventDatetime, content, slug }) => {
      // return new Date(tipEventDatetime) >= new Date();
      return true;
    }
  );
  return (
    !!data.length && (
      <Container>
        <h2 className=' text-primary-light mb-12 tablet:mb-[56px] text-center tablet:text-40'>
          Principais Palpites
        </h2>
        <div className='gap-7 flex mb-20 justify-center '>
          {data.slice(0, 3).map((item) => {
            return <Card {...item} key={item.databaseId}></Card>;
          })}
        </div>
        <Button type='inside' link='palpites'>
          Ver mais
        </Button>
      </Container>
    )
  );
}
