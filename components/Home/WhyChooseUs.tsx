"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  FaMobileAlt,
  FaBolt,
  FaMicrochip,
  FaChartLine,
  FaCreditCard,
  FaRobot,
  FaNewspaper,
  FaBullhorn,
  FaChevronDown,
  FaChevronUp,
  FaNetworkWired,
  FaCircle,
  FaCheckCircle,
} from "react-icons/fa"
import {
  SiTableau,
  SiGoogleanalytics,
  SiTradingview,
  SiTwilio,
  SiAmazonroute53,
} from "react-icons/si"

interface NodeProps {
  label: string
  className: string
  align?: "left" | "right" | "center"
  index: number
  isMobile?: boolean
  icon: React.ReactNode
}

const Node = ({
  label,
  className,
  align = "center",
  index,
  isMobile = false,
  icon,
}: NodeProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className={`absolute flex flex-col ${align === "left" ? "items-start" : align === "right" ? "items-end" : "items-center"} ${className} ${isMobile ? "relative !static" : ""}`}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}>
      <motion.div
        animate={
          isHovered
            ? { scale: 1.1, y: -5, boxShadow: "0 10px 40px rgba(255, 174, 0, 0.25)" }
            : {}
        }
        className="flex items-center gap-3 bg-background/90 backdrop-blur-sm border border-primary/20 shadow-md px-4 py-2.5 rounded-full hover:shadow-xl transition-all">
        <span className="text-primary">{icon}</span>
        <span className="text-sm font-semibold text-foreground tracking-wide uppercase">
          {label}
        </span>
      </motion.div>
    </motion.div>
  )
}

