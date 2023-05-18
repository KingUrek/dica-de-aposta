import BetHouseCards from '../components/BookmakerCards/Index';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import CardsList from '../components/SportsCards/CardsList';
import TelegramGroup from '../components/TelegramGroup';
import BestBookmaker from '../components/BestBookmaker';
import PortelaTips from '../components/PortelaTips';
import BookMakers from '../components/BookMakers';

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
      <div className='bg-primary bg-opacity-5 pt-8 pb-28 tablet:pt-22'>
        <BookMakers></BookMakers>

      </div>
      {/* </div> */}
      <Footer></Footer>
    </>
  );
}
