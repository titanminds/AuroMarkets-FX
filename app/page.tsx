import Link from "next/link"
import BenefitsSection from "../components/Home/BenefitsSection"
import DownloadSection from "../components/Home/DownloadSection"
import HangingCards from "../components/Home/HangingCards"
import HeroSection from "../components/Home/HeroSection"
import PricingList from "../components/Home/PricingList"
import Ecosystem from "../components/Home/WhyChooseUs"
import OpenAccountSection from "../components/Home/OpenAccountSection"

export const metadata = {
  title: "Best Forex Trading Platform in Pakistan | MyBGFx",
  description:
    "Open a forex trading account with MyBGFx in Pakistan. Fast execution, low spreads, and secure crypto trading for local traders.",
  keywords: [
    "forex trading Pakistan",
    "Pakistani forex broker",
    "online trading platform",
    "forex account Pakistan",
  ],
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HangingCards />
      <PricingList />
      <Ecosystem />
      <OpenAccountSection />
      <BenefitsSection />
      <section className="bg-mate text-white pt-24 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Forex Trading in Pakistan with MyBGFx
          </h2>
          <p className="text-gray-300 max-w-3xl leading-8 mb-8">
            MyBGFx is built for Pakistani traders who want a fast, secure, and
            compliant forex trading experience. We offer advanced trading tools,
            a localized customer experience, and access to global markets from
            Pakistan.
          </p>
          <ul className="grid gap-4 md:grid-cols-2 mb-10">
            <li className="rounded-3xl bg-slate-900 p-6 shadow-xl">
              <h3 className="font-semibold text-xl mb-3">Low spreads</h3>
              <p className="text-gray-400 leading-7">
                Trade major forex pairs with competitive pricing tailored for
                Pakistan-based accounts.
              </p>
            </li>
            <li className="rounded-3xl bg-slate-900 p-6 shadow-xl">
              <h3 className="font-semibold text-xl mb-3">Fast execution</h3>
              <p className="text-gray-400 leading-7">
                Enjoy ultra-low latency order execution across forex, crypto,
                and stock CFDs.
              </p>
            </li>
            <li className="rounded-3xl bg-slate-900 p-6 shadow-xl">
              <h3 className="font-semibold text-xl mb-3">Local support</h3>
              <p className="text-gray-400 leading-7">
                Get Pakistan-focused customer service and educational resources.
              </p>
            </li>
            <li className="rounded-3xl bg-slate-900 p-6 shadow-xl">
              <h3 className="font-semibold text-xl mb-3">Secure platform</h3>
              <p className="text-gray-400 leading-7">
                Trade with confidence using modern security, encryption, and
                account protections.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <DownloadSection />
    </main>
  )
}
