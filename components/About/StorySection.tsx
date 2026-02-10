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
} from "react-icons/fi"
import { useRef, useState } from "react"

export default function StorySection() {
  const containerRef = useRef(null)
  const [hoveredYear, setHoveredYear] = useState<string | null>(null)

  const milestones = [
    {
      year: "2018",
      title: "Visionary Beginnings",
      description:
        "Founded with a bold vision to transform brokerage technology landscape",
      icon: FiTarget,
      stats: "3 Founding Members",
      color: "from-primary to-mate",
      gradient: "from-primary/20 via-primary/10 to-transparent",
      highlight: true,
    },
    {
      year: "2020",
      title: "CRM Revolution",
      description: "Launched proprietary AI-powered CRM for brokerage firms",
      icon: FiUser,
      stats: "50+ Early Adopters",
      color: "from-primary to-mate",
      gradient: "from-mate/20 via-mate/10 to-transparent",
      highlight: true,
    },
    {
      year: "2022",
      title: "Global Recognition",
      description:
        "Expanded services to 30+ countries with localized solutions",
      icon: FiGlobe,
      stats: "30+ Countries",
      color: "from-primary to-mate",
      gradient: "from-secondary/20 via-secondary/10 to-transparent",
    },
    {
      year: "2023",
      title: "White-Label Platform",
      description: "Introduced comprehensive white-label brokerage solutions",
      icon: FiAward,
      stats: "100+ Partners",
      color: "from-primary to-mate",
      gradient: "from-primary/20 via-primary/10 to-transparent",
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Implemented advanced predictive analytics and automation",
      icon: FiBarChart2,
      stats: "95% Efficiency Gain",
      color: "from-primary to-mate",
      gradient: "from-mate/20 via-mate/10 to-transparent",
      highlight: true,
    },
    {
      year: "2025",
      title: "Market Leadership",
      description:
        "Became the leading technology provider for brokerage firms worldwide",
      icon: FiTrendingUp,
      stats: "250+ Companies",
      color: "from-primary to-mate",
      gradient: "from-secondary/20 via-secondary/10 to-transparent",
    },
  ]

  return (
    <section
      className="py-32 relative overflow-hidden bg-background"
      ref={containerRef}>
      {/* Advanced Background Elements */}

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-black"> </span>
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Journey of{" "}
            <motion.span
              initial={{ backgroundPosition: "200% center" }}
              whileInView={{ backgroundPosition: "0% center" }}
              transition={{ duration: 2, ease: "linear" }}
              className=" text-primary">
              Innovation
            </motion.span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-mate max-w-3xl mx-auto leading-relaxed">
            Transforming brokerage technology through relentless innovation and
            client-focused solutions since 2018.
          </motion.p>
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
            {/* <motion.div
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent"
            /> */}
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
                    delay: index * 0.15,
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
                        ? { scale: 1.1 }
                        : { scale: 1 }
                    }
                    className={`absolute ${isLeft ? "lg:right-0 lg:translate-x-1/2" : "lg:left-0 lg:-translate-x-1/2"} top-0 z-20`}>
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${milestone.color} rounded-full blur-lg opacity-50`}
                      />
                      <div
                        className={`relative w-24 h-24 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center shadow-2xl`}>
                        <span className="text-white text-2xl font-bold tracking-tight">
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <div
                    className={`relative ${isLeft ? "lg:mr-12" : "lg:ml-12"}`}>
                    <div className="relative bg-white/80 backdrop-blur-xl border border-black/10 rounded-3xl p-8 shadow-xl overflow-hidden">
                      {/* Corner Accents */}
                      <div
                        className={`absolute top-0 ${isLeft ? "right-0" : "left-0"} w-32 h-32 bg-gradient-to-br ${milestone.color} opacity-5 rounded-full -translate-y-16 ${isLeft ? "translate-x-16" : "-translate-x-16"}`}
                      />

                      {/* Icon */}
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${milestone.color} shadow-lg mb-6`}>
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Highlight Badge */}
                      {milestone.highlight && (
                        <div className="absolute top-4 right-4">
                          <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <span className="text-xs font-medium text-primary">
                              Milestone
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
      </div>
    </section>
  )
}
