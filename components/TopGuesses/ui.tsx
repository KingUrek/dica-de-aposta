import React from 'react';
import Container from '../ui/container';
import Card from './Card';

export default async function TopGuessesUi() {
  const data = [1, 1, 1];
  return (
    <Container>
            <h2 className=' text-primary mb-12 tablet:mb-[56px] text-center tablet:text-40'>Principais Palpites</h2>
      <div className=' overflow-scroll gap-7 flex '>
        {data.map((item) => {
          return <Card></Card>;
        })}
      </div>
    </Container>
  );
}
