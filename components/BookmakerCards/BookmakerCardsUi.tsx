import { getBookmakers } from '../../lib/api';
import Container from '../ui/container';
import Card from './Card';

export default async function BookmakerCardsUi() {
  const data = (await getBookmakers('top')).nodes;
  const bonusCard = data.find(({ isBonus }) => isBonus)
  return (
    <div className='flex gap-4 tablet:gap-8 ml-auto'>
      {data
        .filter(({isBonus}) => !isBonus)
        .slice(0, 4)
        .map(
          (
            { databaseId, bookmakerUrl, featuredImage },
            index
          ) => (
            <Card
              key={databaseId}
              link={bookmakerUrl}
              index={index}
              logoUrl={featuredImage?.node?.sourceUrl}
              numberOfCards={data.length}
            />
          )
        )}
      {bonusCard && <Card type='bonus' link={bonusCard.bookmakerUrl} logoUrl={''} />}
    </div>
  );
}
