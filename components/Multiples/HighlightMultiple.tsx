import React from 'react';
import { getMultiples } from '../../lib/api';
import HighlightMultipleCard from './HighlightMultipleCard';

export default async function HighlightMultiple({ slug = '' }) {
  const multiples = await getMultiples(slug,true);

  return !!multiples.length && <HighlightMultipleCard {...multiples[0]} />;
}
