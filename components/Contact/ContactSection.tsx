import React from "react"
import {
  BiGlobe,
  BiMapPin,
  BiMessageSquare,
  BiPhone,
  BiPhoneCall,
} from "react-icons/bi"
import { BsArrowUpRight } from "react-icons/bs"
import { CgMail } from "react-icons/cg"

const ContactSection = () => {
  return (
    <div className="relative bg-background overflow-hidden font-sans">
      {/* Background Image Container */}
      <div className="absolute bottom-0 inset-0 z-0 select-none pointer-events-none opacity-100">
        <img
          src="https://capitalfxglobal.com/wp-content/uploads/2023/03/shape-49-1.png"
          alt="Background Decor"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        {/* Left Content Area */}
        <div className="lg:col-span-8">
          <span className="text-gray-500 font-medium tracking-wide">
            Need Help
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#1a1a1a] leading-tight">
            <span className="text-primary">Connecting</span> World for
            <br /> Better Solving
          </h1>
          <p className="text-gray-500 max-w-xl mb-12">
            Occasionally circumstances occur in which toil and pain can procure
            him some great.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Request Call Back Card */}
            <div className="bg-white p-12 rounded-lg shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="bg-red-50 p-4 rounded-full mb-6">
                <BiPhoneCall className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-extrabold mb-2 text-slate-800">
                Request Call Back
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                Just Share your ph num, we will back.
              </p>
              <button className="flex items-center gap-2 font-bold text-sm text-slate-900 border-b-2 border-transparent hover:border-primary transition-all">
                 Call<BsArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Live Chat Card */}
            <div className="bg-white p-12 rounded-lg shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="bg-red-50 p-4 rounded-full mb-6">
                <BiMessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-extrabold mb-2 text-slate-800">
                Live Chat Support
              </h3>
              <p className="text-gray-400 mb-6 text-sm">
                Chat live with our forex specialist.
              </p>
              <button className="flex items-center gap-2 font-bold text-sm text-slate-900 border-b-2 border-transparent hover:border-primary transition-all">
                Start Chat <BsArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Info Sidebar */}
        <div className="lg:col-span-4 bg-[#141521] text-white p-10 rounded-sm shadow-2xl">
          <h2 className="text-xl font-bold mb-10">UK Office</h2>

          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="bg-gray-700/50 p-2 rounded-full h-fit">
                <BiMapPin className="w-5 h-5 text-gray-300" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                AuroMarkets FX UK LTD 114 Lowbrook road Ilford, London IG1 2HJ United
                Kingdom
              </p>
            </div>

            {/* <div className="flex gap-5 items-center">
              <div className="bg-gray-700/50 p-2 rounded-full">
                <BiPhone className="w-5 h-5 text-gray-300" />
              </div>
              <p className="text-gray-400 text-sm">+971-586856256</p>
            </div> */}

            <div className="flex gap-5 items-center">
              <div className="bg-gray-700/50 p-2 rounded-full">
                <CgMail className="w-5 h-5 text-gray-300" />
              </div>
              <p className="text-gray-400 text-sm">info@auromarketsfx.com</p>
            </div>

            <hr className="border-gray-800" />

            <div className="flex gap-5 items-center">
              <div className="bg-gray-700/50 p-2 rounded-full">
                <BiGlobe className="w-5 h-5 text-gray-300" />
              </div>
              <p className="text-gray-100 font-bold">UAE Office</p>
            </div>

            <div className="flex gap-5">
              <div className="bg-gray-700/50 p-2 rounded-full h-fit">
                <BiMapPin className="w-5 h-5 text-gray-300" />
              </div>
              <p className="text-gray-400 text-sm">
                Block C VLO3-178 STRIP, Sharjah, UAE
              </p>
            </div>
          </div>

          <button className="w-full mt-12 py-4 border border-primary rounded-md flex items-center justify-center gap-3 hover:bg-primary transition-all text-sm font-bold group">
            View On Google Map
            <BsArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactSection