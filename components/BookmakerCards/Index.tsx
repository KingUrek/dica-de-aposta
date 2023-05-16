import React, { Suspense } from 'react'
import Skeleton from './Skeleton'
import BookmakerCardsUi from './BookmakerCardsUi'

export default function BetHouseCards() {
  return (
    <Suspense fallback={<Skeleton />}>
      {/* @ts-expect-error Async Server Component */}
      <BookmakerCardsUi/>
    </Suspense>
  )
}
