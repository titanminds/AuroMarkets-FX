"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";
import { MdCallMade } from "react-icons/md";
import { FaAndroid, FaApple, FaWindows, FaHome, FaQuestionCircle, FaAddressBook } from "react-icons/fa";
import { GiTrade } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

const tradingLinks = [
  { label: "Android", href: "#", icon: FaAndroid },
  { label: "IOS", href: "#", icon: FaApple },
  { label: "Windows", href: "#", icon: FaWindows },
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`
          pointer-events-auto
          flex items-center justify-between
          transition-all duration-500 ease-in-out
          bg-mate/90 backdrop-blur-xl border border-white/10
          ${scrolled ? "w-full max-w-5xl rounded-2xl px-6 py-2 shadow-2xl" : "w-full max-w-7xl rounded-3xl px-8 py-4"}
        `}
      >
        {/* Logo */}
        <Link href="/" className="relative group shrink-0">
          <img
            src="/assets/images/Logo.png"
            alt="Logo"
            className={`transition-all duration-500 ${scrolled ? "h-10 md:h-12" : "h-14 md:h-16"}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink key={link.label} {...link} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="https://portal.mybgfx.com/login"
            className="hidden md:block text-white/70 hover:text-white text-sm font-semibold transition-colors mr-2"
          >
            Sign In
          </Link>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://portal.mybgfx.com/register"
              className="relative inline-flex items-center gap-2 bg-primary text-mate px-6 py-2.5 rounded-xl font-bold text-sm overflow-hidden group"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span>Open Account</span>
              <MdCallMade size={18} />
            </Link>
          </motion.div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white bg-white/5 rounded-xl border border-white/10"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-4 top-24 z-50 lg:hidden bg-mate/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/5 text-white hover:bg-primary hover:text-mate transition-all group"
                >
                  <span className="font-semibold">{link.label}</span>
                  <MdCallMade className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10">
                 <Link
                  href="https://portal.mybgfx.com/register"
                  className="w-full flex justify-center py-4 bg-primary text-mate font-bold rounded-2xl"
                >
                  Get Started Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLink = ({ label, href, hasDropdown }: any) => {
  return (
    <div className="relative group px-1">
      <Link
        href={href}
        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm xl:text-[15px] font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300"
      >
        <span>{label}</span>
        {hasDropdown && <HiChevronDown className="group-hover:rotate-180 transition-transform duration-300" />}
      </Link>

      {hasDropdown && (
        <div className="absolute top-full left-0 mt-2 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <div className="bg-mate/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
            {tradingLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-primary/20 transition-all"
              >
                <item.icon className="text-primary" size={18} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;