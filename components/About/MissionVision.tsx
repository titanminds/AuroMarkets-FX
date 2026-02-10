"use client"
import { motion } from "framer-motion"
import {
  FiTarget,
  FiEye,
  FiAward,
  FiChevronRight,
  FiGlobe,
} from "react-icons/fi"
import { useRef } from "react"

export default function MissionVision() {
  const containerRef = useRef(null)

  const cards = [
    {
      icon: FiTarget,
      title: "Our Mission",
      description:
        "To empower brokerage companies with cutting-edge CRM solutions and white-label websites that streamline operations and drive growth.",
      gradient: "from-primary to-mate",
      color: "from-primary to-mate",
      items: [
        "Simplify complex workflows",
        "Enhance client relationships",
        "Boost operational efficiency",
        "Drive sustainable growth",
      ],
      stats: "250+ Companies Empowered",
    },
    {
      icon: FiEye,
      title: "Our Vision",
      description:
        "To become the global leader in brokerage technology solutions, setting new standards for innovation, reliability, and client success.",
      gradient: "from-primary to-mate",
      color: "from-primary to-mate",
      items: [
        "Global market leadership",
        "Continuous innovation",
        "Industry standard setting",
        "Unmatched client success",
      ],
      stats: "35+ Countries Served",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Black and White background image */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/022/659/642/small/3d-growth-stock-diagram-financial-graph-isolated-on-transparent-background-business-candlestick-chart-investment-market-trade-exchange-analysis-and-economy-finance-report-png.png')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            filter: "grayscale(100%)",
          }}
        />
      </div>

      <div
        className="max-w-7xl mx-auto px-4 md:px-12 relative z-10"
        ref={containerRef}>
        {/* Section Header with Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mate border border-black/10 mb-6">
            <FiGlobe className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/80">
              Global Impact
            </span>
          </div>

          
           <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Mission </span>& Vision
          </h2>

          <p className="text-lg md:text-xl text-mate max-w-3xl mx-auto leading-relaxed">
            Driving innovation in brokerage technology to create seamless
            experiences for brokers and their clients worldwide.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 relative">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="relative group">
              {/* Animated Border */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
              />

              {/* Main Card */}
              <div className="relative bg-white/80 backdrop-blur-xl border border-black/10 rounded-3xl p-8 h-full overflow-hidden">
                {/* Corner Accents */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${card.gradient} opacity-5 rounded-full -translate-y-12 translate-x-12`}
                />
                <div
                  className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${card.gradient} opacity-5 rounded-full translate-y-16 -translate-x-16`}
                />

                {/* Icon with Floating Animation */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${card.color} shadow-lg shadow-primary/30 mb-6 relative z-10`}>
                  <card.icon className="w-7 h-7 text-white" />
                </motion.div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-black">
                      {card.title}
                    </h3>
                    <FiChevronRight className="w-5 h-5 text-mate group-hover:text-primary group-hover:translate-x-2 transition-all" />
                  </div>

                  <p className="text-mate mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {card.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-mate group/item">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.color} flex-shrink-0`}
                        />
                        <span className="group-hover/item:text-black transition-colors">
                          {item}
                        </span>
                        <div
                          className={`ml-auto w-6 h-px bg-gradient-to-r ${card.color} opacity-0 group-hover/item:opacity-100 transition-opacity`}
                        />
                      </motion.li>
                    ))}
                  </ul>

                  {/* Stats Badge */}
                  <div className="pt-6 border-t border-black/10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/10">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.color}`}
                      />
                      <span className="text-sm font-medium text-mate">
                        {card.stats}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
