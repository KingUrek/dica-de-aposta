import { Suspense } from "react";
import BetHouseCards from "../components/BetHouseCards/Index";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import CardsList from "../components/SportsCards/CardsList";
import TelegramGroup from "../components/TelegramGroup";

export default function Page() {
  return (
    <>
      <Header></Header>
      <BetHouseCards></BetHouseCards>
      {/* <CardsList></CardsList> */}
      <TelegramGroup></TelegramGroup>
      <div className="h-[200px]"></div>
        <Footer></Footer>
        
    </>
  )
}
