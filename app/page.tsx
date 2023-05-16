import BetHouseCards from "../components/BookmakerCards/Index";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import CardsList from "../components/SportsCards/CardsList";
import TelegramGroup from "../components/TelegramGroup";
import BestBookmaker from "../components/BestBookmaker";

export default function Page() {
  return (
    <>
      <Header></Header>
      <BetHouseCards></BetHouseCards>
      <CardsList></CardsList>
      <TelegramGroup></TelegramGroup>
      <BestBookmaker></BestBookmaker>
      <div className="h-[200px]"></div>
        <Footer></Footer>
        
    </>
  )
}
