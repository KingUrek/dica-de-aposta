import React, { useEffect } from 'react';
import Container from '../ui/container';
import Caroulsel from '../ui/carousel';

import { getBookmakers } from '../../lib/api';
import Card from './Card';

export default async function BestBookmakerUi() {
  const data = await getBookmakers();

  return (
    <div className=' tablet:hidden'>
      <Container>
        <h2 className=' text-primary text-28 mb-12'>
          Melhores casas de aposta
        </h2>
      </Container>
      <Caroulsel>
        {data.map(({ databaseId, bookmakerUrl, bookmakerLogo }) => (
          <Card key={databaseId} link={bookmakerUrl} logoUrl={bookmakerLogo} />
        ))}
      </Caroulsel>
    </div>
  );
}
