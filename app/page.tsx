import BenefitsSection from "@/components/Home/BenefitsSection"
import DownloadSection from "@/components/Home/DownloadSection"
import ForexTickerSimple from "@/components/Home/ForexTickerWidget"
import HangingCards from "@/components/Home/HangingCards"
import HeroSection from "@/components/Home/HeroSection"
import PricingList from "@/components/Home/PricingList"
import WhyChooseUs from "@/components/Home/WhyChooseUs"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ForexTickerSimple />
      <HangingCards />
      <PricingList />
      <WhyChooseUs />
      <BenefitsSection />
      <DownloadSection />
    </>
  )
}
