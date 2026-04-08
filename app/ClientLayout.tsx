"use client"

import { useEffect, useState } from "react"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import FloatingButtons from "../components/FloatingButton/FloatingIcons"
import FireLoader from "./PendulumLoaderWithImage"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Script from "next/script"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()
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
  // for every load after the link change
  useEffect(() => {
    if (!loading) {
      setLoading(true)
      const timer = setTimeout(() => setLoading(false), 600)
      return () => clearTimeout(timer)
    }
  }, [pathname])

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
            {/* <FireLoader logoSrc={"/assets/images/favicon.png"} /> */}
            {children}
            <FloatingButtons />
            <Footer />

            <Script type="text/javascript">
              {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/69d620c2c681461c33e51abf/1jlm6vu6u';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();`}
            </Script>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
