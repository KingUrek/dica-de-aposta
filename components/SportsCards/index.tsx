import React, { Suspense } from 'react'
import Skeleton from './Loading'
import SportsCards from './SportsCardsUi'

export default function BetHouseCards() {
  return (
    <Suspense fallback={<Skeleton />}>
      {/* @ts-expect-error Async Server Component */}
      <SportsCards/>
    </Suspense>
  )
}
