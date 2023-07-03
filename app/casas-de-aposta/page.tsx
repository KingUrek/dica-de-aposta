import React, { Suspense } from 'react';
import Container from '../../components/ui/container';
import BookMakerArchive from '../../components/BookMakerArchive';
import Header from '../../components/Header/Header';

export default async function CasasDeAposta() {
  return (
    <>
      <Header></Header>
      <Container className='mt-28 tablet:mt-40 flex flex-col'>
        <Suspense fallback={<p>Gabriel</p>}>
          <BookMakerArchive></BookMakerArchive>
        </Suspense>
      </Container>
    </>
  );
}
