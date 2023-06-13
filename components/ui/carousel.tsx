"use client"
import React, { useEffect, ReactNode, useState } from 'react'

type Props = {
  children: ReactNode,


}

export default function Carousel({ children }: Props) {
  const [padding, setPadding] = useState(0)
  function getPadding() {
    const header = document.getElementById('header')
    if (!header) {
      return null
    }
    const blockWidth = header.clientWidth
    setPadding((window.innerWidth - blockWidth) / 2)
  }
  useEffect(() => {
    getPadding()
  
  }, [])
  return (
    <div style={{paddingLeft:padding}} className='flex gap-6 overflow-scroll pl-20 pb-10'>{children}</div>
  )
}
