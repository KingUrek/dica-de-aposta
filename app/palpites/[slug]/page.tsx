import TelegramGroup from 'components/TelegramGroup';
import BestBookmaker from 'components/BestBookmaker';
import PortelaTips from 'components/PortelaTips';
import BookMakers from 'components/BookMakers';
import HighlightTip from 'components/HighlightTip';
import Container from 'components/ui/container';
import TopGuesses from 'components/TopGuessesClient';
import TopTips from 'components/TopTips';
import HighlightMultiple from 'components/Multiples/HighlightMultiple';
import { getTournaments } from 'lib/api';
import { notFound } from 'next/navigation';
import Header from 'components/Header/Header';
import LeagueTag from 'components/LeagueTag';
import Link from 'next/link';
import BackArrow from 'public/icons/BackArrow.svg'

export async function generateStaticParams() {
  const tournaments = await getTournaments();
  return tournaments.map(({ slug }) => slug);
}

export default async function Page({ params }) {
  const tournaments = await getTournaments();
  const currentTournament = tournaments.find((tour) => {
    return tour.slug === params.slug;
  });
  if (!currentTournament) {
    notFound()
  }
  return (
    <>
      <Header slug={params.slug} tournaments={tournaments}></Header>
      <Container>
        <Link href={'/palpites'} className='text-16 font-bold text-primary-gray underline flex gap-6 items-center mt-9'><BackArrow></BackArrow>Voltar</Link>
      </Container>
      {currentTournament?.parent && (
        <Container className='pt-12'>
          <LeagueTag league={currentTournament.name}></LeagueTag>
        </Container>
      )}
      <Container className='pt-19'>
        <div className='grid tablet:grid-cols-[3fr_2fr] gap-28 tablet:gap-14 grid-rows-[236px_1fr] tablet:pt-28 pb-26 '>
          <div className=' row-span-full'>
            <HighlightTip slug={params.slug}></HighlightTip>
          </div>

          <TelegramGroup></TelegramGroup>
          <div className='hidden tablet:block'>
            {/* @ts-expect-error Async Server Component */}
            <HighlightMultiple slug={params.slug}></HighlightMultiple>
          </div>
        </div>
      </Container>

      <div className=' mb-32 pt-9 tablet:pt-22 relative'>
        <TopGuesses slug={params.slug}></TopGuesses>
      </div>
      <BestBookmaker></BestBookmaker>
      <div className=' pb-16 pt-10 bg-gray-tipBlockBg'>
        <TopTips slug={params.slug}></TopTips>
      </div>
      <div className='w-full'>
        <PortelaTips></PortelaTips>
      </div>
      <div className='bg-primary bg-opacity-5 pt-8 pb-28 tablet:pt-22 tablet:pb-[96px]'>
        <BookMakers></BookMakers>
      </div>
      {/* </div> */}
    </>
  );
}
