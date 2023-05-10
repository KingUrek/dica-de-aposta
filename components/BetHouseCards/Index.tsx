import React, { Suspense } from 'react'
import Skeleton from './Skeleton'
import BetHouseCardsUi from './BetHouseCardsUi'

export default function BetHouseCards() {
  return (
    <Suspense fallback={<Skeleton />}>
      {/* @ts-expect-error Async Server Component */}
      <BetHouseCardsUi/>
    </Suspense>
  )
}
