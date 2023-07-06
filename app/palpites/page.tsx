import React from 'react';
import Header from 'components/Header/Header';
import Container from 'components/ui/container';
import GuessesArchiveBlock from 'components/GuessesArchiveBlock';
import { getTournaments } from 'lib/api';
import BookMakers from 'components/BookMakers';
import PortelaTips from 'components/PortelaTips';
import TelegramGroup from 'components/TelegramGroup';

export default async function Palpites() {
  const tournaments = (await getTournaments()).filter(({ parent }) => !parent);
  return (
    <>
      <Header></Header>
      <div className='pt-28 pb-24 bg-azure'>
        <Container>
          <h1 className='text-orange  text-center text-36 '>Palpites Gerais</h1>
        </Container>
      </div>
      <Container className='flex flex-col gap-28 mt-4 mb-18'>
        {tournaments.map((tournament, index) => {
          return (
            <>
              <GuessesArchiveBlock
                key={tournament.databaseId}
                tournament={tournament}
              />
              {index === 0 && (
                <div className='tablet:hidden'>
                  <TelegramGroup></TelegramGroup>
                </div>
              )}

              {index === 1 && <PortelaTips></PortelaTips>}
            </>
          );
        })}
      </Container>
      <div className='bg-primary bg-opacity-5 pt-8 pb-28 tablet:pt-22 tablet:pb-[96px]'>
        <BookMakers></BookMakers>
      </div>
    </>
  );
}
