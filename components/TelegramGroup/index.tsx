import React, { Suspense } from 'react'
import FooterSkeleton from '../Footer/Skeleteon'
import TelegramGroupUi from './ui'

export default function TelegramGroup() {
  return (
    <Suspense fallback={<FooterSkeleton />}>
      {/* @ts-expect-error Async Server Component */}
    <TelegramGroupUi/>
  </Suspense>
  )
}
