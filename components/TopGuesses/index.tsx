import React, { Suspense } from 'react'
import Loading from './loading'
import TopGuessesUi from './ui'

export default function TopGuesses({ slug }) {
  return (
    <Suspense fallback={<Loading />}>
      {/* @ts-expect-error Async Server Component */}
      <TopGuessesUi slug={slug} />
  </Suspense>
  )
}
