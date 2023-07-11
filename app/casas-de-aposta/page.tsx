import React from 'react';
import Container from '../../components/ui/container';
import BookMakerArchive from '../../components/BookMakerArchive';
import Header from '../../components/Header/Header';
import FAQ from 'components/Faq';

export default async function CasasDeAposta() {
  return (
    <>
      <Header></Header>
      <Container className='mt-28 tablet:mt-40 flex flex-col'>
        <BookMakerArchive></BookMakerArchive>
      </Container>
      <div className='bg-primary bg-opacity-5 pt-10 tablet:pt-24 pb-22 tablet:pb-24'>
      <Container >
        {/* @ts-expect-error Async Server Component */}
        <FAQ></FAQ>
        </Container>
      </div>
        

    </>
  );
}
