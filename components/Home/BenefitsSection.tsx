"use client"
import React, { useState } from "react"
import { BsArrowLeft, BsArrowRight, BsArrowUpRight } from "react-icons/bs"
import { motion } from "framer-motion"
import { MdCallMade } from "react-icons/md"
import Link from "next/link"

const BenefitsSection = () => {
  const [activeAccount, setActiveAccount] = useState(0)

  const accounts = [
    {
      id: 1,
      type: "Standard Account",
      title: "Open an Account & Get Benefits",
      benefits: [
        "Maxime placefacere possimus menda omni tem",
        "Right to find fault with a man.",
        "Avoids a pain that produces no resultant.",
      ],
      color: "#ce183d",
    },
  ]

  const currentAccount = accounts[activeAccount]

  return (
    <>
      {/* Fixed Background for entire page */}
      <div className="fixed inset-0 -z-1">
        {/* Background Image that stays fixed */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/736x/96/f9/f1/96f9f1cff5f0f97edb10aa44b01b9e72.jpg")',
            backgroundAttachment: "fixed",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Scrollable Content with its own background */}
      <section
        className="relative py-30 w-full flex items-center justify-center font-sans"
        style={{
          backgroundImage:
            'url("https://capitalfxglobal.com/wp-content/uploads/2023/03/shape-32-1.png")',
          backgroundAttachment: "scroll",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-row items-stretch max-w-7xl w-full px-4">
          {/* Main Content Card */}
          <motion.div
            key={currentAccount.id}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-white/95 backdrop-blur-md p-10 md:p-16 shadow-2xl max-w-2xl w-full relative">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              Open an Account <span className="text-primary">&</span>
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Get <span className="text-primary">Benefits</span>
            </h1>

            <ul className="space-y-4 mb-10">
              {currentAccount.benefits.map((text, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3">
                  <span className="text-primary mt-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path d="M12 2L2 22h20L12 2z" />
                    </svg>
                  </span>
                  <p className="text-gray-600 text-lg">{text}</p>
                </motion.li>
              ))}
            </ul>

            {/* Controls Container */}
            <div className="flex items-center gap-0">
              <Link href='https://portal.auromarketsfx.com/register' className="bg-mate text-white hover:text-mate cursor-pointer px-4 md:px-7 py-2.5 md:py-3 rounded-sm flex items-center gap-2 font-bold text-[13px] md:text-[15px] hover:bg-primary transition-all active:scale-95 shadow-lg shadow-red-100">
                Open Your Account{" "}
                <MdCallMade
                  size={18}
                  className="hidden md:block rotate-90 group-hover:rotate-45 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default BenefitsSection
