'use client';
import React from 'react';
import TipCard from 'components/TopTips/ModalCard';
import Container from 'components/ui/container';

export default function Modal(props) {
  function closeDialog(e) {
    const dialog = document.getElementById('highlightModal');
    if (e.target === dialog) {
      {/* @ts-expect-error */}
      dialog?.close();
    }
  }
  return (
    <dialog
      style={{ padding: 0, border: 0 }}
      id='highlightModal'
      onClick={closeDialog}
      className='backdrop bg-transparent'
    >
      <form method='dialog'>
        <Container>
          <TipCard {...props}></TipCard>
        </Container>
      </form>
    </dialog>
  );
}
