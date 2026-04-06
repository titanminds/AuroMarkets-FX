"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaWindows,
  FaApple,
  FaAndroid,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Footer: React.FC = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    company: false,
    platforms: false,
    app: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Company links data
  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About US", href: "/about" },
    { name: "FAQ's", href: "/faqs" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Platform links data
  const platformLinks = [
    { name: "Windows", href: "https://download.terminal.free/cdn/web/metaquotes.ltd/mt5/mt5setup.exe", icon: FaWindows },
    { name: "Android", href: "https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5", icon: FaAndroid },
    { name: "IOS", href: "https://apps.apple.com/us/app/metatrader-5/id413251709", icon: FaApple },
  ];

  // App store/download links
  const appLinks = [
    { 
      platform: "Windows", 
      href: "https://download.terminal.free/cdn/web/metaquotes.ltd/mt5/mt5setup.exe", 
      icon: FaWindows 
    },
    { 
      platform: "Apple", 
      href: "https://apps.apple.com/us/app/metatrader-5/id413251709", 
      icon: FaApple 
    },
    { 
      platform: "Android", 
      href: "https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5", 
      icon: FaAndroid 
    },
  ];

  return (
    <footer className="relative w-full bg-mate font-sans text-slate-800 selection:bg-blue-100">
      <section className="relative overflow-hidden">
        {/* Curved Blue Header Background */}
        <div
          className="absolute top-0 left-0 right-0 h-[100vh] bg-background 
            [clip-path:ellipse(100%_100%_at_50%_100%)]
            md:[clip-path:ellipse(80%_100%_at_50%_100%)]
            lg:[clip-path:ellipse(60%_100%_at_50%_100%)]"
        ></div>

        <div className="relative z-10 flex flex-col items-center pt-20 px-6">
          {/* Logo Icon */}
          <Link href="/" className="mb-8 flex items-center justify-center">
            <div className="shrink-0">
              <img
                src="/assets/images/Logo-B.png"
                alt="Logo"
                className="h-12 md:h-20 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Hero Text */}
          <h1 className="mb-4 text-center text-3xl font-bold tracking-tight text-mate md:text-5xl leading-tight">
            Ready to Maximize Your <br className="hidden md:block" />{" "}
            Brokerage's Potential?
          </h1>
          <p className="mb-8 text-center text-sm font-medium text-mate/50 max-w-md">
            Contact us and make the switch to Vertex or Meta Trader today!
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="bg-primary cursor-pointer text-mate px-8 py-3 rounded-sm flex items-center gap-2 font-bold text-[14px] hover:bg-primary/70 hover:text-mate transition-all active:scale-95 shadow-lg shadow-primary/50"
          >
            Contact Us
          </Link>

          {/* Divider Line */}
          <div className="mt-16 w-full max-w-5xl border-t border-slate-100"></div>
        </div>
      </section>

      {/* Footer Content */}
      <section className="relative w-full bg-white pt-8 md:pt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-8 md:pb-16">
          {/* Mobile: Accordion Sections */}
          <div className="md:hidden space-y-4">
            {/* Branding & Contact - Always visible on mobile */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <Link href="/" className="shrink-0 mb-4">
                  <img
                    src="/assets/images/Logo-B.png"
                    alt="Logo"
                    className="h-14 w-auto object-contain"
                  />
                </Link>
                <h4 className="mb-4 text-lg font-bold text-mate">
                  Have queries?
                </h4>
                <div className="space-y-2">
                  <a
                    href="mailto:support@mybgfx.com"
                    className="flex items-center justify-center gap-2 text-sm text-mate/70 hover:text-primary transition-colors"
                  >
                    <FaEnvelope className="text-primary" />
                    support@mybgfx.com
                  </a>
                  {/* <a
                    href="tel:+971588856256"
                    className="flex items-center justify-center gap-2 text-sm text-mate/70 hover:text-primary transition-colors"
                  >
                    <FaPhone className="text-primary" />
                    +971 588856256
                  </a> */}
                  <div className="flex items-center justify-center gap-2 text-sm text-mate/70">
                    <FaMapMarkerAlt className="text-primary" />
                    Dubai, UAE
                  </div>
                </div>
              </div>
            </div>

            {/* Company Accordion */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <button
                onClick={() => toggleSection("company")}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="h-4 w-1 bg-primary rounded-full"></span>
                  <h4 className="text-lg font-bold text-slate-800">Company</h4>
                </div>
                {openSections.company ? (
                  <FaChevronUp className="text-primary transition-transform" />
                ) : (
                  <FaChevronDown className="text-primary transition-transform" />
                )}
              </button>
              <AnimatePresence>
                {openSections.company && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="px-4 pb-4 space-y-3 text-sm text-mate/70">
                      {companyLinks.map((link) => (
                        <motion.li
                          key={link.name}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                        >
                          <Link
                            href={link.href}
                            className="hover:text-primary cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-all block"
                          >
                            {link.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Platforms Accordion */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <button
                onClick={() => toggleSection("platforms")}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="h-4 w-1 bg-primary rounded-full"></span>
                  <h4 className="text-lg font-bold text-slate-800">
                    Platforms
                  </h4>
                </div>
                {openSections.platforms ? (
                  <FaChevronUp className="text-primary transition-transform" />
                ) : (
                  <FaChevronDown className="text-primary transition-transform" />
                )}
              </button>
              <AnimatePresence>
                {openSections.platforms && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="px-4 pb-4 space-y-3 text-sm text-mate/70">
                      {platformLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <motion.li
                            key={link.name}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                          >
                            <Link
                              href={link.href}
                              className="hover:text-primary cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-all flex items-center gap-2 block"
                            >
                              <Icon className="text-primary/70" />
                              {link.name}
                            </Link>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Our App Accordion */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <button
                onClick={() => toggleSection("app")}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="h-4 w-1 bg-primary rounded-full"></span>
                  <h4 className="text-lg font-bold text-slate-800">Our App</h4>
                </div>
                {openSections.app ? (
                  <FaChevronUp className="text-primary transition-transform" />
                ) : (
                  <FaChevronDown className="text-primary transition-transform" />
                )}
              </button>
              <AnimatePresence>
                {openSections.app && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4">
                      <p className="mb-4 text-sm leading-relaxed text-slate-500">
                        Download our app & keep track the markets.
                      </p>
                      <ul className="mb-4 space-y-2 text-sm text-mate/70">
                        <li className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg">
                          <FaCheck className="text-primary text-xs" />
                          Smart alert notifications
                        </li>
                        <li className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg">
                          <FaCheck className="text-primary text-xs" />
                          Instant currency exchange
                        </li>
                      </ul>
                      <div className="flex gap-3 justify-center">
                        {appLinks.map((app) => (
                          <motion.a
                            key={app.platform}
                            href={app.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-gray-200 text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                          >
                            <app.icon size={20} />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid grid-cols-1 gap-8 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Branding & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <Link href="/" className="shrink-0 mb-6">
                <img
                  src="/assets/images/Logo-B.png"
                  alt="Logo"
                  className="h-20 lg:h-24 w-auto object-contain"
                />
              </Link>
              <h4 className="mb-4 text-lg font-bold text-mate">
                Have queries?
              </h4>
              <div className="space-y-2">
                <a
                  href="mailto:support@mybgfx.com"
                  className="block text-sm text-mate/70 hover:text-primary cursor-pointer transition-colors hover:translate-x-1 hover:underline flex items-center gap-2"
                >
                  <FaEnvelope className="text-primary/70" />
                  support@mybgfx.com
                </a>
                {/* <a
                  href="tel:+971588856256"
                  className="block text-sm text-mate/70 hover:text-primary cursor-pointer transition-colors hover:translate-x-1 hover:underline flex items-center gap-2"
                >
                  <FaPhone className="text-primary/70" />
                  +971 588856256
                </a> */}
                <p className="text-sm text-mate/70 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary/70" />
                  Dubai, UAE
                </p>
              </div>
            </motion.div>

            {/* Column 2: Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <h4 className="mb-6 flex items-center gap-3 text-lg font-bold text-slate-800">
                <span className="h-4 w-1 bg-primary rounded-full"></span>
                Company
              </h4>
              <ul className="space-y-3 text-sm text-mate/70">
                {companyLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={link.href}
                      className="hover:text-primary cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-all block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <h4 className="mb-6 flex items-center gap-3 text-lg font-bold text-slate-800">
                <span className="h-4 w-1 bg-primary rounded-full"></span>
                Platforms
              </h4>
              <ul className="space-y-3 text-sm text-mate/70">
                {platformLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.li
                      key={link.name}
                      whileHover={{ x: 5 }}
                    >
                      <Link
                        href={link.href}
                        className="hover:text-primary cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-all flex items-center gap-2 block"
                      >
                        <Icon className="text-primary/70" />
                        {link.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Column 4: Our App */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <h4 className="mb-6 flex items-center gap-3 text-lg font-bold text-slate-800">
                <span className="h-4 w-1 bg-primary rounded-full"></span>
                Our App
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-slate-500">
                Download our app & keep track the markets.
              </p>
              <ul className="mb-6 space-y-2 text-sm text-mate/70">
                <li className="flex items-center gap-2 hover:text-primary transition-colors">
                  <FaCheck className="text-primary text-xs" />
                  Smart alert notifications
                </li>
                <li className="flex items-center gap-2 hover:text-primary transition-colors">
                  <FaCheck className="text-primary text-xs" />
                  Instant currency exchange
                </li>
              </ul>
              <div className="flex gap-3">
                {appLinks.map((app) => (
                  <motion.a
                    key={app.platform}
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-100 text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-md"
                  >
                    <app.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-slate-100 py-6 md:py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center justify-between gap-4 md:flex-row text-xs text-slate-400">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              © {new Date().getFullYear()} MyBGFx. All Rights Reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col md:flex-row items-center gap-4 md:gap-6"
            >
              <Link
                href="/termsofservice"
                className="hover:text-primary cursor-pointer hover:underline transition-colors flex items-center gap-1"
              >
                <span className="w-1 h-1 bg-slate-300 rounded-full hidden md:block"></span>
                Terms of Service
              </Link>
              <Link
                href="/privacypolicy"
                className="hover:text-primary cursor-pointer hover:underline transition-colors flex items-center gap-1"
              >
                <span className="w-1 h-1 bg-slate-300 rounded-full hidden md:block"></span>
                Privacy Policy
              </Link>
              
            </motion.div>
          </div>

          {/* Social Media Icons for Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:hidden mt-6 flex justify-center gap-4"
          >
            {[
              { name: "Facebook", href: "https://facebook.com" },
              { name: "Twitter", href: "https://twitter.com" },
              { name: "LinkedIn", href: "https://linkedin.com" },
              { name: "Instagram", href: "https://instagram.com" },
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                <span className="text-xs font-semibold">
                  {platform.name.charAt(0)}
                </span>
              </a>
            ))}
          </motion.div>

          {/* Back to Top Button for Mobile */}
          {/* <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="md:hidden fixed bottom-6 right-6 h-12 w-12 rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all flex items-center justify-center z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-lg">↑</span>
          </motion.button> */}
        </div>
      </section>
    </footer>
  );
};

export default Footer;