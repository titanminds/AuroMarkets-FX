import PageHero from "../../components/About/Hero"
import FAQSection from "../../components/FAQS/FAQSection"
import React from "react"

const page = () => {
  return (
    <div>
      <PageHero
        title="FAQ's"
        description="Welcome to MYBGFX, a leading online forex company. We empower traders with the tools, expertise and support needed to succeed in the global markets."
        backgroundImage="https://static.vecteezy.com/system/resources/thumbnails/052/042/795/small/trading-forex-gold-or-xauusd-char-growth-up-profit-in-bullish-market-vector.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ's" }]}
      />
      <FAQSection />
    </div>
  )
}

export default page
