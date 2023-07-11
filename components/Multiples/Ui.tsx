import React from 'react';
import Container from '../ui/container';
import Button from '../ui/button';
import { getMultiples } from '../../lib/api';
import MultipleCard from './MultipleCard';

export default async function MultiplesUi({slug}) {
  let multiples = await getMultiples(slug, true);

  return (
    <Container>
      <h2 className=' text-primary text-center mb-12 tablet:mb-28'>
        Múltiplas
      </h2>
      <div className='flex gap-[50px] justify-center mb-20'>

      {multiples.slice(0, 3).map((card) => {
        return <MultipleCard {...card}></MultipleCard>;
      })}
      </div>
      
      <Button type='inside' link='/multiplas'>Ver Mais</Button>
    </Container>
  );
}
