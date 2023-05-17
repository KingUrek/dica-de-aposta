import React, { Suspense } from 'react'
import Skeleton from './Loading'
import BookMakers from './Ui'

export default function BestBookmaker() {
  return (
    <Suspense fallback={<Skeleton />}>
      {/* @ts-expect-error Async Server Component */}
      <BookMakers/>
    </Suspense>
  )
}
