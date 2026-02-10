// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// export const HeroSection: React.FC = () => {
//   return (
//     <section className="relative bg-background w-full overflow-hidden flex flex-col items-center justify-center px-4 py-20">
//       {/* Top Right Phone - Continuous Vertical Animation */}
//       <motion.div className="absolute bottom-[-6%] right-[-8%] hidden lg:block w-200 h-auto drop-shadow-2xl z-10">
//         <div className="bg-gradient-to-r from-primary to-mate p-4 rounded-sm ">

//           <img
//             src="https://hybridsolutions.com/wp-content/uploads/2025/06/web-trader-vertex.png"
//             alt="Forex Chart"
//             className="w-full h-auto"
//           />
//         </div>
//       </motion.div>

//       {/* Bottom Left Laptop & Phone */}
//       <motion.div
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{
//           duration: 1.2,
//           ease: "easeOut",
//           delay: 0.3,
//         }}
//         className="absolute bottom-[4%] left-[2%] hidden xl:flex items-end"
//       >
//         <img
//           src="https://capitalfxglobal.com/wp-content/uploads/2026/01/WhatsApp_Image_2026-01-23_at_3.53.10_PM-removebg-preview.png"
//           alt="Trading Platform"
//           className="w-125 drop-shadow-2xl"
//         />
//       </motion.div>

//       {/* Right Side Person - Continuous Horizontal Animation */}
//       <motion.div
//         initial={{ x: 100, opacity: 100 }}
//         animate={{
//           x: [0, 15, 0], // Moves right and left continuously
//         }}
//         transition={{
//           duration: 2,
//           ease: "easeInOut",
//           delay: 0.4,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//         className="absolute bottom-80 right-40 hidden lg:block w-100"
//       >
//         <img
//           src="https://capitalfxglobal.com/wp-content/uploads/2023/03/banner-img-1-1-e1769110780227.png"
//           alt="Successful Trader"
//           className="w-55"
//         />
//       </motion.div>

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
//           className="text-4xl md:text-6xl font-extrabold text-[#1e2330] leading-tight"
//         >
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-primary"
//           >
//             Start
//           </motion.span>
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
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
//             className="text-[#1e2330]"
//           >
//             financial{" "}
//           </motion.span>
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             Growth
//             <br />
//             in Online Forex{" "}
//           </motion.span>
//           <motion.span
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="text-primary"
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
//           className="mt-6 text-gray-500 text-lg md:text-xl max-w-2xl mx-auto"
//         >
//           Step into world's largest financial market to seize global
//           opportunities.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{
//             duration: 0.5,
//             delay: 0.4,
//           }}
//           className="mt-10"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-mate text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 mx-auto hover:bg-primary hover:text-mate cursor-pointer transition-all"
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
//           </motion.button>
//         </motion.div>

//         {/* Reviews */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.8,
//             delay: 1.6,
//           }}
//           className="mt-16 flex flex-col items-center"
//         >
//           <motion.div
//             animate={{ rotate: [0, 10, 0, -10, 0] }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "easeInOut",
//             }}
//             className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2"
//           >
//             <span className="text-2xl">😊</span>
//           </motion.div>
//           <div className="flex text-primary text-xl">★★★★★</div>
//           <p className="text-mate/50 text-sm mt-1">
//             4.8 Rating Based on 2.5k Reviews. ↘
//           </p>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative bg-background w-full h-screen overflow-hidden flex items-center justify-center px-4">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
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
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
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
