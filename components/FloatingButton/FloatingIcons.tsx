"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaWhatsapp, FaArrowUp, FaTimes } from "react-icons/fa"
import { MdMessage } from "react-icons/md"

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showWhatsAppMessage, setShowWhatsAppMessage] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  // WhatsApp phone number (using international format without +)
  const whatsappNumber = ""
  const whatsappMessage = "Hello! I'm interested in learning more about Auro Markets FX."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  // Show back-to-top button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
        setIsScrolling(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Reset scrolling state after scrolling stops
  useEffect(() => { 
    let scrollTimer: NodeJS.Timeout
    
    const handleScroll = () => {
      setIsScrolling(true)
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        setIsScrolling(false)
      }, 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimer)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const handleWhatsAppClick = () => {
    setShowWhatsAppMessage(false)
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-24 right-4 md:right-6 lg:right-8 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: 1
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* WhatsApp Message Popup */}
        <AnimatePresence>
          {showWhatsAppMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute bottom-full right-0 mb-4 w-72 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-2xl p-4 border border-green-400/30"
            >
              {/* Close button */}
              <button
                onClick={() => setShowWhatsAppMessage(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-green-600 hover:bg-gray-100 transition-colors shadow-lg"
              >
                <FaTimes className="w-3 h-3" />
              </button>

              {/* Message content */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-sm">Chat with Support</h3>
                  <p className="text-white/90 text-xs mt-1">Our team is available 24/7</p>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-3 mb-3">
                <p className="text-white text-sm">
                  {whatsappMessage}
                </p>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-white text-green-600 font-bold py-2.5 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                Open WhatsApp
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <button
          onClick={() => setShowWhatsAppMessage(!showWhatsAppMessage)}
          className="relative group"
        >
          {/* Pulsing ring effect */}
          <motion.div
            className="absolute inset-0 bg-green-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Main button */}
          <motion.div
            className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 border-2 border-white/20 group-hover:border-white/40 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </motion.div>

          {/* Unread message indicator */}
          <motion.div
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-mate flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5 }}
          >
            <span className="text-white text-xs font-bold">1</span>
          </motion.div>

          {/* Hover tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-mate/90 text-white text-sm py-2 px-3 rounded-lg whitespace-nowrap">
              Chat with Support
            </div>
            <div className="absolute top-1/2 left-full -translate-y-1/2">
              <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-mate/90" />
            </div>
          </div>
        </button>
      </motion.div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotate: isScrolling ? 180 : 0
            }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
            whileHover={{ scale: 1.1, backgroundColor: "var(--primary)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 md:right-6 lg:right-8 z-50 w-12 h-12 md:w-14 md:h-14 bg-primary rounded-full flex items-center justify-center shadow-xl border border-white/10 hover:border-primary/50 transition-all group"
          >
            {/* Animated arrow with trail effect */}
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -3, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaArrowUp className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-white" />
              </motion.div>

              {/* Trail effect */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  y: [0, -6, 0],
                  opacity: [0.3, 0, 0.3]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
              >
                <FaArrowUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </motion.div>
            </div>

            {/* Hover tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-mate/90 text-white text-sm py-2 px-3 rounded-lg whitespace-nowrap">
                Back to Top
              </div>
              <div className="absolute top-1/2 left-full -translate-y-1/2">
                <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-mate/90" />
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      
    </>
  )
}

export default FloatingButtons