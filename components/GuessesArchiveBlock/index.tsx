import React, { Suspense } from 'react'
import Loading from './loading'
import GuessesArchiveBlockUi from './ui'

type Props = {
  tournament?:object
}

export default function TopGuesses({tournament}:Props) {
  return (
    <Suspense fallback={<Loading />}>
      {/* @ts-expect-error Async Server Component */}
      <GuessesArchiveBlockUi tournament={tournament} />
  </Suspense>
  )
}
