import React, { Suspense } from 'react'
import Loading from './Loading'
import PortelaTipsUi from './Ui'

export default function PortelaTips() {
  return (
    <Suspense fallback={<Loading />}>
    {/* @ts-expect-error Async Server Component */}
    <PortelaTipsUi/>
  </Suspense>
  )
}
