'use client';
import React, { useEffect, useState } from 'react';
import Container from '../../components/ui/container';
import { useSearchParams } from 'next/navigation';
import { search } from '../../lib/api';
import SearchCard from '../../components/SearchCard';
import Header from '../../components/Header/Header';

export default function Busca() {
  const [searchItems, setSearchItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const searchParam = searchParams.get('s');
  //TODO: Refatorar a paginação da busca. Hoje ela não é realmente paginada, só vai multiplicando a quantidade que busca. Mudar para buscar sempre 6

  async function searchData() {
    let searchData = await search(searchParam);
    searchData = searchData.filter(({ node }) => node.content);
    setSearchItems(searchData);
    setLoading(false);
  }
  useEffect(() => {
    setLoading(true);
    searchData();
  }, [searchParam]);

  return (
    <>
      <Header></Header>
      <Container className=' mt-28 mb-48 flex-grow'>
        <h1 className='text-primary text-28 tablet:text-40 font-bold font-tittilium mb-16'>
          Resultado de busca
        </h1>
        <p className='font-14 tablet:font-16 text-primary-gray'>
          Você pesquisou por: "{searchParam}"
        </p>

        {loading ? (
          <div className='flex flex-col gap-12 mt-22 '>
            {[1, 2, 3].map((key) => {
              return (
                <div
                  key={key}
                  className='rounded animate-pulse bg-gray-dark h-[200px] w-full pt-5'
                ></div>
              );
            })}
          </div>
        ) : (
          <>
            {searchItems.length ? (
              <>
                {' '}
                <p className='font-14 tablet:font-16 text-primary-gray mb-28'>
                  Encontramos ({searchItems.length}) resultados para a sua busca
                </p>
                <div className='flex flex-col gap-12 '>
                  {searchItems.map((item) => {
                    {
                      /* @ts-expect-error */
                    }
                    return <SearchCard key={item.id} {...item} />;
                  })}
                </div>
              </>
            ) : (
              <p className='font-14 tablet:font-16 text-primary-gray mb-28'>
                Não encontramos nenhum resultado para a sua busca.
              </p>
            )}
          </>
        )}
      </Container>
    </>
  );
}
