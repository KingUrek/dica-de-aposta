import React from 'react';
import Container from '../ui/container';
import Button from '../ui/button';
import { getFooter } from '../../lib/api';

export default async function PortelaTipsUi() {
  const {urlTips} = await getFooter();
  return (
    <Container>
      <div className='rounded bg-primary'>
        <div className='px-[26px] py-[32px]'>
          <p className=' font-tittilium text-white text-28 mb-12 font-bold text-center tablet:mb-16'>
            Tenha exclusividade de dicas no Portela Tips
          </p>
          <div className='max-w-[300px] m-auto'>
          <Button link={urlTips}>Quero fazer parte</Button>

          </div>
        </div>
      </div>
    </Container>
  );
}
