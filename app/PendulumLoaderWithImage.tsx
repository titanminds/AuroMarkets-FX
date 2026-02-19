import React from "react"
import Image from "next/image"

interface FireLoaderProps {
  logoSrc: string 
  size?: number 
}

const FireLoader: React.FC<FireLoaderProps> = ({ logoSrc, size = 200 }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-mate">
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}>
        {/* The Outer Spinning Rings */}
        <div className="absolute inset-0 border-4 border-transparent border-t-[#ffae00] border-l-[#ffae00] rounded-full animate-spin shadow-[0_0_15px_#ffae00] opacity-80"></div>
        <div className="absolute inset-2 border-2 border-transparent border-b-white border-r-white rounded-full animate-spin-reverse opacity-60"></div>

        {/* Central Logo Container */}
        <div className="relative z-10 w-1/1 h-1/1 flex items-center justify-center">
          <Image
            src={logoSrc}
            alt="Logo"
            width={size / 2}
            height={size / 2}
            className="object-contain"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-reverse {
          animation: spin-reverse 1.5s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default FireLoader
