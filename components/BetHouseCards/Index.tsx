import Container from '../container';
import Card from './Card';

const mock = [
  {
    link: '/',
    logoUrl:
      'https://dicadeaposta.apikistage.com/wp-content/uploads/2023/04/image-149.png',
  },
  {
    link: '/',
    logoUrl:
      'https://dicadeaposta.apikistage.com/wp-content/uploads/2023/04/image-149.png',
  },
  {
    link: '/',
    logoUrl:
      'https://dicadeaposta.apikistage.com/wp-content/uploads/2023/04/image-149.png',
  },
  {
    link: '/',
    logoUrl:
      'https://dicadeaposta.apikistage.com/wp-content/uploads/2023/04/image-149.png',
  },
];

export default function BetHouseCards() {
  return (
    <Container className='bg-azure py-12 '>
      <div className='flex justify-between'>
        {mock.map(({ link, logoUrl }) => (
          <Card key={logoUrl} link={link} logoUrl={logoUrl} />
        ))}
        <Card type="bonus" link={'/'} logoUrl={''} />
      </div>
    </Container>
  );
}
