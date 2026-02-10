"use client"

import React from "react"
import { motion } from "framer-motion"
import { MdCallMade } from "react-icons/md"

interface GrowthMetric {
  label: string
  value: number
}

const metrics: GrowthMetric[] = [
  { label: "Production", value: 48 },
  { label: "Product Export", value: 79 },
  { label: "Partners Growth", value: 65 },
]

const GrowthSection = () => {
  return (
    <section className="bg-mate  text-white ">
      <div className="max-w-7xl mx-auto py-20 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 font-sans">
        {" "}
        <div className="max-w-md">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
            Growth Rate
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            For Traders who{" "}
            <span className="text-primary">Value Transparency</span>
          </h2>

          <button className="bg-primary text-mate px-4 md:px-7 py-2.5 md:py-3 rounded-sm flex items-center gap-2 font-bold text-[13px] md:text-[15px] hover:bg-primary/70 cursor-pointer transition-all active:scale-95 shadow-lg">
            Official App <MdCallMade size={18} className="hidden md:block" />
          </button>
        </div>
        {/* Right Content - Chart */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-sm text-gray-300">
              Annual growth rate 2023 - 2024
            </span>
          </div>

          <div className="relative space-y-10">
            {/* Vertical Grid Lines */}
            <div className="absolute inset-0 flex justify-between pointer-events-none opacity-10">
              {[0, 20, 40, 60, 80, 100].map((tick) => (
                <div
                  key={tick}
                  className="border-l border-gray-400 h-full relative">
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500">
                    {tick}
                  </span>
                </div>
              ))}
            </div>

            {/* Progress Bars */}
            {metrics.map((item, index) => (
              <div key={index} className="relative z-10">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="text-sm font-bold">{item.value}%</span>
                </div>
                <div className="h-[2px] w-full bg-gray-800 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-transparent to-primary rounded-full flex items-center justify-end">
                    {/* Arrow Tip */}
                    <div className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-primary"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GrowthSection
