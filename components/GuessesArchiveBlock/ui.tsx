import React from 'react';
import { getAllTips } from '../../lib/api';
import GuessCard from '../TopGuesses/Card';
import Button from '../ui/button';

export default async function GuessesArchiveBlockUi({ tournament }) {
  const guesses = (await getAllTips(tournament.slug, 1, 6)).nodes;
  if (!guesses.length) {
    return null;
  }

  return (
    <div className=''>
      <h2 className='text-primary-light text-center mb-12'>
        Palpites {tournament.name}
      </h2>
      <div className='flex gap-6 gap-y-12 flex-wrap justify-center mb-12'>
        {guesses.map((guess) => {
          return (
            <GuessCard isHome={false} key={guess.slug} {...guess}></GuessCard>
          );
        })}
      </div>
      <Button type='inside' link={`/palpites/${tournament.slug}`}>
        Ver mais
      </Button>
    </div>
  );
}
