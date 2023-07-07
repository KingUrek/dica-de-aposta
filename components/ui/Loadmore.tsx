'use client';
import React, { useState } from 'react';
import cn from 'classnames';

type Props = {
  loadFunction: () => Promise<void>;
  children?: React.ReactNode;
  hasNextPage: boolean;
};

export default function LoadMore({
  loadFunction,
  children,
  hasNextPage,
}: Props) {
  const [loading, setLoading] = useState(false);
  async function load() {
    setLoading(true);
    await loadFunction();
    setLoading(false);
  }

  function getText() {
    if (loading) {
      return 'Carregando...';
    }
    if (!hasNextPage) {
      return 'Não há mais páginas';
    }
    return children || 'Carregar Mais';
  }
  return (
    <button
      disabled={loading || !hasNextPage}
      className={cn(
        'text-16 tablet:text-20 text-primary-gray rounded py-8 tablet:py-12 text-center font-bold border-primary-gray border-2 w-full tabletp:max-w-[300px] m-auto',
        {
          'animate-pulse': loading,
          'opacity-30': !hasNextPage,
        }
      )}
      onClick={load}
    >
      {getText()}
    </button>
  );
}
