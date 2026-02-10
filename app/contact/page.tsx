import PageHero from '@/components/About/Hero'
import ContactForm from '@/components/Contact/ContactForm'
import ContactSection from '@/components/Contact/ContactSection'
import React from 'react'

const Contact = () => {
  return (
    <div>
       <PageHero
        title="Contact Us"
        description="If you have any Questions , Concerns or Feedback, Dont Hesitate to Contact Us. We are Committed to Responding to all inquires in a timely and Professional Manner."
        backgroundImage="https://jan.coderdemo.com/newwp/bullion/wp-content/uploads/2023/03/page-title.jpg"
        breadcrumbs={[{ label: "Home" }, { label: "Contact" }]}
      />
      <ContactSection />
      <ContactForm />
    </div>
  )
}

export default Contact
