import React from 'react';
import Container from '../ui/container';
import Card from './Card';
import { getSportCarousel } from '../../lib/api';

export default async function SportsCards() {
  const data = await getSportCarousel();
  return (
      <div className=' flex gap-6'>
        {data.slice(0,3).map(({ name, sportIcon, sportImage }) => (
          <Card key={name} icon={sportIcon} bgImage={sportImage}>
            {name}
          </Card>
        ))}
      </div>

  );
}
