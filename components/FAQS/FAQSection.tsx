"use client"
import Link from "next/link"
import React, { useState } from "react"
import {
  BiChevronDown,
  BiChevronUp,
  BiSearch,
  BiHelpCircle,
  BiMessageDetail,
  BiPhone,
  BiEnvelope,
  BiChat,
} from "react-icons/bi"
import { BsArrowUpRight } from "react-icons/bs"

// FAQ Item Component
interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  toggle: () => void
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  toggle,
}) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300">
      <button
        onClick={toggle}
        className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors">
        <h3 className="text-lg font-semibold text-foreground pr-4">
          {question}
        </h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <BiChevronUp className="w-6 h-6 text-primary" />
          ) : (
            <BiChevronDown className="w-6 h-6 text-gray-400" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 border-t border-gray-100 pt-4 bg-white">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

// FAQ Category Component
interface FAQCategoryProps {
  title: string
  icon: React.ReactNode
  items: number
  activeCategory: number
  setActiveCategory: (index: number) => void
  index: number
}

const FAQCategory: React.FC<FAQCategoryProps> = ({
  title,
  icon,
  items,
  activeCategory,
  setActiveCategory,
  index,
}) => {
  return (
    <button
      onClick={() => setActiveCategory(index)}
      className={`p-6 rounded-xl text-left transition-all duration-300 ${
        activeCategory === index
          ? "bg-primary text-white shadow-lg shadow-primary/20"
          : "bg-white border border-gray-200 hover:border-primary/30 hover:shadow-md"
      }`}>
      <div className="flex items-center gap-4 mb-3">
        <div
          className={`p-3 rounded-lg ${
            activeCategory === index ? "bg-white/20" : "bg-primary/10"
          }`}>
          {icon}
        </div>
        <h3
          className={`text-xl font-bold ${
            activeCategory === index ? "text-white" : "text-foreground"
          }`}>
          {title}
        </h3>
      </div>
      <p
        className={`text-sm ${
          activeCategory === index ? "text-white/90" : "text-gray-600"
        }`}>
        {items} frequently asked questions
      </p>
    </button>
  )
}

// Search Component
interface FAQSearchProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const FAQSearch: React.FC<FAQSearchProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <BiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for questions..."
        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white text-foreground shadow-sm"
      />
    </div>
  )
}

// Contact Card Component
const ContactCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-mate to-black text-white rounded-2xl p-8 shadow-xl">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-primary/20 rounded-xl">
          <BiHelpCircle className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Still Have Questions?</h3>
          <p className="text-gray-300">Can't find what you're looking for?</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
          <div className="p-2 bg-primary/20 rounded-lg">
            <BiPhone className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold">Call Support</h4>
            <p className="text-gray-300 text-sm">+971-586856256</p>
          </div>
        </div> */}

        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
          <div className="p-2 bg-primary/20 rounded-lg">
            <BiChat className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold">Live Chat</h4>
            <p className="text-gray-300 text-sm">Available 24/7</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors overflow-hidden">
          <div className="p-2 bg-primary/20 rounded-lg">
            <BiEnvelope className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold">Email Us</h4>
            <a href="mailto:info@auromarketsfx.com" className="text-gray-300 text-sm">info@auromarketsfx.com</a>
          </div>
        </div>
      </div>

      <Link href="/contact" className="w-full mt-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
        Contact Support
        <BsArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </Link>
    </div>
  )
}

// FAQ Category Type
interface FAQCategoryType {
  title: string
  icon: React.ReactNode
  items: number
  faqs: Array<{
    question: string
    answer: string
  }>
}

