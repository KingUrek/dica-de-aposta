import { getBookmakers } from '../../lib/api';
import Container from '../container';
import Card from './Card';

export default async function BookmakerCardsUi() {
  const data = await getBookmakers();
  return (
    <div className='bg-azure'>
      <Container className='bg-azure py-12 flex '>
        <div className='flex gap-4 tablet:gap-8 ml-auto'>
          {data.slice(0,4).map(({ databaseId, bookmakerUrl, bookmakerLogo }, index) => (
            <Card
              key={databaseId}
              link={bookmakerUrl}
              logoUrl={bookmakerLogo}
              index={index}
            />
          ))}
          <Card type='bonus' link={'/'} logoUrl={''} />
        </div>
      </Container>
    </div>
  );
}
