import { Suspense } from 'react'
import FooterUi from './footer'
import FooterSkeleton from './Skeleteon'

export default function Footer() {
  return (
    <Suspense fallback={<FooterSkeleton/>}>
      <FooterUi/>
    </Suspense>

  )
}
