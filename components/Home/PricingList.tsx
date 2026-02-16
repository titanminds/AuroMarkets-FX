"use client"

import React, { useEffect, useRef } from "react"

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
  useEffect(() => {
    // Load TradingView widget script
    const script = document.createElement("script")
    script.src =
      "https://widgets.tradingview-widget.com/w/en/tv-market-summary.js"
    script.type = "module"
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector(
        'script[src="https://widgets.tradingview-widget.com/w/en/tv-market-summary.js"]',
      )
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <section className="relative  overflow-hidden font-sans bg-[#f2f3f5]">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            url('https://capitalfxglobal.com/wp-content/uploads/2023/03/shape-26-1.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Optional subtle texture layer */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2">
            <h4 className="text-[10px] font-bold text-background/80 bg-mate tracking-[0.4em] mb-6 uppercase w-fit mx-auto px-4 py-3 rounded-full">
              Popular pairs
            </h4>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Top <span className="text-primary">Pricing List </span>in Market
          </h2>
        </div>

        {/* TradingView Widget - Full Width */}
        <div className=" w-full bg-white/90 backdrop-blur-md rounded-xl p-6 border border-gray-100">
          <div
            dangerouslySetInnerHTML={{
              __html: `<tv-market-summary direction="horizontal"></tv-market-summary>`,
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default PricingList
