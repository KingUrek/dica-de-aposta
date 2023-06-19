import React, { Suspense } from 'react'
import Loading from './loading'
import TopTipsUi from './ui'

export default function TopTips() {
  return (
    <Suspense fallback={<Loading />}>
      {/* @ts-expect-error Async Server Component */}
    <TopTipsUi/>
  </Suspense>
  )
}
