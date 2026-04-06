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
        isTransparent: true,
        displayMode: "compact",
        colorTheme: "dark",
        locale: "en",
      });
      container.current.appendChild(script);
    }
  }, []);

  return (
    /* The mask-image creates the faded/blurry edges on left/right */
    <div 
      className="w-full max-w-4xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]" 
      ref={container}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
});

TickerTape.displayName = "TickerTape";

// --- Main Hero Section ---
const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-mate flex flex-col">
      
      {/* 1. Background Image & Dark Mate Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/bg.png" 
          alt="Global Trading Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mate/95 via-mate/80 to-mate" />
        
        {/* Animated Glow Accents */}
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[140px]"
        />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl flex flex-col items-center"
        >
          {/* Badge */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 border border-primary/20 rounded-full bg-primary/5 text-primary text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase"
          >
            Institutional Grade Execution
          </motion.span>

          <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] text-white mb-6 tracking-tight">
            Trade the Global <br /> 
            <span className="text-primary">
              Financial Markets
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
            Access deep liquidity, ultra-low latency, and advanced ECN technology. 
            The professional choice for modern algorithmic traders.
          </p>

          {/* 3. Ticker Section (Smaller width, blurry sides) */}
          <div className="w-full mb-10">
            <TickerTape />
          </div>

          {/* 4. Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://portal.mybgfx.com/register"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(var(--primary-rgb), 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center bg-primary text-mate font-extrabold px-12 py-5 rounded-2xl text-xl tracking-tight transition-all"
            >
              Start Trading Now
            </motion.a>
          </motion.div>
          
        </motion.div>
      </div>

      {/* 5. Bottom Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-20 pb-12 flex justify-center opacity-40"
      >
        <div className="w-5 h-9 border border-white/30 rounded-full flex justify-center pt-2">
          <motion.div 
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1.5 bg-primary rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;