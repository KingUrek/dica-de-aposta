import React from 'react';
import Container from '../container';
import Card from './Card';
import { getSportCarousel } from '../../lib/api';

export default async function SportsCards() {
  const data = await getSportCarousel();
  console.log(data);
  return (
    <Container>
      <div className=' flex gap-12'>
        {data.map(({ name, sportIcon, sportImage }) => (
          <Card key={name} icon={sportIcon} bgImage={sportImage}>
            {name}
          </Card>
        ))}
      </div>
    </Container>
  );
}
