import React from 'react'

export default function Loading() {
  return (
    <div className='flex flex-col gap-12 justify-center items-stretch mb-12 tablet:mb-20'>
      <div className='rounded animate-pulse bg-gray w-full h-[200px] pt-5' />
      <div className='rounded animate-pulse bg-gray w-full h-[200px] pt-5' />
      <div className='rounded animate-pulse bg-gray w-full h-[200px] pt-5' />

  </div>
  )
}
