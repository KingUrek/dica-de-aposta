import React from 'react';
import Container from '../ui/container';
import Card from './Card';
import { getSportCarousel } from '../../lib/api';
import cn from 'classnames';


export default async function SportsCards() {
  let data = await getSportCarousel();
  data = [...data, ...data]
  const isSmall = data.length >= 4;

  return (
    <div className={cn('flex ', {
      'gap-4': isSmall,
      'gap-6':!isSmall
      })}>
        {data.slice(0,4).map(({ name, sportIcon, sportImage }) => (
          <Card key={name} icon={sportIcon} bgImage={sportImage} isSmall={isSmall}>
            {name}
          </Card>
        ))}
      </div>

  );
}