export default function Ecosystem() {
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [isExpanded, setIsExpanded] = useState(false)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const mobileNodes = [
    {
      label: "Registration",
      icon: <FaMobileAlt className="w-4 h-4 text-primary" />,
      gradient: "from-primary/10 via-primary/5 to-background",
    },
    {
      label: "Traders Tools",
      icon: <FaRobot className="w-4 h-4 text-primary" />,
      gradient: "from-primary/10 via-primary/5 to-background",
    },
    {
      label: "Payments",
      icon: <FaCreditCard className="w-4 h-4 text-primary" />,
      gradient: "from-primary/10 via-primary/5 to-background",
    },
    {
      label: "Platforms",
      icon: <SiAmazonroute53 className="w-4 h-4 text-primary" />,
      gradient: "from-primary/10 via-primary/5 to-background",
    },
    {
      label: "BI & Analytics",
      icon: <FaChartLine className="w-4 h-4 text-primary" />,
      gradient: "from-primary/10 via-primary/5 to-background",
    },
    {
      label: "VOIP & Comms",
      icon: <FaMicrochip className="w-4 h-4 text-primary" />,
      gradient: "from-primary/10 via-primary/5 to-background",
    },
    {
      label: "News & Signals",
      icon: <FaNewspaper className="w-4 h-4 text-primary" />,
      gradient: "from-primary/10 via-primary/5 to-background",
    },
    {
      label: "Marketing",
      icon: <FaBullhorn className="w-4 h-4 text-primary" />,
      gradient: "from-primary/10 via-primary/5 to-background",
    },
  ]

  const categories = [
    {
      id: "all",
      label: "All",
      icon: <FaNetworkWired className="text-primary" />,
    },
    { id: "tools", label: "Tools", icon: <FaRobot className="text-primary" /> },
    {
      id: "payments",
      label: "Payments",
      icon: <FaCreditCard className="text-primary" />,
    },
    {
      id: "platforms",
      label: "Platforms",
      icon: <SiAmazonroute53 className="text-primary" />,
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: <FaChartLine className="text-primary" />,
    },
    {
      id: "marketing",
      label: "Marketing",
      icon: <FaBullhorn className="text-primary" />,
    },
  ]

  return (
    <section className="relative w-full py-8 lg:py-32 bg-[#f2f3f5] overflow-hidden font-sans">
      {/* Header */}
      <div className="text-center mb-8 lg:mb-20 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 bg-mate px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-primary/10">
          <h4 className="text-xs font-semibold text-background/70 tracking-[0.3em] uppercase flex items-center gap-2">
            ECOSYSTEM
          </h4>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 px-4 text-foreground">
          Grow your business with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary animate-gradient-x">
            No Constraints
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-mate/80 text-sm lg:text-base max-w-2xl mx-auto">
          AuroMarkets FX is fully integrated to cover all your needs
        </motion.p>
      </div>

      {/* Mobile/Tablet View */}
      {isMobile ? (
        <div className="px-4 relative z-10">
          {/* Category Filter with Icons */}
          <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-full text-xs font-medium transition-all ${
                  activeTab === category.id
                    ? "bg-mate text-background shadow-lg"
                    : "bg-background text-foreground border border-primary/20 hover:border-primary"
                }`}>
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>

          {/* Stats Counter */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              {
                label: "Total Integrations",
                value: "300+",
                icon: <FaNetworkWired className="text-primary" />,
              },
              {
                label: "Active Partners",
                value: "500+",
                icon: <FaCircle className="text-primary" />,
              },
              {
                label: "Countries",
                value: "150+",
                icon: <FaCircle className="text-primary" />,
              },
              {
                label: "Uptime",
                value: "99.9%",
                icon: <FaBolt className="text-primary" />,
              },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background rounded-2xl p-4 shadow-lg border border-primary/10">
                <div className="flex items-center gap-2 mb-2">
                  {stat.icon}
                  <span className="text-lg font-bold text-foreground">
                    {stat.value}
                  </span>
                </div>
                <p className="text-xs text-mate">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Grid - Simplified Cards without numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {(isExpanded ? mobileNodes : mobileNodes.slice(0, 6)).map(
              (node, index) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => setHoveredNode(node.label)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`bg-gradient-to-br ${node.gradient} border border-primary/10 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all cursor-pointer`}>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${node.gradient} border border-primary/10`}>
                      {node.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-foreground text-sm">
                    {node.label}
                  </h3>
                  {hoveredNode === node.label && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-primary/10">
                      <p className="text-xs text-mate flex items-center gap-2">
                        <FaCheckCircle className="text-primary w-3 h-3" />
                        Fully integrated solution
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ),
            )}
          </div>

          {/* Expand/Collapse Button */}
          {mobileNodes.length > 6 && (
            <div className="text-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary text-background font-medium text-sm shadow-lg hover:shadow-xl transition-all">
                {isExpanded ? (
                  <>
                    <FaChevronUp className="w-4 h-4" />
                    Show Less
                  </>
                ) : (
                  <>
                    <FaChevronDown className="w-4 h-4" />
                    Show All ({mobileNodes.length} integrations)
                  </>
                )}
              </motion.button>
            </div>
          )}

          {/* Mobile Central Hub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-12">
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/10 to-primary/10 blur-3xl rounded-full"
            />
            <div className="relative bg-gradient-to-br from-background via-primary/5 to-background border-2 border-primary/10 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
              <div className="text-center">
                <div className="flex justify-center">
                  <img
                    src="/assets/images/Logo-W.png"
                    alt="Logo"
                    className="h-20 w-auto object-contain"
                  />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-xs text-mate">
                  <div className="text-center">
                    <div className="font-bold text-primary">Real-time</div>
                    <div>Data Sync</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">Secure</div>
                    <div>API Layers</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">Scalable</div>
                    <div>Architecture</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        /* Desktop View */
        <div className="relative w-full max-w-[1200px] h-[600px] flex items-center justify-center mx-auto px-4">
          {/* Animated Connection Lines & Rings */}
          <div className="absolute inset-0 z-0">
            <svg viewBox="0 0 1200 600" className="w-full h-full fill-none">
              {/* Gradient Definition */}
              <defs>
                <linearGradient
                  id="gradient-ring"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="50%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="var(--primary)" />
                </linearGradient>
                <linearGradient
                  id="gradient-line"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%">
                  <stop
                    offset="0%"
                    stopColor="var(--primary)"
                    stopOpacity="0.6"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--primary)"
                    stopOpacity="0.6"
                  />
                </linearGradient>
              </defs>

              {/* Animated Outer Rings */}
              {[140, 160, 180].map((radius, i) => (
                <motion.circle
                  key={i}
                  cx="600"
                  cy="300"
                  r={radius}
                  stroke="url(#gradient-ring)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  strokeOpacity={0.3 + i * 0.7}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30 + i * 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* Connection Lines - All 8 nodes have pointing lines */}
              {[
                // Top - Registration
                { d: "M601,101 L600,281", id: 1 },
                // Bottom - Marketing
                { d: "M601,501 L600,281", id: 2 },
                // Top Left - Traders Tools
                { d: "M490,260 Q400,260 350,180", id: 3 },
                // Middle Left - Payments
                { d: "M540,301 L340,300", id: 4 },
                // Bottom Left - Platforms
                { d: "M490,340 Q400,340 350,420", id: 5 },
                // Top Right - BI & Analytics
                { d: "M710,260 Q800,260 850,180", id: 6 },
                // Middle Right - VOIP & Comms
                { d: "M540,301 L850,300", id: 7 },
                // Bottom Right - News & Signals
                { d: "M710,340 Q800,340 850,420", id: 8 },
              ].map((line) => (
                <motion.path
                  key={line.id}
                  d={line.d}
                  stroke="url(#gradient-line)"
                  strokeWidth="1.2"
                  strokeOpacity="0.9"
                  strokeDasharray="5 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: line.id * 0.2,
                    ease: "easeOut",
                  }}
                />
              ))}
            </svg>
          </div>

          {/* Central Hub Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative z-20"
            whileHover={{ scale: 1.05 }}>
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
              className="relative w-48 h-48 rounded-full border-8 border-transparent bg-gradient-to-r from-primary via-primary to-primary/90 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-background flex flex-col items-center justify-center p-8 backdrop-blur-sm">
                <div className="shrink-0">
                  <img
                    src="/assets/images/Logo-W.png"
                    alt="Logo"
                    className="h-12 md:h-20 w-auto object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Desktop Nodes - Only show tags without numbers */}
          <Node
            label="Registration"
            className="top-10 left-1/2 -translate-x-1/2"
            index={0}
            icon={mobileNodes[0].icon}
          />
          <Node
            label="Traders Tools"
            className="top-30 left-52"
            align="left"
            index={1}
            icon={mobileNodes[1].icon}
          />
          <Node
            label="Payments"
            className="top-1/2 left-48 -translate-y-1/2"
            align="left"
            index={2}
            icon={mobileNodes[2].icon}
          />
          <Node
            label="Platforms"
            className="bottom-32 left-54"
            align="left"
            index={3}
            icon={mobileNodes[3].icon}
          />
          <Node
            label="Login"
            className="top-30 right-56"
            align="right"
            index={4}
            icon={mobileNodes[4].icon}
          />
          <Node
            label="Trading Accounts"
            className="top-1/2 right-30 -translate-y-1/2"
            align="right"
            index={5}
            icon={mobileNodes[5].icon}
          />
          <Node
            label="News & Signals"
            className="bottom-30 right-52"
            align="right"
            index={6}
            icon={mobileNodes[6].icon}
          />
          <Node
            label="Marketing"
            className="bottom-10 left-1/2 -translate-x-1/2"
            index={7}
            icon={mobileNodes[7].icon}
          />
        </div>
      )}
    </section>
  )
}