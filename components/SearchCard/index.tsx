import React, { Suspense } from 'react'
import Loading from './loading'
import SeachCardUi from './ui'

export default function SearchCard(props) {
  return (
    <Suspense fallback={<Loading />}>
      <SeachCardUi {...props} />
    </Suspense>
  )
}
