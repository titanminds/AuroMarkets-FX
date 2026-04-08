import PageHero from "../..//components/About/Hero"
import MissionVision from "../../components/About/MissionVision"
import StorySection from "../../components/About/StorySection"
import TeamSection from "../../components/About/TeamSection"
import GrowthSection from "../../components/About/GrowthSection"

export const metadata = {
  title: "About MyBGFx | Forex Trading Platform in Pakistan",
  description:
    "Learn about MyBGFx and our mission to deliver the best forex trading platform for Pakistani traders.",
};

const About = () => {
  return (
    <>
      <PageHero
        title="Company"
        description="Welcome to MyBGFx, a leading online forex company. We empower traders with the tools, expertise and support needed to succeed in the global markets."
        backgroundImage="https://static.vecteezy.com/system/resources/thumbnails/052/042/795/small/trading-forex-gold-or-xauusd-char-growth-up-profit-in-bullish-market-vector.jpg"
        breadcrumbs={[{ label: "Home" }, { label: "About" }]}
      />

      <MissionVision />
      <StorySection />
      {/* <TeamSection /> */}
      <GrowthSection />
    </>
  )
}

export default About
