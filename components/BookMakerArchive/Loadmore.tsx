import React from 'react'

type Props = {
  loadFunction: () => void,
  children?:React.ReactNode
}

export default function LoadMore({loadFunction,children}:Props) {
  return (
    <button className='text-16 tablet:text-20 text-primary-gray rounded py-8 tablet:py-12 text-center font-bold border-primary-gray border-2 w-full tabletp:max-w-[300px] m-auto' onClick={loadFunction}>{children || 'Carregar Mais'}</button>
  )
}
