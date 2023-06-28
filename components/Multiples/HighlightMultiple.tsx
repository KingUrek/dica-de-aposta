import React from 'react'
import { getMultiples } from '../../lib/api';
import MultipleCard from './MultipleCard';

export default async function HighlightMultiple({slug=''}) {
  const multiples = await getMultiples(slug);

  return !!multiples.length && (
    <MultipleCard {...multiples[0]}/>
  )
}
  