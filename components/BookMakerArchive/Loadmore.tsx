'use client';
import React, { useState } from 'react';
import cn from 'classnames';

type Props = {
  loadFunction: () => Promise<void>;
  children?: React.ReactNode;
};

export default function LoadMore({ loadFunction, children }: Props) {
  const [loading, setLoading] = useState(false);
  async function load() {
    setLoading(true);
    await loadFunction();
    setLoading(false);
  }
  return (
    <button
      disabled={loading}
      className={cn(
        'text-16 tablet:text-20 text-primary-gray rounded py-8 tablet:py-12 text-center font-bold border-primary-gray border-2 w-full tabletp:max-w-[300px] m-auto',
        {
          'animate-pulse': loading,
        }
      )}
      onClick={load}
    >
      {loading ? 'Carregando...' : children || 'Carregar Mais'}
    </button>
  );
}
