"use client"
import React, { useState } from "react"
import { BiEnvelope, BiUser, BiPhone, BiMessageDetail } from "react-icons/bi"
import { FiSend } from "react-icons/fi"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="relative bg-mate font-sans">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-background leading-tight">
            Let's <span className="text-primary">Connect</span> With Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions about our services? We're here to help. Fill out the
            form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-background font-medium text-sm">
                    <BiUser className="w-4 h-4 text-primary" />
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white text-mate"
                      placeholder="Enter your full name"
                    />
                    <BiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-background font-medium text-sm">
                    <BiEnvelope className="w-4 h-4 text-primary" />
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white text-mate"
                      placeholder="Enter your email address"
                    />
                    <BiEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-background font-medium text-sm">
                    <BiPhone className="w-4 h-4 text-primary" />
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white text-mate"
                      placeholder="Enter your phone number"
                    />
                    <BiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-background font-medium text-sm">
                    <BiMessageDetail className="w-4 h-4 text-primary" />
                    Subject *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white text-mate"
                      placeholder="What is this regarding?"
                    />
                    <BiMessageDetail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-background font-medium text-sm">
                  <BiMessageDetail className="w-4 h-4 text-primary" />
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white text-mate resize-none"
                  placeholder="Please describe your inquiry in detail..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all active:scale-95 duration-300 disabled:opacity-70 disabled:cursor-not-allowed group">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information Sidebar */}
          <div className="lg:col-span-4 mt-8">
            {/* Quick Tips */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h4 className="font-bold text-mate mb-4">Quick Tips</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>
                    Please provide detailed information for faster response
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Include relevant account numbers if applicable</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>For urgent matters, please call our support line</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Our team responds within 1 business day</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
