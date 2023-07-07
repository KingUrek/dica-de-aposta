import React from 'react'

export default function Loading() {
  return (
    <div className='flex gap-12 tablet:gap-20 flex-wrap justify-center items-stretch mb-12 tablet:mb-20'>
      <div className='rounded animate-pulse bg-gray w-full max-w-[365px] desktop:w-[365px] h-[375px] pt-5' />
      <div className='rounded animate-pulse bg-gray w-full max-w-[365px] desktop:w-[365px] h-[375px] pt-5' />
      <div className='rounded animate-pulse bg-gray w-full max-w-[365px] desktop:w-[365px] h-[375px] pt-5' />

  </div>
  )
}
