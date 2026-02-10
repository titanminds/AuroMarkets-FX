"use client";

import React, { useEffect, useRef, memo } from "react";

export const TradingViewTicker = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent duplicate script injection
    if (container.current && !container.current.querySelector("script")) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      
      // Your configuration settings
      script.innerHTML = JSON.stringify({
        symbols: [
          { description: "XAUUSD", proName: "TVC:GOLD" },
          { description: "EURUSD", proName: "OANDA:EURUSD" },
          { description: "GBPUSD", proName: "OANDA:GBPUSD" },
          { description: "USDJPY", proName: "OANDA:USDJPY" },
          { description: "WTIOIL", proName: "TVC:USOIL" },
        ],
        showSymbolLogo: true,
        isTransparent: false,
        displayMode: "compact",
        colorTheme: "light",
        locale: "en",
      });

      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container bg-background" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

// memo helps prevent unnecessary re-renders of the widget
export default memo(TradingViewTicker);