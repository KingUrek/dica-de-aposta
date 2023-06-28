import React, { Suspense } from 'react'
import Loading from './loading'
import TopGuessesUi from './ui'

type Props = {
  slug?:string
}

export default function TopGuesses({slug}:Props) {
  return (
    <Suspense fallback={<Loading />}>
      {/* @ts-expect-error Async Server Component */}
      <TopGuessesUi slug={slug} />
  </Suspense>
  )
}
