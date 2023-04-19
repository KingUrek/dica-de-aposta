import { getBookmakers } from '../../lib/api';
import Container from '../container';
import Card from './Card';

export default async function BetHouseCards() {
  const data = await getBookmakers();
  return (
    <div className=' bg-azure'>
      <Container className='bg-azure py-12 '>
        <div className='flex gap-4'>
          {data.slice(0,4).map(({ databaseId, bookmakerUrl, bookmakerLogo }) => (
            <Card
              key={databaseId}
              link={bookmakerUrl}
              logoUrl={bookmakerLogo}
            />
          ))}
          <Card type='bonus' link={'/'} logoUrl={''} />
        </div>
      </Container>
    </div>
  );
}
