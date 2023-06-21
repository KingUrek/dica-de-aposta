'use client';
import React from 'react';
import Button from '../ui/button';

export default function ModalButton() {
  function toggleModal() {
    const modal = document.getElementById('highlightModal');
    modal?.showModal();
  }
  return (
    <div className='w-[144px] tablet:w-[222px] h-[42px]'>
      <Button type='modal' onClick={toggleModal}>Ver Dica</Button>
    </div>
  );
}
