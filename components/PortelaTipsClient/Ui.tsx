'use client'
import React, { useEffect, useState } from 'react';
import Container from '../ui/container';
import Button from '../ui/button';
import { getFooter } from '../../lib/api';

export default function PortelaTipsUi() {
  const [footerUrl, setFooterUrl] = useState('')
  async function getFooterUrl() {
    const { urlTips } = await getFooter();
    setFooterUrl(urlTips)

  }
  useEffect(() => {
    getFooterUrl()
  }, [])
  
  return (
    <Container>
      <div className='rounded bg-primary'>
        <div className='px-13 py-16 tablet:py-26'>
          <p className=' font-tittilium text-white text-28 mb-12 tablet:text-40 font-bold text-center tablet:mb-16'>
            Tenha exclusividade de dicas no Portela Tips
          </p>
          <div className='max-w-[300px] m-auto'>
            <Button link={footerUrl || '/' }>Quero fazer parte</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
