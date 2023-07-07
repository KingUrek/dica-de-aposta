import React, { Suspense } from 'react'
import Loading from './Loading'
import TopGuessesUi from './ui'

type Props = {
  slug?:string
}

export default function TopGuesses({slug}:Props) {
  return (
    <Suspense fallback={<Loading />}>
      <TopGuessesUi slug={slug} />
  </Suspense>
  )
}
