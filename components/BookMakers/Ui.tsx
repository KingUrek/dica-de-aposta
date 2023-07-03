import React from 'react';
import Container from '../ui/container';
import Card from './Card';
import { getBookmakers } from '../../lib/api';
import Button from '../ui/button';

export default async function BookMakersUi() {
  const data = (await getBookmakers()).nodes;
  return (
    <Container>
      <h2 className=' text-primary-desatured mb-12 tablet:mb-[56px] text-center tablet:text-40'>Casas de Aposta</h2>
      <div className='grid grid-cols-2 gap-x-6 gap-y-12 tablet:gap-x-12 tablet:grid-cols-3 mb-12 tablet:mb-20 desktop:flex desktop:justify-between'>
        {data.slice(0, 4).map((bookMaker) => {
          return <Card key={bookMaker.databaseId} {...bookMaker}></Card>;
        })}
      </div>
      <Button link="/casas-de-aposta" type='inside'>Ver mais</Button>
    </Container>
  );
}
