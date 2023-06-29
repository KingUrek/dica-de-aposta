import React from 'react';
import LeagueIcon from '../../public/icons/LeagueIcon.svg';

export default function LeagueTag({ league }) {
  return (
    <div className='bg-primary rounded-sm gap-3 text-white px-8 py-3 h-16 flex items-center tablet:w-fit tablet:min-w-[270px]'>
      <LeagueIcon></LeagueIcon>
      <span>{league}</span>
    </div>
  );
}
