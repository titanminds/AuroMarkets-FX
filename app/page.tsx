import BenefitsSection from "../components/Home/BenefitsSection";
import DownloadSection from "../components/Home/DownloadSection";
import { TradingViewTicker } from "../components/Home/ForexTickerWidget";
import HangingCards from "../components/Home/HangingCards";
import HeroSection from "../components/Home/HeroSection";
import PricingList from "../components/Home/PricingList";
import Ecosystem from "../components/Home/WhyChooseUs";


export default function Home() {
  return (
    <>
      <HeroSection />
      <TradingViewTicker />
      <HangingCards />
      <PricingList />
      <Ecosystem />
      <BenefitsSection />
      <DownloadSection />
    </>
  )
}
