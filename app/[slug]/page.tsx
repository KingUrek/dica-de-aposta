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

export async function generateStaticParams() {
 return [{slug:'gabriel'}]
}

export default function Page({ params }) {
  console.log(params)
  return (
    <>
      <div className='bg-primary mb-32 bg-opacity-5 pb-18 pt-9 tablet:pt-22 relative tablet:pb-[116px] tablet:mb-[212px]'>
        <div className=' mb-28'>
          <TopGuesses></TopGuesses>
        </div>
      </div>
    </>
  );
}
