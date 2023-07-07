import React, { Suspense } from 'react'
import Loading from './loading'
import TipsArchiveBlockUi from './ui'

type Props = {
  tournament?:object
}

export default function TipsArchiveBlock({tournament}:Props) {
  return (
    <Suspense fallback={<Loading />}>
      {/* @ts-expect-error Async Server Component */}
      <TipsArchiveBlockUi tournament={tournament} />
  </Suspense>
  )
}
