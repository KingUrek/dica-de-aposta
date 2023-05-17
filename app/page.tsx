import BetHouseCards from '../components/BookmakerCards/Index';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import CardsList from '../components/SportsCards/CardsList';
import TelegramGroup from '../components/TelegramGroup';
import BestBookmaker from '../components/BestBookmaker';
import PortelaTips from '../components/PortelaTips';

export default function Page() {
  return (
    <>
      <Header></Header>
      {/* <div className='flex gap-[56px]'> */}
        <BetHouseCards></BetHouseCards>
        <CardsList></CardsList>
        <TelegramGroup></TelegramGroup>
        <BestBookmaker></BestBookmaker>
        <PortelaTips></PortelaTips>
        <div className='h-[200px]'></div>
      {/* </div> */}
      <Footer></Footer>
    </>
  );
}
