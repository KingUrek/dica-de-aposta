import BetHouseCards from '../components/BookmakerCards/Index';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import SportsCards from '../components/SportsCards';
import TelegramGroup from '../components/TelegramGroup';
import BestBookmaker from '../components/BestBookmaker';
import PortelaTips from '../components/PortelaTips';
import BookMakers from '../components/BookMakers';
import HighlightTip from '../components/HighlightTip';

export default function Page() {
  return (
    <>
      <Header></Header>
      {/* <div className='flex gap-[56px]'> */}
      <BetHouseCards></BetHouseCards>
      <SportsCards></SportsCards>
      <HighlightTip></HighlightTip>
      <TelegramGroup></TelegramGroup>
      <BestBookmaker></BestBookmaker>
      <div className='bg-primary bg-opacity-5 pb-18 pt-9 tablet:pt-22'>
        <PortelaTips></PortelaTips>

      </div>
      <div className='bg-primary bg-opacity-5 pt-8 pb-28 tablet:pt-22 tablet:pb-[96px]'>
        <BookMakers></BookMakers>
      </div>
      {/* </div> */}
      <Footer></Footer>
    </>
  );
}
