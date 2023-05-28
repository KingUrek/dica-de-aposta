import React from 'react'
import Container from '../ui/container'
import classNames from 'classnames'

export default function Skeleton() {
  return (
    <div className=' bg-azure'>
    <Container className='bg-azure py-12 '>
      <div className='flex gap-4'>
        <div
          className={classNames(
            ' border-primary-gray border-2 bg-primary-gray animate-pulse relative rounded py-2 px-2 grid place-items-center w-[64px] h-[32px]',
          )}
        >
          </div>
          <div
          className={classNames(
            ' border-primary-gray border-2 bg-primary-gray animate-pulse relative rounded py-2 px-2 grid place-items-center w-[64px] h-[32px]',
          )}
        >
          </div>
          <div
          className={classNames(
            ' border-primary-gray border-2 bg-primary-gray animate-pulse relative rounded py-2 px-2 grid place-items-center w-[64px] h-[32px]',
          )}
        >
          </div>
          <div
          className={classNames(
            ' border-primary-gray border-2 bg-primary-gray animate-pulse relative rounded py-2 px-2 grid place-items-center w-[64px] h-[32px]',
          )}
        >
        </div>
      </div>
    </Container>
  </div>
  )
}
