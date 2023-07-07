import React from 'react';
import { getAllTips } from '../../lib/api';
import TipsCard from 'components/TopTips/Card';
import Button from '../ui/button';

export default async function TipsArchiveBlockUi({ tournament }) {
  const tips = (await getAllTips(tournament.slug, 1, 6)).nodes;
  if (!tips.length) {
    return null;
  }

  return (
    <div className=''>
      <h2 className='text-primary-light text-center mb-12'>
        Dicas {tournament.name}
      </h2>
      <div className='flex gap-6 gap-y-12 flex-wrap justify-center mb-12'>
        {tips.map((guess) => {
          return (
            <TipsCard isHome={false} key={guess.slug} {...guess}></TipsCard>
          );
        })}
      </div>
      <Button type='inside' link={`/dicas/${tournament.slug}`}>
        Ver mais
      </Button>
    </div>
  );
}
