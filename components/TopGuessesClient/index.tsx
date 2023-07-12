import React, { Suspense } from 'react'
import Loading from './Loading'
import TopGuessesUi from './ui'

type Props = {
  slug?: string;
  hideTitle?: boolean;
}

export default function TopGuesses({slug,hideTitle,...rest}:Props) {
  return (
    <Suspense fallback={<Loading />}>
      <TopGuessesUi slug={slug} hideTitle={hideTitle} {...rest} />
  </Suspense>
  )
}
