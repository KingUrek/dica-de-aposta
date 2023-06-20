import React, { Suspense } from 'react'
import Loading from './Loading'
import MultiplesUi from './Ui'

export default function Multiples() {
  return (
    <Suspense fallback={<Loading />}>
    {/* @ts-expect-error Async Server Component */}
    <MultiplesUi/>
  </Suspense>
  )
}
