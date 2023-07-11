'use client';
import React, { useState } from 'react';
import DropDown from 'public/icons/QuestionDropdown.svg';
import classNames from 'classnames';

export default function Question({title, questionAnswer}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onClick={() => setIsOpen(!isOpen)} className='mb-12 tablet:mb-24 '>
      <div className='flex items-center justify-between border-b border-borderGray pb-5 '>
        <p className='text-14 tablet:text-20 text-primary-gray'>
          {title}
        </p>
        <DropDown
          className={classNames('cursor-pointer', {
            'rotate-180': !isOpen,
          })}
          
        ></DropDown>
      </div>
      <div
        className={classNames(
          'grid mt-5 tablet:mt-16 grid-rows-[0fr] overflow-hidden transition-all',
          {
            'grid-rows-[1fr]': isOpen,
          }
        )}
      >
        <p dangerouslySetInnerHTML={{__html:questionAnswer}} className='text-[#B3B3B3] text-14 min-h-0 tablet:text-16 whitespace-break-spaces'>
          
        </p>
      </div>
    </div>
  );
}
