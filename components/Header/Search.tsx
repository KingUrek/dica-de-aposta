'use client'
import { useState } from 'react';
import SearchIcon from '../../public/icons/search.svg';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [search, setSearch] = useState('')
  const router = useRouter();
  return (
    <div className='hidden  tabletx:block relative ml-auto'>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Busca'
        className='rounded-sm h-[35px] w-[295px] bg-gray-search text-14 px-12 outline-none text-gray-seachText'
      />
      <button className='absolute right-6 top-1/2 -translate-y-1/2' onClick={() => router.push(`/busca?s=${search}`)} >
        {/* <Image alt='search icon' src=""></Image> */}
        <SearchIcon className='text-primary'></SearchIcon>
      </button>
    </div>
  );
}
