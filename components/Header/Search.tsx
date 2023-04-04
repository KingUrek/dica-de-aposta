import Image from 'next/image';
import SearchIcon from '../../public/icons/search.svg';

export default function Search() {
  return (
    <div className='hidden  tablet:block relative ml-auto'>
      <input
        placeholder='Busca'
        className='rounded-sm h-[35px] w-[295px] bg-gray-search text-14 px-12 outline-none text-gray-seachText'
      />
      <button className='absolute right-6 top-1/2 -translate-y-1/2'>
        {/* <Image alt='search icon' src=""></Image> */}
        <SearchIcon className='text-primary'></SearchIcon>
      </button>
    </div>
  );
}
