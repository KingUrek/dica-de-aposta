import React from 'react'
import { getAllTips } from '../../lib/api'
import GuessCard  from '../TopGuesses/Card'

export default async function GuessesArchiveBlockUi({ tournament }) {
  const guesses = await getAllTips(tournament.slug)
  console.log(guesses)
  if (!guesses.length) {
    return null;
  }
  return (
    <div>
      <h2 className='text-primary-light text-center mb-12'>
        Palpites {tournament.name}
      </h2>
      <div className='flex gap-6'>
        {guesses.map((guess) => {
          return <GuessCard key={guess.slug} {...guess}></GuessCard>
        })}
      </div>
    </div>
  )
}
