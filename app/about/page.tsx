import PageHero from "../..//components/About/Hero"
import MissionVision from "../../components/About/MissionVision"
import StorySection from "../../components/About/StorySection"
import TeamSection from "../../components/About/TeamSection"
import GrowthSection from "../../components/About/GrowthSection"

const About = () => {
  return (
    <>
      <PageHero
        title="Company"
        description="Welcome to MetaFX, a leading online forex company. We empower traders with the tools, expertise and support needed to succeed in the global markets."
        backgroundImage="https://jan.coderdemo.com/newwp/bullion/wp-content/uploads/2023/03/page-title.jpg"
        breadcrumbs={[{ label: "Home" }, { label: "About" }]}
      />

      <MissionVision />
      <StorySection />
      <TeamSection />
      <GrowthSection />
    </>
  )
}

export default About
