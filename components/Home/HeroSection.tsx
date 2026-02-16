"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative bg-background w-full h-screen overflow-hidden flex items-center justify-center px-4">
      {/* Video Background */}
      <div className="absolute top-0 inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/video.mp4" type="video/mp4" />
        </video>

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-mate via-mate/30 to-mate"></div>
      </div>

      {/* --- Main Content --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.6,
        }}
        className="relative z-10 max-w-4xl text-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            staggerChildren: 0.1,
          }}
          className="text-4xl md:text-6xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary drop-shadow-lg"
          >
            Start
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white drop-shadow-lg"
          >
            {" "}
            your journey towards
            <br />
            your{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white drop-shadow-lg"
          >
            financial{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white drop-shadow-lg"
          >
            Growth
            <br />
            in Online Forex{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-primary drop-shadow-lg"
          >
            Trading
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
          }}
          className="mt-6 text-white/90 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg"
        >
          Step into world's largest financial market to seize global
          opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.4,
          }}
          className="mt-10"
        >
          <motion.a
            href="https://portal.auromarketsfx.com/register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary w-fit text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 mx-auto hover:bg-primary/90 cursor-pointer transition-all shadow-2xl backdrop-blur-sm"
          >
            Open A/C
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17l10-10M7 7h10v10" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Reviews */}
      </motion.div>
    </section>
  );
};

export default HeroSection;
