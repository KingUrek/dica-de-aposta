import React from 'react'
import { getMultiples } from '../../lib/api';
import MultipleCard from './MultipleCard';

export default async function HighlightMultiple() {
  const multiples = await getMultiples();

  return (
    <MultipleCard {...multiples[0]}/>
  )
}
  