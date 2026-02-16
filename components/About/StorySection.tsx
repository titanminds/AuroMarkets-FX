"use client"
import { motion } from "framer-motion"
import {
  FiCalendar,
  FiUser,
  FiBarChart2,
  FiGlobe,
  FiTrendingUp,
  FiAward,
  FiTarget,
  FiUsers,
  FiDollarSign,
  FiShield,
  FiSmartphone,
} from "react-icons/fi"
import { useRef, useState } from "react"

export default function StorySection() {
  const containerRef = useRef(null)
  const [hoveredYear, setHoveredYear] = useState<string | null>(null)

  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      description:
        "AuroMarkets FX founded with a vision to provide transparent forex trading to emerging markets",
      icon: FiTarget,
      stats: "3 Founding Partners",
      color: "from-primary to-mate",
      gradient: "from-primary/20 via-primary/10 to-transparent",
      highlight: true,
    },
    {
      year: "2019",
      title: "Regulatory Milestone",
      description: "Secured international licensing and established segregated client fund accounts",
      icon: FiShield,
      stats: "Fully Regulated",
      color: "from-primary to-mate",
      gradient: "from-mate/20 via-mate/10 to-transparent",
      highlight: true,
    },
    {
      year: "2020",
      title: "Platform Launch",
      description: "Launched MT4 and MT5 platforms with competitive spreads and instant execution",
      icon: FiSmartphone,
      stats: "10,000+ Downloads",
      color: "from-primary to-mate",
      gradient: "from-secondary/20 via-secondary/10 to-transparent",
    },
    {
      year: "2021",
      title: "MENA Expansion",
      description: "Opened regional headquarters in Dubai to better serve Middle Eastern traders",
      icon: FiGlobe,
      stats: "15+ Countries",
      color: "from-primary to-mate",
      gradient: "from-primary/20 via-primary/10 to-transparent",
    },
    {
      year: "2022",
      title: "Islamic Accounts",
      description: "Introduced swap-free accounts tailored for Muslim traders across the region",
      icon: FiUsers,
      stats: "5,000+ Islamic Accounts",
      color: "from-primary to-mate",
      gradient: "from-mate/20 via-mate/10 to-transparent",
      highlight: true,
    },
    {
      year: "2023",
      title: "Product Expansion",
      description: "Added commodities, indices, and crypto CFDs to our trading portfolio",
      icon: FiBarChart2,
      stats: "60+ Trading Instruments",
      color: "from-primary to-mate",
      gradient: "from-secondary/20 via-secondary/10 to-transparent",
    },
    {
      year: "2024",
      title: "Award-Winning Service",
      description: "Recognized as 'Best Broker for Customer Support' by industry leaders",
      icon: FiAward,
      stats: "98% Client Satisfaction",
      color: "from-primary to-mate",
      gradient: "from-primary/20 via-primary/10 to-transparent",
      highlight: true,
    },
    {
      year: "2025",
      title: "Global Community",
      description: "Empowering over 50,000 traders across 35+ countries worldwide",
      icon: FiTrendingUp,
      stats: "50,000+ Active Traders",
      color: "from-primary to-mate",
      gradient: "from-secondary/20 via-secondary/10 to-transparent",
    },
  ]

  return (
    <section
      className="py-32 relative overflow-hidden bg-background"
      ref={containerRef}>
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle candlestick pattern background */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/022/659/642/small/3d-growth-stock-diagram-financial-graph-isolated-on-transparent-background-business-candlestick-chart-investment-market-trade-exchange-analysis-and-economy-finance-report-png.png')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            filter: "grayscale(100%)",
          }}
        />
        
        {/* Animated trading bars */}
        <div className="absolute top-20 left-10 opacity-20">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: [20, 40, 20] }}
              transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
              className="w-1 bg-primary/30 mx-0.5 inline-block"
              style={{ height: 20 + i * 10 }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mate border border-black/10 mb-6">
            <FiCalendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/80">
              Our Journey Since 2018
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The AuroMarkets{" "}
            <motion.span
              initial={{ backgroundPosition: "200% center" }}
              whileInView={{ backgroundPosition: "0% center" }}
              transition={{ duration: 2, ease: "linear" }}
              className="text-primary">
              Story
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-mate max-w-3xl mx-auto leading-relaxed">
            From a bold vision to a trusted broker — our journey of empowering traders across the globe.
          </motion.p>
        </motion.div>

        {/* Quick Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { label: "Years of Experience", value: "7+", icon: FiCalendar },
            { label: "Active Traders", value: "50K+", icon: FiUsers },
            { label: "Daily Volume", value: "$100M+", icon: FiDollarSign },
            { label: "Countries", value: "35+", icon: FiGlobe },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-sm border border-black/5 rounded-xl p-4 text-center"
            >
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="text-xl font-bold text-black">{stat.value}</div>
              <div className="text-xs text-mate">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content - Advanced Timeline */}
        <div className="relative">
          {/* Central timeline line with animated gradient */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-b from-primary via-secondary to-primary"
            />
          </div>

          {/* Milestones Grid */}
          <div className="grid lg:grid-cols-2 gap-x-0 gap-y-20 lg:gap-y-32">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: "spring",
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  onMouseEnter={() => setHoveredYear(milestone.year)}
                  onMouseLeave={() => setHoveredYear(null)}
                  className={`relative ${isLeft ? "lg:pr-20" : "lg:pl-20 lg:col-start-2"} ${index === milestones.length - 1 && !isLeft ? "lg:col-start-2" : ""}`}>
                  {/* Year Badge */}
                  <motion.div
                    animate={
                      hoveredYear === milestone.year
                        ? { scale: 1.1, rotate: 5 }
                        : { scale: 1, rotate: 0 }
                    }
                    className={`absolute ${isLeft ? "lg:right-0 lg:translate-x-1/2" : "lg:left-0 lg:-translate-x-1/2"} top-0 z-20`}>
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${milestone.color} rounded-full blur-lg opacity-50`}
                      />
                      <div
                        className={`relative w-20 h-20 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center shadow-2xl border-4 border-white`}>
                        <span className="text-white text-lg font-bold tracking-tight">
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <div
                    className={`relative ${isLeft ? "lg:mr-12" : "lg:ml-12"} mt-16 lg:mt-0`}>
                    <div className="relative bg-white/80 backdrop-blur-xl border border-black/10 rounded-3xl p-8 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                      {/* Corner Accents */}
                      <div
                        className={`absolute top-0 ${isLeft ? "right-0" : "left-0"} w-32 h-32 bg-gradient-to-br ${milestone.color} opacity-5 rounded-full -translate-y-16 ${isLeft ? "translate-x-16" : "-translate-x-16"}`}
                      />

                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${milestone.color} shadow-lg mb-6`}>
                        <milestone.icon className="w-6 h-6 text-white" />
                      </motion.div>

                      {/* Highlight Badge */}
                      {milestone.highlight && (
                        <div className="absolute top-4 right-4">
                          <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <span className="text-xs font-medium text-primary">
                              Key Milestone
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-black mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-mate mb-4 leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Stats */}
                      <div className="pt-4 border-t border-black/10">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${milestone.color}`}
                          />
                          <span className="text-sm font-medium text-mate">
                            {milestone.stats}
                          </span>
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`}
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-mate text-lg">
            Join 50,000+ traders who already trust AuroMarkets FX
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Start Trading Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}