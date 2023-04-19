import React, { Suspense } from 'react'
import Skeleton from './Skeleton'

export default function BetHouseCards() {
  return (
    <Suspense fallback={<Skeleton/>}>
      <div>Index</div>
    </Suspense>
  )
}
