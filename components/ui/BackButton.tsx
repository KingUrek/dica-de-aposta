'use client'
import React from 'react'
import BackArrow from 'public/icons/BackArrow.svg';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter()
  return (
    <p
      className='text-16 font-bold text-primary-gray underline flex gap-6 items-center mt-9 cursor-pointer'
      onClick={() => router.back()}
  >
    <BackArrow></BackArrow>Voltar
    </p>

  )
}
