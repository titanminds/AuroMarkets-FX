"use client"

import { useEffect, useState } from "react"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import FloatingButtons from "../components/FloatingButton/FloatingIcons"
import FireLoader from "./PendulumLoaderWithImage"
import { AnimatePresence, motion } from "framer-motion"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // Hide loader when page is fully loaded
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 800) // Add a slight delay for smooth transition
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
      // Fallback timeout
      const timer = setTimeout(handleLoad, 3000)

      return () => {
        window.removeEventListener("load", handleLoad)
        clearTimeout(timer)
      }
    }
  }, [])


  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <FireLoader logoSrc={"/assets/images/favicon.png"} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <Navbar />
            {/* <GXGLogoLoader /> */}
            {children}
            <FloatingButtons />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
