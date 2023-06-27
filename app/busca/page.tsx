'use client';
import React, { useEffect, useState } from 'react';
import Container from '../../components/ui/container';
import { useSearchParams } from 'next/navigation';
import { Search } from '../../lib/api';
import SearchCard from '../../components/SearchCard';

export default function Busca() {
  const [searchItems, setSearchItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const search = searchParams.get('s');
  async function searchData() {
    const searchData = await Search(search);
    setSearchItems(searchData);
    setLoading(false);
  }
  useEffect(() => {
    setLoading(true)
    searchData();
  }, [search]);

  return (
    <Container className=' mt-28 mb-48'>
      <h1 className='text-primary text-40 font-bold font-tittilium mb-16'>
        Resultado de busca
      </h1>
      <p className=''>Você pesquisou por: "{search}"</p>

      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          {searchItems.length ? (
            <>
              {' '}
              <p className=' mb-28'>
                Encontramos ({searchItems.length}) resultados para a sua busca
              </p>
              <div className='flex flex-col gap-12 '>
                  {searchItems.map((item) => {
                  return <SearchCard key={item.id} {...item} />;
                })}
              </div>
            </>
          ) : (
            <p className=' mb-28'>
              Não encontramos nenhum resultado para a sua busca.
            </p>
          )}
        </>
      )}
    </Container>
  );
}
