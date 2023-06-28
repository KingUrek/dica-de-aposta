import React, { Suspense } from 'react'
import Loading from './Loading'
import HighlightTipUi from './Ui'

export default function HighlightTip({slug=''}) {
  return (
    <Suspense fallback={<Loading />}>
      {/* @ts-expect-error Async Server Component */}
      <HighlightTipUi slug={slug}/>
    </Suspense>
  )
}
