'use client';
import React from 'react';
import Button from '../ui/button';

export default function ModalButton({modalId}:{modalId:string}) {
  function toggleModal() {
    const modal = document.getElementById(modalId);
    {/* @ts-expect-error */}
    modal?.showModal();
  }
  return (
      <Button type='modal' onClick={toggleModal}>Ver Dica</Button>
  );
}
