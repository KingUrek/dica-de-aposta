import React, { Suspense } from 'react'
import Skeleton from './Skeleton'
import BetHouseCardsUi from './BetHouseCardsUi'

export default function BetHouseCards() {
  return (
    <Suspense fallback={<Skeleton />}>
      <BetHouseCardsUi/>
    </Suspense>
  )
}
