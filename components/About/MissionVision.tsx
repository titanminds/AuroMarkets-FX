"use client"
import { motion } from "framer-motion"
import {
  FiTarget,
  FiEye,
  FiAward,
  FiChevronRight,
  FiGlobe,
  FiTrendingUp,
  FiShield,
  FiUsers,
} from "react-icons/fi"
import { useRef } from "react"

export default function MissionVision() {
  const containerRef = useRef(null)

  const cards = [
    {
      icon: FiTarget,
      title: "Our Mission",
      description:
        "To empower traders of all levels with transparent access to global financial markets, providing cutting-edge technology, competitive spreads, and exceptional support.",
      gradient: "from-primary to-mate",
      color: "from-primary to-mate",
      items: [
        "Democratize access to forex trading",
        "Provide institutional-grade tools for retail traders",
        "Ensure transparent and fair trading conditions",
        "Empower traders with education and insights",
      ],
      stats: "$2B+ Monthly Trading Volume",
    },
    {
      icon: FiEye,
      title: "Our Vision",
      description:
        "To become the most trusted and innovative forex broker in emerging markets, bridging the gap between local traders and global financial opportunities.",
      gradient: "from-primary to-mate",
      color: "from-primary to-mate",
      items: [
        "Leading broker in MENA region",
        "Pioneer in Islamic trading accounts",
        "Set new standards for broker transparency",
        "Create a community of successful traders",
      ],
      stats: "50,000+ Active Traders",
    },
  ]

  const values = [
    {
      icon: FiShield,
      title: "Trust & Security",
      description: "Segregated client funds and regulated operations",
    },
    {
      icon: FiTrendingUp,
      title: "Market Access",
      description: "60+ currency pairs, commodities, and indices",
    },
    {
      icon: FiUsers,
      title: "Client-Centric",
      description: "24/7 multilingual support and personal account managers",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Financial Market Background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/022/659/642/small/3d-growth-stock-diagram-financial-graph-isolated-on-transparent-background-business-candlestick-chart-investment-market-trade-exchange-analysis-and-economy-finance-report-png.png')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            filter: "grayscale(100%)",
          }}
        />
        
        {/* Animated Candlesticks Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-1 h-16 bg-primary/20 rotate-12"></div>
          <div className="absolute top-40 right-20 w-1 h-24 bg-primary/20 -rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-20 bg-primary/20 rotate-45"></div>
          <div className="absolute bottom-40 right-1/3 w-1 h-32 bg-primary/20 -rotate-45"></div>
        </div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mate border border-mate/10 mb-6">
            <FiGlobe className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/80">
              MyBGFx - Your Trusted Broker
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Mission </span>& Vision
          </h2>

          <p className="text-lg md:text-xl text-mate max-w-3xl mx-auto leading-relaxed">
            Building a bridge between ambitious traders and global forex markets
            through technology, transparency, and trust.
          </p>
        </motion.div>

        {/* Core Values Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/50 backdrop-blur-sm border border-mate/5 rounded-xl p-6 text-center hover:border-primary/20 transition-all hover:-translate-y-1"
            >
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-3">
                <value.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-mate mb-1">{value.title}</h3>
              <p className="text-sm text-mate">{value.description}</p>
            </motion.div>
          ))}
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
              <div className="relative bg-white/80 backdrop-blur-xl border border-mate/10 rounded-3xl p-8 h-full overflow-hidden">
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
                    <h3 className="text-2xl font-bold text-mate">
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
                        <span className="group-hover/item:text-mate transition-colors">
                          {item}
                        </span>
                        <div
                          className={`ml-auto w-6 h-px bg-gradient-to-r ${card.color} opacity-0 group-hover/item:opacity-100 transition-opacity`}
                        />
                      </motion.li>
                    ))}
                  </ul>

                  {/* Stats Badge */}
                  <div className="pt-6 border-t border-mate/10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-mate/10">
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

        {/* Bottom Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white border border-mate/10 rounded-full">
            <FiAward className="w-5 h-5 text-primary" />
            <span className="text-sm text-mate">
              Regulated Broker | Segregated Accounts | Negative Balance Protection
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}