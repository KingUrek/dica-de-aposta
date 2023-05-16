import React, { Suspense } from 'react'
import Skeleton from './Loading'
import BestBookmakerUi from './Ui'

export default function BestBookmaker() {
  return (
    <Suspense fallback={<Skeleton />}>
      {/* @ts-expect-error Async Server Component */}
      <BestBookmakerUi/>
    </Suspense>
  )
}
