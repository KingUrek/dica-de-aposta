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
import BackArrow from 'public/icons/BackArrow.svg';
import TopTipsClient from 'components/TopTipsClient';
import BackButton from 'components/ui/BackButton';

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
        <BackButton></BackButton>
      </Container>
      {currentTournament?.parent && (
        <Container className='pt-12'>
          <LeagueTag league={currentTournament.name}></LeagueTag>
        </Container>
      )}
      <TopTipsClient slug={params.slug}></TopTipsClient>

      <div className='bg-primary bg-opacity-5 pt-8 pb-28 tablet:pt-22 tablet:pb-[96px]'>
        <BookMakers></BookMakers>
      </div>
      {/* </div> */}
    </>
  );
}
