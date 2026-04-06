"use client"

import React, { useEffect, useRef, useState } from "react"
import { BiBitcoin, BiBriefcase, BiChevronLeft, BiChevronRight, BiTrendingUp } from "react-icons/bi"
import { FaDollarSign } from "react-icons/fa"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "tv-market-summary": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        direction?: string
      }
    }
  }
}

const PricingList = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<string>("forex")
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Tab icons mapping
  const tabIcons = {
    forex: <FaDollarSign className="w-4 h-4" />,
    indices: <BiTrendingUp className="w-4 h-4" />,
    crypto: <BiBitcoin className="w-4 h-4" />,
    commodities: <BiBriefcase className="w-4 h-4" />,
  }

  // Multiple widgets configuration with fixed symbols
  const widgetConfigs = {
    forex: [
      { symbol: "FX:EURUSD", name: "EUR/USD", change: "+0.12%" },
      { symbol: "FX:GBPUSD", name: "GBP/USD", change: "-0.08%" },
      { symbol: "FX:USDJPY", name: "USD/JPY", change: "+0.23%" },
      { symbol: "FX:USDCHF", name: "USD/CHF", change: "-0.15%" },
      { symbol: "FX:AUDUSD", name: "AUD/USD", change: "+0.05%" },
    ],
    indices: [
      { symbol: "FOREXCOM:SPXUSD", name: "S&P 500", change: "+0.45%" },
      { symbol: "FOREXCOM:NSXUSD", name: "NASDAQ 100", change: "+0.67%" },
      { symbol: "TVC:DJI", name: "Dow Jones", change: "+0.31%" },
      { symbol: "TVC:DAX", name: "DAX Index", change: "-0.22%" },
      { symbol: "TVC:FTSE", name: "FTSE 100", change: "-0.18%" },
    ],
    crypto: [
      { symbol: "BINANCE:BTCUSDT", name: "Bitcoin", change: "+2.34%" },
      { symbol: "BINANCE:ETHUSDT", name: "Ethereum", change: "+1.89%" },
      { symbol: "BINANCE:BNBUSDT", name: "BNB", change: "+0.76%" },
      { symbol: "BINANCE:SOLUSDT", name: "Solana", change: "+3.45%" },
      { symbol: "BINANCE:XRPUSDT", name: "XRP", change: "-0.92%" },
    ],
    commodities: [
      { symbol: "TVC:GOLD", name: "Gold", change: "+0.34%" },
      { symbol: "TVC:USOIL", name: "Crude Oil", change: "-1.23%" },
      { symbol: "TVC:SILVER", name: "Silver", change: "+0.56%" },
      { symbol: "TVC:WHEAT", name: "Wheat", change: "+0.89%" },
      { symbol: "TVC:NATGAS", name: "Natural Gas", change: "-2.11%" },
    ],
  }

  useEffect(() => {
    // Clear previous widgets
    if (containerRef.current) {
      containerRef.current.innerHTML = ""
    }

    // Add multiple widgets
    const loadWidgets = async () => {
      if (!containerRef.current) return

      const currentWidgets =
        widgetConfigs[activeTab as keyof typeof widgetConfigs]

      currentWidgets.forEach((widget) => {
        const widgetContainer = document.createElement("div")
        widgetContainer.className = "flex-shrink-0 w-[280px] mx-2"

        const script = document.createElement("script")
        script.src =
          "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js"
        script.type = "text/javascript"
        script.async = true
        script.innerHTML = JSON.stringify({
          symbol: widget.symbol,
          colorTheme: "light",
          isTransparent: true,
          locale: "en",
          width: "280",
          height: "140",
        })

        widgetContainer.appendChild(script)
        containerRef.current?.appendChild(widgetContainer)
      })
    }

    loadWidgets()
  }, [activeTab])

  // Check scroll position for navigation buttons
  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener('scroll', checkScroll)
      checkScroll()
      return () => slider.removeEventListener('scroll', checkScroll)
    }
  }, [activeTab])

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 300
      const newScrollLeft = sliderRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      sliderRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="relative overflow-hidden font-sans  py-20 bg-white">
      {/* Animated mate Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-2/4 w-102 h-102 bg-primary/50 rounded-full blur-3xl animate-pulse"></div>
        {/* <div className="absolute bottom-20 right-10 w-80 h-80 bg-mate rounded-full blur-3xl animate-pulse delay-1000"></div> */}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Enhanced Styling */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
              <h4 className="relative text-xs font-bold bg-primary text-mate tracking-[0.3em] uppercase px-6 py-3 rounded-full shadow-lg">
                Market Insights
              </h4>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 px-4 text-mate">
            Live{' '}
            <span className="relative">
              <span className="relative z-10 bg-primary bg-clip-text text-transparent">
                Market Prices
              </span>
             
            </span>
          </h2>
          
          <p className="text-mate/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Real-time pricing for major financial instruments across global markets, updated every second
          </p>
        </div>

        {/* Category Tabs - Enhanced Design */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(widgetConfigs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`group relative px-6 py-3.5 rounded-full font-medium transition-all duration-300 capitalize flex items-center gap-2 ${
                activeTab === tab
                  ? "bg-primary text-mate shadow-lg shadow-primary/25 scale-105"
                  : "bg-mate backdrop-blur-sm text-white/50 hover:bg-mate hover:shadow-md hover:scale-105"
              }`}>
              <span className={`transition-transform duration-300 ${
                activeTab === tab ? "scale-110" : "group-hover:scale-110"
              }`}>
                {tabIcons[tab as keyof typeof tabIcons]}
              </span>
              <span className="relative">
                {tab}
                {activeTab === tab && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-mate/50 rounded-full"></span>
                )}
              </span>
            </button>
          ))}
        </div>

        {/* TradingView Widgets Carousel */}
        <div className="relative group">
          {/* Navigation Buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-mate rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-gray-100"
              aria-label="Scroll left"
            >
              <BiChevronLeft className="w-5 h-5 text-white/50" />
            </button>
          )}
          
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-mate rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-gray-100"
              aria-label="Scroll right"
            >
              <BiChevronRight className="w-5 h-5 text-white/50" />
            </button>
          )}

          {/* Widgets Container with Glass Effect */}
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-mate/20 shadow-2xl">
            <div 
              ref={sliderRef}
              className="overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div 
                ref={containerRef}
                className="flex flex-nowrap gap-4 py-2"
                style={{ animation: 'slideIn 0.5s ease-out' }}
              />
            </div>
          </div>
        </div>

      
      </div>

      {/* Custom CSS for animations and scrollbar hiding */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}

export default PricingList