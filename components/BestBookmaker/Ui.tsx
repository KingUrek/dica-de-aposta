import React from 'react'
import Container from '../ui/container'
import { getBookmakers } from '../../lib/api'
import Card from './Card';

export default async function BestBookmakerUi() {
  const data = await getBookmakers();
  return (
    <div className=' tablet:hidden'>
      <Container >
        <h2 className=' text-primary text-28 mb-12'>Melhores casas de aposta</h2>
      </Container>
      <div className='flex gap-6 overflow-scroll pl-20 pb-10'>
          {data.map(({ databaseId, bookmakerUrl, bookmakerLogo }) => (
            <Card
              key={databaseId}
              link={bookmakerUrl}
              logoUrl={bookmakerLogo}
            />
          ))}
      </div>
    </div>
      
  )
}
