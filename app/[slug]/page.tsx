import BetHouseCards from '../../components/BookmakerCards/Index';
import SportsCards from '../../components/SportsCards';
import TelegramGroup from '../../components/TelegramGroup';
import BestBookmaker from '../../components/BestBookmaker';
import PortelaTips from '../../components/PortelaTips';
import BookMakers from '../../components/BookMakers';
import HighlightTip from '../../components/HighlightTip';
import Container from '../../components/ui/container';
import TopGuesses from '../../components/TopGuesses';
import TopTips from '../../components/TopTips';
import Multiples from '../../components/Multiples';
import HighlightMultiple from '../../components/Multiples/HighlightMultiple';
import { getTournaments } from '../../lib/api';
import { notFound } from 'next/navigation';
import Header from '../../components/Header/Header';
import LeagueTag from '../../components/LeagueTag';

export async function generateStaticParams() {
  const tournaments = await getTournaments();
  return tournaments.map(({ slug }) => slug);
}

export default async function Page({ params }) {
  const tournaments = await getTournaments();
  const currentTournament = tournaments.find((tour) => {
    return tour.slug === params.slug;
  });
  return (
    <>
      <Header slug={params.slug} tournaments={tournaments}></Header>
      {currentTournament?.parent && <Container className='pt-12'>
        <LeagueTag league={'Liga America'}></LeagueTag>
      </Container>}
      <Container className='pt-19'>
        <div className='grid tablet:grid-cols-[3fr_2fr] gap-14 grid-rows-[236px_1fr] tablet:pt-28 pb-26 '>
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

      <div className='bg-primary mb-32 bg-opacity-5 pb-18 pt-9 tablet:pt-22 relative tablet:pb-[116px] tablet:mb-[212px]'>
        <div className=' mb-28'>
          <TopGuesses slug={params.slug}></TopGuesses>
        </div>
        <div className='tablet:absolute tablet:left-[50%] tablet:translate-x-[-50%] w-full'>
          <PortelaTips></PortelaTips>
        </div>
      </div>
      <div className=' mb-24'>
        <Multiples slug={params.slug}></Multiples>
      </div>
      <BestBookmaker></BestBookmaker>
      <div className=' mb-16 mt-10'>
        <TopTips slug={params.slug}></TopTips>
      </div>
      <div className='bg-primary bg-opacity-5 pt-8 pb-28 tablet:pt-22 tablet:pb-[96px]'>
        <BookMakers></BookMakers>
      </div>
      {/* </div> */}
    </>
  );
}
