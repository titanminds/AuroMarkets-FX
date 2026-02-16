"use client"
import Link from "next/link"
import React, { useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import {
  BiChevronDown,
  BiChevronUp,
  BiSearch,
  BiHelpCircle,
  BiChat,
} from "react-icons/bi"
import { BsArrowUpRight } from "react-icons/bs"

// FAQ Item Component with smoother animations
interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  toggle: () => void
  index: number
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  toggle,
  index,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.03,
        ease: [0.25, 0.1, 0.25, 1] // Cubic bezier for smoother easing
      }}
      className="border border-gray-200 rounded-lg overflow-hidden"
    >
      <button
        onClick={toggle}
        className="w-full p-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <h3 className="text-base font-medium text-foreground pr-4">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ 
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween"
          }}
        >
          {isOpen ? (
            <BiChevronUp className="w-5 h-5 text-primary" />
          ) : (
            <BiChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1]
                },
                opacity: {
                  duration: 0.3,
                  delay: 0.1
                }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1]
                },
                opacity: {
                  duration: 0.2
                }
              }
            }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 bg-white">
              <p className="text-sm text-gray-600">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="relative max-w-xl mx-auto"
    >
      <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search questions..."
        className="w-full pl-9 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white text-foreground text-sm transition-all duration-200"
      />
    </motion.div>
  )
}

// Contact Card Component with smoother animations
const ContactCard: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.6,
        delay: 0.15,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="bg-mate text-white rounded-lg p-6"
    >
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="text-lg font-semibold mb-1"
      >
        Still have questions?
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-sm text-gray-400 mb-4"
      >
        We're here to help 24/7
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        className="space-y-3 mb-4"
      >
        <motion.div 
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-3"
        >
          <div className="bg-black/30 p-2 rounded">
            <BiChat className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Live Chat</p>
            <p className="text-xs text-gray-400">Instant response</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors duration-200"
        >
          Contact support
          <motion.div
            animate={{ x: [0, 3, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatType: "loop"
            }}
          >
            <BsArrowUpRight className="w-3 h-3" />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  )
}

// Stat Card Component with smoother animation
interface StatCardProps {
  value: string
  label: string
  delay: number
}

const StatCard: React.FC<StatCardProps> = ({ value, label, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ 
        y: -3, 
        boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
        transition: { duration: 0.2 }
      }}
      className="bg-white border border-gray-200 rounded-lg p-4 text-center"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: delay + 0.15, 
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        className="text-xl font-semibold text-primary"
      >
        {value}
      </motion.div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </motion.div>
  )
}

// Main FAQ Component
const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [searchQuery, setSearchQuery] = useState<string>("")

  // All FAQs combined
  const allFaqs = [
    {
      question: "What is AuroMarkets FX Global?",
      answer: "AuroMarkets FX Global is a forex trading platform offering currency trading, CFDs, commodities, and indices with 24/7 support.",
    },
    {
      question: "Is AuroMarkets FX Global regulated?",
      answer: "Yes, we are fully regulated and licensed under international financial authorities.",
    },
    {
      question: "How do I open an account?",
      answer: "Click 'Sign Up', fill in your details, verify your identity, and fund your account. Takes less than 10 minutes.",
    },
    {
      question: "What trading platforms do you offer?",
      answer: "We offer MetaTrader 4, MetaTrader 5, and our web-based platform, all available on desktop and mobile.",
    },
    {
      question: "What is the minimum deposit?",
      answer: "Minimum deposit is $10 for Basic account, $5,000 for Premium, and $25,000 for VIP accounts.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank wire, credit/debit cards (Visa, MasterCard), e-wallets (Skrill, Neteller), and crypto.",
    },
    {
      question: "How long do deposits take?",
      answer: "Card and e-wallet deposits are instant. Bank transfers take 1-3 business days.",
    },
    {
      question: "What leverage do you offer?",
      answer: "Leverage up to 1:1000 for professional clients and up to 1:30 for retail clients, depending on account type.",
    },
    {
      question: "What are your trading hours?",
      answer: "Forex trading is available 24/5 from Sunday 10:00 PM GMT to Friday 10:00 PM GMT.",
    },
   
    {
      question: "Is my money safe?",
      answer: "Yes, client funds are held in segregated accounts with top-tier banks.",
    },
  ]

  // Filter FAQs based on search
  const filteredFaqs = allFaqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Animation variants for container
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Split background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-mate to-[50%]"></div>

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12"
        >
          <div className="text-center max-w-2xl mx-auto">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20,
                delay: 0.1 
              }}
              className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full mb-4"
            >
              <BiHelpCircle className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-foreground">FAQ</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl md:text-4xl font-bold mb-3 text-foreground"
            >
              Frequently asked questions
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-gray-600 mb-8"
            >
              Find answers to common questions about trading, accounts, and platforms.
            </motion.p>

            <FAQSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - FAQs */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-8"
            >
              <div className="space-y-2">
                <AnimatePresence mode="wait">
                  {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq, index) => (
                      <FAQItem
                        key={faq.question + index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        toggle={() => setOpenIndex(openIndex === index ? null : index)}
                        index={index}
                      />
                    ))
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="bg-white border border-gray-200 rounded-lg p-8 text-center"
                    >
                      <p className="text-foreground text-sm">No results found for "{searchQuery}"</p>
                      <p className="text-xs text-gray-400 mt-1">Try different keywords</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Column - Contact & Stats */}
            <div className="lg:col-span-4">
              {/* Contact Card */}
              <div className="mb-6">
                <ContactCard />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <StatCard value="24/7" label="Support" delay={0.25} />
                <StatCard value="15m" label="Avg. response" delay={0.3} />
                <StatCard value="98%" label="Satisfaction" delay={0.35} />
                <StatCard value="50k+" label="Clients" delay={0.4} />
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-xs text-gray-500 mt-4 text-center"
              >
                Trusted by traders worldwide
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQSection