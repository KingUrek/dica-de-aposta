import React from 'react';
import Header from '../../components/Header/Header';
import Container from '../../components/ui/container';
import GuessesArchiveBlock from '../../components/GuessesArchiveBlock';
import { getTournaments } from '../../lib/api';

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
      <Container>
        {tournaments.map((tournament) => {
          return (
            <GuessesArchiveBlock
              key={tournament.databaseId}
              tournament={tournament}
            />
          );
        })}
      </Container>
    </>
  );
}
