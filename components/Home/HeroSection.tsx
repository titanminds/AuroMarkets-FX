// "use client";
// import React, { useRef } from "react";
// import { motion } from "framer-motion";

// export const HeroSection: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);

//   return (
//     <section className="relative bg-background w-full h-screen overflow-hidden flex items-center justify-center px-4">
//       {/* Video Background */}
//       <div className="absolute top-0 inset-0 w-full h-full">
//         <video
//           ref={videoRef}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//         >
//           <source src="/assets/videos/video.mp4" type="video/mp4" />
//         </video>

//         {/* Overlay gradient for better text readability */}
//         <div className="absolute inset-0 bg-gradient-to-b from-mate via-mate/30 to-mate"></div>
//       </div>

//       {/* --- Main Content --- */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 1,
//           delay: 0.6,
//         }}
//         className="relative z-10 max-w-4xl text-center"
//       >
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             duration: 0.8,
//             delay: 0.8,
//             staggerChildren: 0.1,
//           }}
//           className="text-4xl md:text-6xl lg:text-6xl font-extrabold text-white leading-tight"
//         >
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-primary drop-shadow-lg"
//           >
//             Start
//           </motion.span>
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="text-white drop-shadow-lg"
//           >
//             {" "}
//             your journey towards
//             <br />
//             your{" "}
//           </motion.span>
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-white drop-shadow-lg"
//           >
//             financial{" "}
//           </motion.span>
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="text-white drop-shadow-lg"
//           >
//             Growth
//             <br />
//             in Online Forex{" "}
//           </motion.span>
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="text-primary drop-shadow-lg"
//           >
//             Trading
//           </motion.span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             duration: 0.8,
//             delay: 1.2,
//           }}
//           className="mt-6 text-white/90 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg"
//         >
//           Step into world's largest financial market to seize global
//           opportunities.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{
//             duration: 0.5,
//             delay: 1.4,
//           }}
//           className="mt-10"
//         >
//           <motion.a
//             href="https://portal.auromarketsfx.com/register"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-primary w-fit text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 mx-auto hover:bg-primary/90 cursor-pointer transition-all shadow-2xl backdrop-blur-sm"
//           >
//             Open A/C
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M7 17l10-10M7 7h10v10" />
//             </svg>
//           </motion.a>
//         </motion.div>

//         {/* Reviews */}
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;
// app/components/HeroSection.tsx
// Hero section for AuroMarkets FX – Next.js (App Router) + TypeScript + Tailwind
// uses global CSS variables defined in your globals.css (see below)
import React from "react"
import Image from "next/image"

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-mate">
      {/* ===== FULL BACKGROUND IMAGE ===== */}
      <div className="absolute  inset-0 z-0">
        <Image
          src="/assets/images/bg1.png"
          alt="Trading desk background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-mate/60" />
      </div>

      {/* subtle grid / glow elements (still behind content) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -top-40 -left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* ===== MAIN CONTENT - CENTERED ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-5xl mx-auto py-30">
        

          {/* HEADLINE */}
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">Trade like a</span>
            <br />
            <span className="text-primary glow">quantitative</span>
            <span className="text-white"> fund</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-10">
            Advanced execution, deep liquidity, and institutional-grade tools.{" "}
            <span className="text-primary font-medium">AuroMarkets FX</span> —
            the broker built for modern algorithmic traders and forward
            thinkers.
          </p>

          {/* CTA + STATS - centered */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <a
              href="https://portal.auromarketsfx.com/register"
              className="group relative bg-primary text-mate font-semibold px-8 py-3 rounded-lg overflow-hidden transition-all duration-300 shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 text-lg">
              <span className="relative z-10 flex items-center gap-2">
                Launch terminal
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              {/* <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary opacity-0 group-hover:opacity-100 transition-opacity" /> */}
            </a>

            <div className="flex items-center gap-6 text-sm font-mono">
              <div>
                <div className="text-primary text-2xl font-bold">0.0 PIP</div>
                <div className="text-gray-400 text-xs">ECN RAW</div>
              </div>
              <div className="w-px h-8 bg-primary/30" />
              <div>
                <div className="text-primary text-2xl font-bold">1:1000</div>
                <div className="text-gray-400 text-xs">LEVERAGE</div>
              </div>
            </div>
          </div>

          {/* TRUST INDICATORS */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-mono text-gray-300 mb-16">
            <span className="flex items-center gap-1">
              <span className="text-primary">⬤</span> FCA regulated
            </span>
            <span className="flex items-center gap-1">
              <span className="text-primary">⬤</span> 24/7 AI risk
            </span>
            <span className="flex items-center gap-1">
              <span className="text-primary">⬤</span> ultra-low latency
            </span>
          </div>

          {/* ===== HOW TO START TRADING SECTION ===== */}
          <div className="mt-20 pt-10 border-t border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              How do I start trading with{" "}
              <span className="text-primary">AuroMarkets FX</span>?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              {/* Step 1 */}
              <div className="bg-mate/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4 mx-auto">1</div>
                <h3 className="text-white font-semibold text-lg mb-2">Create Account</h3>
                <p className="text-gray-300 text-sm">Sign up in minutes with our streamlined registration process</p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-mate/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4 mx-auto">2</div>
                <h3 className="text-white font-semibold text-lg mb-2">Verify & Fund</h3>
                <p className="text-gray-300 text-sm">Complete verification and deposit funds with multiple payment options</p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-mate/50 backdrop-blur-sm p-6 rounded-xl border border-primary/20">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-4 mx-auto">3</div>
                <h3 className="text-white font-semibold text-lg mb-2">Start Trading</h3>
                <p className="text-gray-300 text-sm">Access our platforms and execute your first trade instantly</p>
              </div>
            </div>
            
            {/* CTA Button for How to Start */}
            <a
              href="https://portal.auromarketsfx.com/register"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-primary text-primary font-semibold px-8 py-4 rounded-lg hover:bg-primary hover:text-mate transition-all duration-300 text-lg">
              Get started now
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* bottom scroll / market strip */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono text-gray-400 z-20">
        <span className="w-10 h-10 border border-primary/40 rounded-full flex items-center justify-center backdrop-blur-sm">
          <svg
            className="w-5 h-5 text-primary animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </span>
      </div>
    </section>
  )
}

export default HeroSection