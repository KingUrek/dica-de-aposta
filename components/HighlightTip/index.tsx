import React, { Suspense } from 'react'
import Loading from './Loading'
import HighlightTipUi from './Ui'

export default function HighlightTip() {
  return (
    <Suspense fallback={<Loading />}>
      {/* @ts-expect-error Async Server Component */}
      <HighlightTipUi/>
    </Suspense>
  )
}
