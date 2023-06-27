import React from 'react';
import Container from '../ui/container';
import Button from '../ui/button';
import { getMultiples } from '../../lib/api';
import MultipleCard from './MultipleCard';

export default async function MultiplesUi() {
  let multiples = await getMultiples();

  return (
    <Container>
      <h2 className=' text-primary text-center text-28 mb-12'>
        Múltiplas
      </h2>
      <div className='flex gap-[50px] justify-center mb-20'>

      {multiples.slice(0, 4).map((card) => {
        return <MultipleCard {...card}></MultipleCard>;
      })}
      </div>

      <Button type='inside' link='/multiplas'>Ver Mais</Button>
    </Container>
  );
}
