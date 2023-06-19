import React from 'react';
import Container from '../ui/container';
import Card from './Card';
import { getHighlightTip } from '../../lib/api';
import Button from '../ui/button';

export default async function TopTipsUi() {
  const data = [await getHighlightTip()];
  console.log(data);

  return (
    <Container>
      <h2 className=' text-primary-dark mb-12 tablet:mb-[56px] text-center tablet:text-40'>
        Principais Dicas
      </h2>
      <div className='gap-12 flex flex-col mb-12 '>
        {data.map((item) => {
          return <Card key={item.title} {...item}></Card>;
        })}
      </div>
      <div>
      <Button link="/dicas" type='inside'>Ver mais</Button>

      </div>
    </Container>
  );
}
