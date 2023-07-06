'use client';
import { useState } from 'react';
import SearchIcon from '../../public/icons/searchBig.svg';
import ClearIcon from '../../public/icons/ClearSearch.svg';

import { useRouter } from 'next/navigation';

export default function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  return (
    <div className='hidden  tabletx:block relative ml-auto'>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Busca'
        className='rounded-sm h-[35px] w-[295px] bg-gray-search text-14 px-12 outline-none text-gray-seachText'
      />
      {/* <Image alt='search icon' src=""></Image> */}
      <div className='flex gap-5 items-center absolute right-6 top-1/2 -translate-y-1/2'>
        <SearchIcon
          onClick={() => router.push(`/busca?s=${search}`)}
          className='text-primary'
        ></SearchIcon>
        {search && (
          <ClearIcon
            onClick={() => setSearch('')}
            className='text-primary'
          ></ClearIcon>
        )}
      </div>
    </div>
  );
}
