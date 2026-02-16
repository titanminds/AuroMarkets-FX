"use client"

import React from "react"
import { BiBarChart, BiPieChart, BiTrendingUp } from "react-icons/bi"
import { LuMoveUpRight } from "react-icons/lu"
import { motion } from "framer-motion"

const CardData = [
  {
    title: "Technical Analysis",
    description:
      "Technical analysis involves studying charts and patterns to identify trends and predict future price movements. It helps traders recognize support and resistance levels.",
    icon: <BiBarChart className="w-8 h-8 text-primary" />,
  },
  {
    title: "Fundamental Analysis",
    description:
      "Fundamental analysis examines a company's or economy's underlying factors to estimate its intrinsic value. This includes analyzing financial statements.",
    icon: <BiPieChart className="w-8 h-8 text-primary" />,
  },
  {
    title: "Sentiment Analysis",
    description:
      "Sentiment analysis gauges market sentiment by analyzing market participants' attitudes, emotions, and opinions. This involves monitoring news.",
    icon: <BiTrendingUp className="w-8 h-8 text-primary" />,
  },
]

const HangingCards = () => {
  return (
    <section className="relative bg-background py-24 px-6 overflow-hidden">
      {/* Subtle Shadow on the "Floor" */}
      <div className="absolute bottom-0 left-0 right-0 h-42 bg-linear-to-t from-primary to-primary" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {CardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ rotate: -1, y: 0 }}
            whileHover={{ rotate: 0, y: 5 }}
            className="flex flex-col items-center group">
            {/* The Card */}
            <div className="bg-white rounded-2xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center h-full relative overflow-hidden group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500">
              {/* Decorative Background Element */}
              <div className="absolute -right-12 -top-12 w-54 h-54 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon Container */}
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center relative z-10 border border-gray-50">
                  {/* Spinning Border on Hover */}
                  <div className="absolute inset-[-4px] rounded-full border-t-2 border-primary animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {card.icon}
                </div>
              </div>

              <div className="space-y-4 flex-grow">
                <span className="text-[11px] font-black text-primary tracking-[0.2em] uppercase">
                  Our Expertise
                </span>

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary tracking-tight">
                  {card.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed px-2">
                  {card.description}
                </p>
              </div>

              {/* Modern Action Button */}
              <button className="mt-10 group/btn relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-primary cursor-pointer hover:text-mate">
                Explore More
                <LuMoveUpRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HangingCards
