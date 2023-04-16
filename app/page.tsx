import BetHouseCards from "../components/BetHouseCards/Index";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";
import TelegramGroup from "../components/TelegramGroup";

export default function Page() {
  return (
    <>
      <Header></Header>
      <BetHouseCards></BetHouseCards>
      <TelegramGroup></TelegramGroup>
      <div className="h-[200px]"></div>
      <Footer></Footer>
    </>
  )
}
