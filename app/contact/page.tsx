import PageHero from '../../components/About/Hero'
import ContactForm from '../../components/Contact/ContactForm'
import ContactSection from '../../components/Contact/ContactSection'
import React from 'react'

const Contact = () => {
  return (
    <div>
       <PageHero
        title="Contact Us"
        description="If you have any Questions , Concerns or Feedback, Dont Hesitate to Contact Us. We are Committed to Responding to all inquires in a timely and Professional Manner."
        backgroundImage="https://static.vecteezy.com/system/resources/thumbnails/052/042/795/small/trading-forex-gold-or-xauusd-char-growth-up-profit-in-bullish-market-vector.jpg"
        breadcrumbs={[{ label: "Home" }, { label: "Contact" }]}
      />
      <ContactSection />
      <ContactForm />
    </div>
  )
}

export default Contact
