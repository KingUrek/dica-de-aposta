import React, { useEffect, useState } from 'react';
import Container from '../ui/container';
import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import MenuDropDownArrow from '../../public/icons/MenuDropdownArrow.svg';

export default function LeagueSubmenu({ options = [] }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const pathname = usePathname()
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const router = useRouter();
  function toggleOption(optionId) {
    if (selectedOption === optionId) {
      setSelectedOption(null);
    } else {
      setSelectedOption(optionId);
    }
  }

  function goToSport() {
    const currentOption = options.find(
      ({ databaseId }) => databaseId === selectedOption
    );
    if (!currentOption) {
      return;
    }
    setLoading(true);
    /* @ts-expect-error */
    router.push(`${pathname.split('/').slice(0,-1).join('/')}/${currentOption?.slug}`);
  }
  return (
    <div className='my-5 tabletx:relative'>
        <p
          id="tournament-select"
          onClick={() => setIsOpen(!isOpen)}
          className={classNames('text-14 tablet:text-16 text-white cursor-pointer flex items-center gap-3 w-fit', {
            "font-bold":isOpen
          })}
        >
          Escolha o seu campeonato
          <MenuDropDownArrow className={
            classNames('tablet:ml-[100px]', {
              'rotate-180':isOpen
            })
          }></MenuDropDownArrow>
        </p>

      {isOpen && (
        <div className='bg-submenuGray absolute  left-0 mt-5 z-50 tabletx:w-[364px] max-tabletx:inner-shadown max-h-[360px] tabletx:-left-18 mobile:max-tabletx:right-0 rounded-b'>
          <div className='container mx-auto px-18 py-12 flex flex-col gap-8'>
            <div className='flex flex-col gap-8 overflow-y-auto max-h-[300px]'>
              {options?.map(({ name, databaseId, slug }) => {
                return (
                  <div
                    onClick={() => toggleOption(databaseId)}
                    key={databaseId}
                    className='flex gap-6 items-center cursor-pointer'
                  >
                    <div
                      className={classNames(
                        'border-2 rounded-sm border-primary-gray w-15 h-15',
                        {
                          'bg-primary !border-primary':
                            selectedOption === databaseId,
                          '!border-disabledGray':
                            selectedOption && selectedOption !== databaseId,
                        }
                      )}
                    ></div>
                    <p
                      className={classNames('text-primary-gray', {
                        'font-bold !text-primary':
                          selectedOption === databaseId,
                        '!text-disabledGray':
                          !!selectedOption && selectedOption !== databaseId,
                      })}
                    >
                      {name}
                    </p>
                  </div>
                );
              })}
            </div>

            <button
              className={classNames(
                'rounded bg-primary-gray bg-opacity-20 text-primary-gray text-opacity-50 ml-auto px-9 py-6',
                {
                  '!bg-primary !text-white': !!selectedOption,
                }
              )}
              disabled={!selectedOption || loading}
              onClick={goToSport}
            >
              {loading ? 'Carregando...' : 'Selecionar'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