// Main FAQ Component
const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0)
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [searchQuery, setSearchQuery] = useState<string>("")

  // FAQ Data
  const faqCategories: FAQCategoryType[] = [
    {
      title: "General Questions",
      icon: <BiHelpCircle className="w-6 h-6 text-primary" />,
      items: 8,
      faqs: [
        {
          question: "What is AuroMarkets FX Global and what services do you offer?",
          answer:
            "AuroMarkets FX Global is a leading forex trading platform offering comprehensive trading solutions including currency trading, CFDs, commodities, and indices. We provide advanced trading tools, educational resources, and 24/7 customer support to help traders succeed in the financial markets.",
        },
        {
          question: "Is AuroMarkets FX Global regulated?",
          answer:
            "Yes, AuroMarkets FX Global is fully regulated and licensed under international financial authorities. We adhere to strict regulatory standards ensuring the safety and security of our clients' funds and personal information.",
        },
        {
          question: "How do I open a trading account?",
          answer:
            "Opening an account is simple. Click the 'Sign Up' button on our website, fill in your personal details, verify your identity through our secure KYC process, and fund your account to start trading. The entire process takes less than 10 minutes.",
        },
        {
          question: "What trading platforms do you offer?",
          answer:
            "We offer multiple trading platforms including MetaTrader 4, MetaTrader 5, and our proprietary web-based platform. All platforms are available on desktop, web, and mobile devices.",
        },
      ],
    },
    {
      title: "Account & Deposits",
      icon: <BiMessageDetail className="w-6 h-6 text-primary" />,
      items: 6,
      faqs: [
        {
          question: "What is the minimum deposit required?",
          answer:
            "The minimum deposit varies by account type. For our Basic account, the minimum deposit is $250. For Premium and VIP accounts, minimum deposits are $5,000 and $25,000 respectively.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept various payment methods including bank wire transfers, credit/debit cards (Visa, MasterCard), e-wallets (Skrill, Neteller, PayPal), and cryptocurrency transfers.",
        },
        {
          question: "How long do deposits take to process?",
          answer:
            "Most deposits are instant. Credit/debit card deposits and e-wallets are processed immediately. Bank wire transfers typically take 1-3 business days depending on your bank.",
        },
      ],
    },
    {
      title: "Trading & Platforms",
      icon: <BiChat className="w-6 h-6 text-primary" />,
      items: 7,
      faqs: [
        {
          question: "What leverage do you offer?",
          answer:
            "We offer flexible leverage up to 1:500 for professional clients and up to 1:30 for retail clients in accordance with regulatory requirements. The specific leverage depends on your account type and the instrument you're trading.",
        },
        {
          question: "What are your trading hours?",
          answer:
            "Forex markets are open 24 hours a day, 5 days a week. Our trading hours for major currency pairs are from Sunday 10:00 PM GMT to Friday 10:00 PM GMT. Specific trading hours vary by instrument.",
        },
      ],
    },
  ]

  // Filter FAQs based on search
  const filteredFAQs = faqCategories[activeCategory].faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="relative font-sans min-h-screen">
      {/* Solid color split background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_white_50%,_#1b1d24_50%)]"></div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mate border border-black/10 mb-6">
              <BiHelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/80">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Find Answers to{" "}
              <span className="text-primary">Common Questions </span>
            </h2>
            <p className="text-lg md:text-xl text-mate max-w-3xl mx-auto leading-relaxed mb-12">
              Get instant answers to your questions about trading, accounts,
              platforms, and more.
            </p>

            {/* Search Bar */}
            <div className="mb-16">
              <FAQSearch
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Browse by Category
            </h3>
            {faqCategories.map((category, index) => (
              <FAQCategory
                key={index}
                title={category.title}
                icon={category.icon}
                items={category.items}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                index={index}
              />
            ))}

            {/* Contact Card */}
            <div className="mt-8">
              <ContactCard />
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {faqCategories[activeCategory].title}
              </h2>
              <p className="text-gray-600">
                {faqCategories[activeCategory].items} questions in this category
              </p>
            </div>

            {/* FAQ List - Card backgrounds will show against the mate background */}
            <div className="space-y-4">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    toggle={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                  <BiSearch className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No results found
                  </h3>
                  <p className="text-gray-600">
                    No questions match your search "{searchQuery}". Try
                    different keywords or browse the categories.
                  </p>
                </div>
              )}
            </div>

            {/* Stats Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Support Availability</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">
                  15 min
                </div>
                <div className="text-gray-600">Average Response Time</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>

            {/* Additional Help */}
            <div className="mt-12 bg-white border border-primary/20 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Need More Help?
              </h3>
              <p className="text-gray-600 mb-6">
                Our comprehensive knowledge base contains detailed guides, video
                tutorials, and trading strategies to help you succeed.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all">
                  Visit Knowledge Base
                </button>
                <button className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all">
                  Download Platform Guides
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQSection
