"use client"

import React, { useEffect, useRef, useState } from "react"

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
  const [activeTab, setActiveTab] = useState<string>("forex")

  // Multiple widgets configuration with fixed symbols
  const widgetConfigs = {
    forex: [
      { symbol: "FX:EURUSD", name: "EUR/USD" },
      { symbol: "FX:GBPUSD", name: "GBP/USD" },
      { symbol: "FX:USDJPY", name: "USD/JPY" },
      { symbol: "FX:USDCHF", name: "USD/CHF" },
      { symbol: "FX:AUDUSD", name: "AUD/USD" },
    ],
    indices: [
      { symbol: "FOREXCOM:SPXUSD", name: "S&P 500" },
      { symbol: "FOREXCOM:NSXUSD", name: "NASDAQ 100" },
      { symbol: "TVC:DJI", name: "Dow Jones" },
      { symbol: "TVC:DAX", name: "DAX Index" },
      { symbol: "TVC:FTSE", name: "FTSE 100" },
    ],
    crypto: [
      { symbol: "BINANCE:BTCUSDT", name: "Bitcoin" },
      { symbol: "BINANCE:ETHUSDT", name: "Ethereum" },
      { symbol: "BINANCE:BNBUSDT", name: "BNB" },
      { symbol: "BINANCE:SOLUSDT", name: "Solana" },
      { symbol: "BINANCE:XRPUSDT", name: "XRP" },
    ],
    commodities: [
      { symbol: "TVC:GOLD", name: "Gold" },
      { symbol: "TVC:USOIL", name: "Crude Oil" },
      { symbol: "TVC:SILVER", name: "Silver" },
      { symbol: "TVC:WHEAT", name: "Wheat" },
      { symbol: "TVC:NATGAS", name: "Natural Gas" },
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
        widgetContainer.className = "widget-item"
        widgetContainer.style.cssText =
          "display: inline-block; margin: 8px; min-width: 280px;"

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
          height: "120",
        })

        widgetContainer.appendChild(script)
        containerRef.current?.appendChild(widgetContainer)
      })
    }

    loadWidgets()
  }, [activeTab])

  return (
    <section className="relative overflow-hidden font-sans bg-[#f2f3f5] py-16">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            url('https://capitalfxglobal.com/wp-content/uploads/2023/03/shape-26-1.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2">
            <h4 className="text-[10px] font-bold bg-gray-800 text-white tracking-[0.4em] mb-6 uppercase w-fit mx-auto px-4 py-3 rounded-full">
              Popular pairs
            </h4>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Market <span className="text-primary">Prices </span>& Quotes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-time pricing for major financial instruments across global
            markets
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(widgetConfigs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all capitalize ${
                activeTab === tab
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* TradingView Widgets Grid */}
        <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 border border-gray-100 shadow-xl">
          <div
            ref={containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          />
        </div>
      </div>
    </section>
  )
}

export default PricingList