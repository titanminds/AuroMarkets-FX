"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  HiOutlineSearch,
  HiMenuAlt3,
  HiX,
  HiChevronDown,
} from "react-icons/hi";
import { MdCallMade } from "react-icons/md";
import {
  FaAndroid,
  FaApple,
  FaWindows,
  FaHome,
  FaQuestionCircle,
  FaAddressBook,
} from "react-icons/fa";
import { GiTrade } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

const tradingLinks = [
  {
    label: "Android",
    href: "https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5",
    icon: FaAndroid,
  },
  {
    label: "IOS",
    href: "https://apps.apple.com/us/app/metatrader-5/id413251709",
    icon: FaApple,
  },
  {
    label: "Windows",
    href: "https://download.terminal.free/cdn/web/metaquotes.ltd/mt5/mt5setup.exe",
    icon: FaWindows,
  },
];

const navLinks = [
  { label: "Home", href: "/", icon: FaHome },
  { label: "About", href: "/about", icon: GiTrade },
  { label: "Trading", href: "#", icon: GiTrade, hasDropdown: true },
  { label: "FAQ's", href: "/faqs", icon: FaQuestionCircle },
  { label: "Contact Us", href: "/contact", icon: FaAddressBook },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileTradingOpen, setMobileTradingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Main Navigation Bar */}
      <div className="px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16 md:h-20">
          {/* Logo - Switches based on scroll state */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="shrink-0"
          >
            {scrolled ? (
              // Black logo when scrolled
              <img
                src="/assets/images/Logo-W.png"
                alt="Logo"
                className="h-14 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
              />
            ) : (
              // White logo when transparent
              <img
                src="/assets/images/Logo-B.png"
                alt="Logo"
                className="h-14 sm:h-14 md:h-16 lg:h-20 w-auto object-contain"
              />
            )}
          </motion.a>

          {/* Desktop Navigation - Links arranged as requested */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                label={link.label}
                href={link.href}
                icon={link.icon}
                hasDropdown={link.hasDropdown}
                tradingLinks={link.hasDropdown ? tradingLinks : undefined}
                scrolled={scrolled}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden sm:flex p-2 rounded-full transition-colors ${
                scrolled 
                  ? "text-gray-600 hover:text-primary hover:bg-gray-100" 
                  : "text-white hover:text-primary hover:bg-white/10"
              }`}
            >
              <HiOutlineSearch size={20} />
            </motion.button>

            {/* Open Account Button */}
            <Link
              href="https://portal.auromarketsfx.com/register"
              className="bg-primary text-mate cursor-pointer px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-bold text-xs sm:text-sm md:text-[15px] shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all active:scale-95 hidden md:flex items-center gap-2"
            >
              <span>Open Account</span>
              <MdCallMade className="hidden sm:block" size={16} />
            </Link>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled 
                  ? "text-gray-800 hover:bg-gray-100" 
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <HiX size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <HiMenuAlt3 size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Shutter Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm mt-20 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Shutter Menu */}
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                mass: 0.8,
              }}
              className="fixed left-0 right-0 bg-white lg:hidden shadow-2xl rounded-b-3xl overflow-hidden"
            >
              {/* Menu Header with Logo */}
              {/* <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <img
                  src="/assets/images/Logo-black.png"
                  alt="Logo"
                  className="h-10 w-auto object-contain"
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <HiX size={24} />
                </motion.button>
              </div> */}

              {/* Menu Content */}
              <div className="max-h-[calc(100vh-180px)] overflow-y-auto px-6 py-4">
                {/* Navigation Links */}
                <div className="space-y-1 mb-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {link.hasDropdown ? (
                        <div className="mb-2">
                          <button
                            onClick={() =>
                              setMobileTradingOpen(!mobileTradingOpen)
                            }
                            className="flex items-center justify-between w-full p-4 text-lg font-semibold text-gray-800 hover:text-primary hover:bg-gray-100 rounded-xl transition-all"
                          >
                            <div className="flex items-center gap-3">
                              <span>{link.label}</span>
                            </div>
                            <motion.div
                              animate={{ rotate: mobileTradingOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <HiChevronDown size={20} />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {mobileTradingOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-12 pt-2 pb-2 space-y-2">
                                  {tradingLinks.map((tradingLink, idx) => (
                                    <motion.div
                                      key={tradingLink.label}
                                      initial={{ x: -20, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ delay: idx * 0.1 }}
                                    >
                                      <Link
                                        href={tradingLink.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 p-3 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
                                      >
                                        <tradingLink.icon
                                          className="text-primary/70"
                                          size={18}
                                        />
                                        <span className="font-medium">
                                          {tradingLink.label}
                                        </span>
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between p-4 text-lg font-semibold text-gray-800 hover:text-primary hover:bg-gray-100 rounded-xl transition-all active:scale-95"
                        >
                          <div className="flex items-center gap-3">
                            <span>{link.label}</span>
                          </div>
                          <MdCallMade className="text-primary" size={20} />
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Search Bar for Mobile */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <div className="relative">
                    <HiOutlineSearch
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col gap-3"
                >
                  <Link
                    href="https://portal.auromarketsfx.com/login"
                    onClick={() => setIsOpen(false)}
                    className="py-3.5 text-center font-bold border-2 border-gray-200 rounded-xl hover:border-primary hover:text-primary transition-all active:scale-95"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="https://portal.auromarketsfx.com/register"
                    onClick={() => setIsOpen(false)}
                    className="py-3.5 text-center font-bold bg-gradient-to-r from-primary to-primary/90 text-white rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95"
                  >
                    Join Now - It's Free
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 pt-6 border-t border-gray-200 text-center"
                >
                  <p className="text-sm text-gray-500 mb-2">
                    Need help? We're here for you
                  </p>
                  <span className="text-primary font-semibold hover:underline">
                    info@auromarketsfx.com
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({
  label,
  href,
  icon: Icon,
  hasDropdown,
  tradingLinks,
  scrolled,
}: {
  label: string;
  href: string;
  icon: any;
  hasDropdown?: boolean;
  tradingLinks?: any[];
  scrolled: boolean;
}) => {
  if (hasDropdown) {
    return (
      <div className="relative group">
        <button className={`flex items-center gap-1.5 text-sm xl:text-base font-semibold transition-colors group px-2 py-1 ${
          scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-primary"
        }`}>
          <span>{label}</span>
          <HiChevronDown
            size={14}
            className="group-hover:rotate-180 transition-transform duration-300"
          />
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
        </button>

        {tradingLinks && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top">
            <div className="p-2">
              {tradingLinks.map((item) => (
                <motion.div key={item.label} whileHover={{ x: 5 }}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    <item.icon className="text-primary/70" size={16} />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={`relative group px-2 py-1 text-sm xl:text-base font-semibold transition-colors flex items-center gap-1.5 ${
        scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-primary"
      }`}
    >
      <span>{label}</span>
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-4/5" />
    </Link>
  );
};

export default Navbar;