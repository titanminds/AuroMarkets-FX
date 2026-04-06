"use client";
import React from "react";
import Image from "next/image";
import {
  FaAndroid,
  FaApple,
  FaWindows,
  FaQrcode,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FiSmartphone, FiUserCheck, FiTrendingUp } from "react-icons/fi";

const DownloadSection = () => {
  const steps = [
    {
      id: 1,
      title: "Download the MyBGFx App",
      description: "Our app is available for both Android and iOS.",
      icon: FiSmartphone,
      color: "from-primary to-primary",
    },
    {
      id: 2,
      title: "Open your account",
      description: "Opening your account will only take a few minutes.",
      icon: FiUserCheck,
      color: "from-primary to-primary",
    },
    {
      id: 3,
      title: "Trade your way",
      description: "Trade your favourite markets instantly.",
      icon: FiTrendingUp,
      color: "from-primary to-primary",
    },
  ];

  const appLinks = [
    {
      platform: "Windows",
      href: "https://download.terminal.free/cdn/web/metaquotes.ltd/mt5/mt5setup.exe",
      icon: FaWindows,
      label: "Download for Windows",
    },
    {
      platform: "Apple",
      href: "https://apps.apple.com/us/app/metatrader-5/id413251709",
      icon: FaApple,
      label: "Download for iOS",
    },
    {
      platform: "Android",
      href: "https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5",
      icon: FaAndroid,
      label: "Download for Android",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-mate text-white py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary text-sm font-medium">
              MOBILE TRADING
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Trade <span className="text-primary">anywhere,</span>
            <br className="hidden sm:block" /> any time
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed px-4">
            With the MyBGFx App, you can trade whether you're at home or on the
            go. Benefit from advanced tools and features, no matter the
            situation.
          </p>

          {/* Store Badges - Desktop */}
          <div className="hidden md:flex gap-4 justify-center mt-10">
            {appLinks.map((app) => (
              <motion.a
                key={app.platform}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10 cursor-pointer shadow-lg hover:shadow-xl"
              >
                <app.icon
                  className="text-primary group-hover:scale-110 transition-transform"
                  size={24}
                />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download for</div>
                  <div className="font-semibold text-white">{app.platform}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Store Badges - Mobile */}
          <div className="md:hidden flex flex-wrap gap-3 justify-center mt-8 px-4">
            {appLinks.map((app) => (
              <motion.a
                key={app.platform}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="flex-1 min-w-[120px] max-w-[140px] group"
              >
                <div className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-primary/50 transition-all duration-300">
                  <app.icon className="text-primary" size={18} />
                  <span className="text-sm font-medium">{app.platform}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Steps */}
          <motion.div
            className="space-y-8 lg:space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className="group"
                variants={itemVariants}
              >
                <div className="flex gap-5 lg:gap-6 items-start p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative">
                    <div
                      className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="text-white" size={22} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-mate border-2 border-primary flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {step.id}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* QR Code Section */}
            <motion.div
              className="pt-8 lg:pt-10 border-t border-gray-800"
              variants={itemVariants}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary to-mate p-1 rounded-2xl shadow-2xl">
                    <div className="bg-white p-3 w-36 h-36 rounded-xl">
                      <div className="w-full h-full rounded bg-gray-900 flex flex-col items-center justify-center gap-2">
                        <FaQrcode className="text-white text-4xl" />
                        <div className="text-center">
                          <div className="text-white text-xs font-bold">
                            MyBGFx
                          </div>
                          <div className="text-gray-400 text-[10px]">
                            Scan to download
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-white p-1.5 rounded-full">
                      <FaDownload size={12} />
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-lg font-bold mb-2">Mobile QR Download</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Scan this QR code with your mobile device to download the
                    MyBGFx app directly.
                  </p>
                  <p className="text-gray-400 text-xs">
                    Available on App Store and Google Play
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Image Display */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl hidden lg:block"></div>
            <div className="absolute bottom-10 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl hidden lg:block"></div>

            {/* Main Image Container with Floating Phones Effect */}
            <div className="relative w-full ">
              {/* Main Image Frame */}
              <div className="relative  ">
                {/* Image Container */}
                <div className="relative aspect-[16/16] md:aspect-[16/16] ">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 z-10"></div>

                  {/* Actual Image - Replace with your image path */}
                  <Image
                    src="/assets/images/phone2.png"
                    alt="MyBGFx Mobile App Interface"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
                    priority
                  />

                  {/* Overlay Content on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8  z-20"></div>
                </div>
              </div>

              {/* Floating Download Badge */}
              <motion.a
              href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5"
                className="absolute -bottom-4 -right-4 md:-right-6 bg-gradient-to-r from-primary to-primary text-white px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-lg hidden sm:flex items-center gap-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <FaDownload />
                <span className="text-sm md:text-base font-semibold">
                  Download Now
                </span>
              </motion.a>

              {/* Floating Stats Badge */}
              <motion.div
                className="absolute -top-4 -left-4 md:-left-6  text-white px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-lg hidden sm:flex items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              >
                <FiTrendingUp />
                <span className="text-sm md:text-base font-semibold">
                  24/7 Trading
                </span>
              </motion.div>

              {/* Screen Reflection Effect */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/10 to-transparent opacity-20 rounded-t-3xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA - Mobile Only */}
        <motion.div
          className="mt-12 md:hidden text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-mate rounded-full shadow-lg">
            <FaDownload />
            <span className="font-bold">Get Started Now</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
