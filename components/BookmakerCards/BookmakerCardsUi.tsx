import { getBookmakers } from '../../lib/api';
import Container from '../ui/container';
import Card from './Card';

export default async function BookmakerCardsUi() {
  const data = await getBookmakers("top");
  return (
        <div className='flex gap-4 tablet:gap-8 ml-auto'>
      {data.slice(0, 4).map(({ databaseId, bookmakerUrl, bookmakerLogo, featuredImage }, index) => (  
            <Card
              key={databaseId}
              link={bookmakerUrl}
              index={index}
          logoUrl={featuredImage?.node?.sourceUrl}
          numberOfCards={data.length}

            />
          ))}
          <Card type='bonus' link={'/'} logoUrl={''} />
        </div>
  );
}
