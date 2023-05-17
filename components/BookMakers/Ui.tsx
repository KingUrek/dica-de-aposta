import React from 'react';
import Container from '../container';
import Card from './Card';
import { getBookmakers } from '../../lib/api';
import Button from '../ui/button';

export default async function BookMakersUi() {
  const data = await getBookmakers();
  return (
    <Container>
      <h2 className=' text-primary mb-12 text-center'>Casas de Aposta</h2>
      <div className='grid grid-cols-2 gap-x-6 gap-y-12 tablet:grid-cols-3 mb-12 tablet:mb-20'>
        {data.slice(0, 4).map((bookMaker) => {
          return <Card key={bookMaker.databaseId} {...bookMaker}></Card>;
        })}
      </div>
      <Button link="/casas-de-aposta" type='inside'>Ver mais</Button>
    </Container>
  );
}
