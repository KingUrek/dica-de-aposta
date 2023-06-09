import React from 'react';
import Container from '../ui/container';
import Card from './Card';
import { getSportCarousel } from '../../lib/api';
import cn from 'classnames';


export default async function SportsCards() {
  const data = await getSportCarousel();
  const isSmall = data.length >= 4;

  return (
    <div className={cn('flex ', {
      'gap-4': isSmall,
      'gap-6':!isSmall
      })}>
        {data.slice(0,4).map(({ name, sportIcon, sportImage, slug }) => (
          <Card key={name} icon={sportIcon} bgImage={sportImage} slug={slug} isSmall={isSmall}>
            {name}
          </Card>
        ))}
      </div>

  );
}
