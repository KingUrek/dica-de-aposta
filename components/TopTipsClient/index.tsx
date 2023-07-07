import React, { Suspense } from 'react'
import Loading from './loading'
import TopTipsClientUi from './ui'

export default function TopTipsClient({slug=''}) {
  return (
    <Suspense fallback={<Loading />}>
      <TopTipsClientUi slug={slug} />
  </Suspense>
  )
}
