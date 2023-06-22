import BetHouseCards from '../components/BookmakerCards/Index';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import SportsCards from '../components/SportsCards';
import TelegramGroup from '../components/TelegramGroup';
import BestBookmaker from '../components/BestBookmaker';
import PortelaTips from '../components/PortelaTips';
import BookMakers from '../components/BookMakers';
import HighlightTip from '../components/HighlightTip';
import Container from '../components/ui/container';
import TopGuesses from '../components/TopGuesses';
import TopTips from '../components/TopTips';
import Multiples from '../components/Multiples';
import HighlightMultiple from '../components/Multiples/HighlightMultiple';

export default function Page() {
  return (
    <>
      <Header></Header>
      <div className='tablet:bg-azure'>
        <div
          className={`tablet:container tablet:mx-auto tablet:px-18 tablet:bg-azure tablet:flex tablet:flex-row-reverse desktop:px-[125px]`}
        >
          <div className='bg-azure py-12 tablet:py-24'>
            <Container className='tablet:px-0 desktop:!px-0'>
              <BetHouseCards></BetHouseCards>
            </Container>
          </div>
          <Container className='tablet:px-0 tablet:flex items-center desktop:!px-0'>
            <div className='mt-8 mb-12 tablet:m-0'>
              <SportsCards></SportsCards>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <div className='grid tablet:grid-cols-[3fr_2fr] gap-14 grid-rows-[236px_1fr] tablet:pt-28 pb-26 '>
          {/* <Container className='relative my-[56px] max-w-[425px] '> */}
          <div className=' row-span-full'>
            <HighlightTip></HighlightTip>
          </div>

          <TelegramGroup></TelegramGroup>
      {/* @ts-expect-error Async Server Component */}
          <HighlightMultiple></HighlightMultiple>
        </div>
      </Container>
      <div className=' mb-24'>

      <Multiples></Multiples>
      </div>
      <BestBookmaker></BestBookmaker>
      <div className='bg-primary mb-32 bg-opacity-5 pb-18 pt-9 tablet:pt-22 relative tablet:pb-[116px] tablet:mb-[212px]'>
        <div className=' mb-28'>
          <TopGuesses></TopGuesses>
        </div>
        <div className='tablet:absolute tablet:left-[50%] tablet:translate-x-[-50%] w-full'>
          <PortelaTips></PortelaTips>
        </div>
      </div>
      <div className=' mb-16 mt-10'>
        <TopTips></TopTips>
      </div>
      <div className='bg-primary bg-opacity-5 pt-8 pb-28 tablet:pt-22 tablet:pb-[96px]'>
        <BookMakers></BookMakers>
      </div>
      {/* </div> */}
      <Footer></Footer>
    </>
  );
}
