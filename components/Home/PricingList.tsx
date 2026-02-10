"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuMoveUpRight } from "react-icons/lu";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import { FiGlobe } from "react-icons/fi";

const priceData = [
  {
    pair: "EUR ⇄ USD",
    price: "$1.06199 USD",
    change: "-0.14%",
    sell: "1.06185",
    trend: "down",
  },
  {
    pair: "USD ⇄ JPY",
    price: "$1.22195 USD",
    change: "+0.04%",
    sell: "1.06199",
    trend: "up",
  },
  {
    pair: "USD ⇄ JPY",
    price: "$2.35215 USD",
    change: "+0.07%",
    sell: "2.05279",
    trend: "up",
  },
  {
    pair: "USD ⇄ JPY",
    price: "$1.22195 USD",
    change: "+0.04%",
    sell: "1.06199",
    trend: "up",
  },
  {
    pair: "EUR ⇄ USD",
    price: "$1.06199 USD",
    change: "-0.14%",
    sell: "1.06185",
    trend: "down",
  },
];

const PricingList = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-24 overflow-hidden font-sans bg-[#f2f3f5]">
      {/* ✅ BACKGROUND IMAGE */}
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

      {/* ✅ MAIN CONTENT */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2">
            <h4 className="text-[10px] font-bold text-background/80 bg-mate tracking-[0.4em] mb-6 uppercase w-fit mx-auto px-4 py-3 rounded-full ">
              Popular pairs
            </h4>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Top <span className="text-primary">Pricing List </span>in Market
          </h2>
        </div>

        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {priceData.slice(0, 3).map((item, idx) => (
              <PriceCard key={idx} {...item} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-2/3 mx-auto">
            {priceData.slice(3, 5).map((item, idx) => (
              <PriceCard key={idx} {...item} />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-mate cursor-pointer bg-mate hover:bg-primary transition-all active:scale-95 px-6 py-3 rounded-lg shadow-lg">
            See More Pairs
            <LuMoveUpRight />
          </button>
        </div>
      </div>
    </section>
  );
};

const PriceCard = ({ pair, price, change, sell, trend }: any) => {
  const isUp = trend === "up";

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/90 backdrop-blur-md p-6 rounded-xl border border-gray-100 flex items-center justify-between"
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isUp ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
          }`}
        >
          {isUp ? <BsArrowUpRight /> : <BsArrowDownLeft />}
        </div>

        <div>
          <h4 className="text-sm font-bold text-gray-900">{pair}</h4>
          <p className="text-base font-bold text-gray-600">{price}</p>
        </div>
      </div>

      <div className="text-right">
        <p className={`font-black ${isUp ? "text-green-600" : "text-red-600"}`}>
          {change}
        </p>
        <p className="text-xs text-gray-400">
          Sell at <span className="text-black font-bold">{sell}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default PricingList;
