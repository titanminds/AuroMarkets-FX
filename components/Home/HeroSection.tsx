"use client";

import React, { useRef, memo, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- TradingView Ticker Component ---
const TickerTape = memo(() => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current && !container.current.querySelector("script")) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          { description: "XAUUSD", proName: "TVC:GOLD" },
          { description: "EURUSD", proName: "OANDA:EURUSD" },
          { description: "GBPUSD", proName: "OANDA:GBPUSD" },
          { description: "BTCUSD", proName: "BINANCE:BTCUSDT" },
          { description: "USOIL", proName: "TVC:USOIL" },
        ],
        showSymbolLogo: true,
        isTransparent: true, // Transparent to blend with our mate overlay
        displayMode: "compact",
        colorTheme: "dark",
        locale: "en",
      });
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full border-b border-white/5 bg-mate/40 backdrop-blur-md" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
});

TickerTape.displayName = "TickerTape";

// --- Main Hero Section ---
const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-mate flex flex-col">
      {/* 1. Integrated Ticker at the very top */}
      <div className="relative z-30 pt-20 md:pt-24">
        <TickerTape />
      </div>

      {/* 2. Background Image & Dark Mate Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/bg.png" // Using your provided blue earth background
          alt="Global Trading Background"
          fill
          className="object-cover"
          priority
        />
        {/* The Dark Mate Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-mate/90 via-mate/80 to-mate" />
        
        {/* Animated Glow Accents */}
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        />
      </div>

      {/* 3. Main Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase"
          >
            Institutional Grade Execution
          </motion.span>

          <h1 className="text-5xl md:text-8xl font-bold leading-tight text-white mb-6 tracking-tight">
            Trade the Global <br /> 
            <span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
              Financial Markets
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Access deep liquidity, ultra-low latency, and advanced ECN technology. 
            The professional choice for modern algorithmic traders.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <motion.a
              href="https://portal.mybgfx.com/register"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(var(--primary-rgb), 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-mate font-bold px-10 py-4 rounded-xl text-lg transition-all"
            >
              Start Trading Now
            </motion.a>
            
            <div className="flex items-center gap-8 py-4 px-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
               <div className="text-left">
                  <div className="text-primary font-bold text-xl leading-none">0.0 Pips</div>
                  <div className="text-gray-400 text-xs mt-1 tracking-widest uppercase">Raw Spreads</div>
               </div>
               <div className="w-px h-8 bg-white/10" />
               <div className="text-left">
                  <div className="text-primary font-bold text-xl leading-none">1:1000</div>
                  <div className="text-gray-400 text-xs mt-1 tracking-widest uppercase">Max Leverage</div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 4. Bottom Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative z-20 pb-10 flex justify-center"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;