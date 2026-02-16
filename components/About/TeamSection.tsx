// "use client"
// import { motion } from "framer-motion"
// import {
//   FiLinkedin,
//   FiTwitter,
//   FiMail,
//   FiGlobe,
//   FiUsers,
//   FiAward,
//   FiTrendingUp,
// } from "react-icons/fi"

// interface TeamMember {
//   name: string
//   role: string
//   description: string
//   emoji: string
//   color: string
//   gradient: string
//   social: {
//     linkedin: string
//     twitter: string
//     email: string
//   }
// }

// const teamMembers: TeamMember[] = [
//   {
//     name: "Mr Sameed SIR",
//     role: "CEO & Founder",
//     description: "15+ years revolutionizing fintech with visionary leadership",
//     emoji: "👨‍💼",
//     color: "from-primary to-mate",
//     gradient: "from-primary to-mate",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//   },
//   {
//     name: "Mr Sameed niazi",
//     role: "CTO",
//     description: "AI/Blockchain pioneer driving technical innovation",
//     emoji: "👩‍💻",
//     color: "from-primary to-mate",
//     gradient: "from-primary via-mate/80 to-mate",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//   },
//   {
//     name: "Mr Sameed",
//     role: "Head of Sales",
//     description: "Maximizing platform potential for brokers worldwide",
//     emoji: "👨‍💼",
//     color: "from-secondary to-mate",
//     gradient: "from-secondary via-mate/80 to-mate",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//   },
//   {
//     name: "Ihtisham",
//     role: "Product Director",
//     description: "Crafting perfect solutions for brokerage needs",
//     emoji: "👩‍💼",
//     color: "from-mate to-secondary",
//     gradient: "from-mate via-secondary/80 to-secondary",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       email: "#",
//     },
//   },
// ]

// const TeamSection = () => {
//   return (
//     <section
//       className="relative py-24 overflow-hidden"
//       style={{
//         backgroundImage:
//           'url("https://AuroMarkets FXglobal.com/wp-content/uploads/2023/03/shape-32-1.png")',
//         backgroundAttachment: "scroll",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}>
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Hexagon Grid Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `url("https://AuroMarkets FXglobal.com/wp-content/uploads/2023/03/shape-33-1.png")`,
//               backgroundSize: "100% 100%",
//               backgroundRepeat: "repeat",
//               backgroundPosition: "center",
//             }}
//           />
//         </div>
//       </div>

//       <div className="container mx-auto px-4 md:px-12 relative z-10">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mate border border-black/10 mb-6">
//             <FiUsers className="w-4 h-4 text-primary" />
//             <span className="text-sm font-medium text-white/80">
//               Leadership Team
//             </span>
//           </div>

//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
//             <span className="text-black">Meet Our </span>
//             <motion.span
//               initial={{ backgroundPosition: "200% center" }}
//               whileInView={{ backgroundPosition: "0% center" }}
//               transition={{ duration: 2, ease: "linear" }}
//               className=" text-primary">
//               Visionary Team
//             </motion.span>
//           </h2>
//           <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
//             A collective of passionate innovators dedicated to transforming
//             brokerage operations and creating exceptional experiences worldwide.
//           </p>
//         </motion.div>

//         {/* Hexagon Cards Grid */}
//         <div className="flex flex-wrap justify-center gap-8 lg:gap-12 container mx-auto">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={member.name}
//               initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
//               whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.8,
//                 delay: index * 0.15,
//                 type: "spring",
//                 stiffness: 100,
//               }}
//               whileHover={{ y: -15, rotateZ: 2 }}
//               className="relative group">
//               {/* Outer Glow Hexagon */}
//               <div
//                 className={`w-72 h-80 bg-background group-hover:opacity-40 transition-all duration-700`}
//                 style={{
//                   clipPath:
//                     "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
//                 }}
//               />

//               {/* Main Content Hexagon */}
//               <div
//                 className="absolute inset-[2px] bg-background backdrop-blur-xl flex flex-col items-center justify-between p-8 transition-all duration-500 group-hover:scale-[0.98] group-hover:border group-hover:border-mate/50"
//                 style={{
//                   clipPath:
//                     "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
//                 }}>
//                 {/* Animated Gradient Overlay */}
//                 <motion.div
//                   className={`absolute inset-0 bg-linear-to-tr ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
//                   animate={{
//                     backgroundPosition: ["0% 0%", "100% 100%"],
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                   }}
//                 />

//                 {/* Emoji Avatar */}
//                 <motion.div
//                   className="relative z-10 mb-6"
//                   whileHover={{ scale: 1.2 }}
//                   transition={{ duration: 0.5 }}>
//                   <div className={`text-5xl mb-3`}>{member.emoji}</div>
//                 </motion.div>

//                 {/* Content */}
//                 <div className="relative z-10 text-center">
//                   <motion.h3
//                     className="text-xl font-bold text-foreground mb-2 group-hover:bg-primary group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent"
//                     whileHover={{ scale: 1.05 }}>
//                     {member.name}
//                   </motion.h3>

//                   <div
//                     className={`inline-block rounded-full mb-3 bg-opacity-10 border border-transparent group-hover:border-primary/30`}>
//                     <span
//                       className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
//                       {member.role}
//                     </span>
//                   </div>

//                   <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
//                     {member.description}
//                   </p>

//                   {/* Social Links */}
//                   <motion.div
//                     className="flex justify-center gap-2"
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 }}>
//                     {[
//                       {
//                         icon: FiTwitter,
//                         href: member.social.twitter,
//                         color: "hover:text-sky-400",
//                       },
//                       {
//                         icon: FiMail,
//                         href: `mailto:${member.social.email}`,
//                         color: "hover:text-primary",
//                       },
//                     ].map((social, i) => (
//                       <motion.a
//                         key={i}
//                         href={social.href}
//                         whileHover={{ y: -4, scale: 1.2 }}
//                         whileTap={{ scale: 0.9 }}
//                         className={`w-8 h-8 rounded-lg bg-mate/30 flex items-center justify-center text-foreground/70 ${social.color} transition-all`}>
//                         <social.icon className="w-4 h-4" />
//                       </motion.a>
//                     ))}
//                   </motion.div>
//                 </div>

//                 {/* Animated Side Lines */}
//                 <motion.div
//                   className={`absolute left-0 w-1 h-1/3 bg-gradient-to-b ${member.color} opacity-30`}
//                   animate={{
//                     height: ["33%", "50%", "33%"],
//                     opacity: [0.3, 0.6, 0.3],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     delay: index * 0.2,
//                   }}
//                 />
//                 <motion.div
//                   className={`absolute right-0 w-1 h-1/3 bg-gradient-to-t ${member.color} opacity-30`}
//                   animate={{
//                     height: ["33%", "50%", "33%"],
//                     opacity: [0.3, 0.6, 0.3],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     delay: index * 0.2 + 0.5,
//                   }}
//                 />
//               </div>

//               {/* Floating Particles */}
//               {[...Array(4)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className={`absolute w-1.5 h-1.5 rounded-full ${
//                     member.color.includes("primary")
//                       ? "bg-primary"
//                       : member.color.includes("secondary")
//                         ? "bg-secondary"
//                         : "bg-mate"
//                   }`}
//                   style={{
//                     left: `${15 + i * 20}%`,
//                     top: `${20 + i * 10}%`,
//                   }}
//                   animate={{
//                     y: [0, -15, 0],
//                     opacity: [0, 1, 0],
//                     scale: [0.8, 1.2, 0.8],
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Infinity,
//                     delay: i * 0.4,
//                   }}
//                 />
//               ))}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default TeamSection

"use client"
import { motion } from "framer-motion"
import { FiUsers, FiTwitter, FiMail } from "react-icons/fi"

interface TeamMember {
  name: string
  role: string
  description: string
  emoji: string
  color: string
  gradient: string
  social: {
    linkedin: string
    twitter: string
    email: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Mr Sameed SIR",
    role: "CEO & Founder",
    description: "15+ years revolutionizing fintech with visionary leadership",
    emoji: "👨",
    color: "from-primary to-mate",
    gradient: "from-primary to-mate",
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    name: "Mr Sameed Niazi",
    role: "CTO",
    description: "AI/Blockchain pioneer driving technical innovation",
    emoji: "👩",
    color: "from-primary to-mate",
    gradient: "from-primary via-mate/80 to-mate",
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    name: "Mr Sameed",
    role: "Head of Sales",
    description: "Maximizing platform potential for brokers worldwide",
    emoji: "👨‍💼",
    color: "from-secondary to-mate",
    gradient: "from-secondary via-mate/80 to-mate",
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
  {
    name: "Ihtisham",
    role: "Product Director",
    description: "Crafting perfect solutions for brokerage needs",
    emoji: "👩‍💼",
    color: "from-mate to-secondary",
    gradient: "from-mate via-secondary/80 to-secondary",
    social: { linkedin: "#", twitter: "#", email: "#" },
  },
]

const TeamSection = () => {
  return (
    <>
      {/* 🔒 Fixed Background (same as BenefitsSection) */}
      <div className="fixed inset-0 -z-50">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://w0.peakpx.com/wallpaper/139/711/HD-wallpaper-financial-stock-market-graph-on-stock-market-investment-trading-bullish-point-bearish-point-trend-of-graph-for-business-idea-and-all-art-work-design-vector-illustration-5299428-vector-art-at-vecteezy.jpg")',
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 🧭 Scrollable Team Section */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage:
            'url("https://AuroMarkets FXglobal.com/wp-content/uploads/2023/03/shape-32-1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mate border border-black/10 mb-6">
              <FiUsers className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/80">
                Leadership Team
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-background">
              Meet Our{" "}
              <motion.span
                initial={{ backgroundPosition: "200% center" }}
                whileInView={{ backgroundPosition: "0% center" }}
                transition={{ duration: 2, ease: "linear" }}
                className=" text-primary">
                Visionary Team
              </motion.span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              A collective of passionate innovators transforming brokerage
              operations worldwide.
            </p>
          </motion.div>

          {/* Team Cards (UNCHANGED) */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 container mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -15, rotateZ: 2 }}
                className="relative group">
                {/* Outer Glow Hexagon */}
                <div
                  className={`w-72 h-80 bg-background group-hover:opacity-40 transition-all duration-700`}
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                />

                {/* Main Content Hexagon */}
                <div
                  className="absolute inset-[2px] bg-background backdrop-blur-xl flex flex-col items-center justify-between p-8 transition-all duration-500 group-hover:scale-[0.98] group-hover:border group-hover:border-mate/50"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}>
                  {/* Animated Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-tr ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />

                  {/* Emoji Avatar */}
                  <motion.div
                    className="relative z-10 mb-6"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.5 }}>
                    <div className={`text-5xl mb-3`}>{member.emoji}</div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <motion.h3
                      className="text-xl font-bold text-foreground mb-2 group-hover:bg-primary group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent"
                      whileHover={{ scale: 1.05 }}>
                      {member.name}
                    </motion.h3>

                    <div
                      className={`inline-block rounded-full mb-3 px-2 bg-opacity-10 border border-transparent group-hover:border-primary/30`}>
                      <span
                        className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                        {member.role}
                      </span>
                    </div>

                    <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                      {member.description}
                    </p>

                    {/* Social Links */}
                    <motion.div
                      className="flex justify-center gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}>
                      {[
                        {
                          icon: FiTwitter,
                          href: member.social.twitter,
                          color: "hover:text-sky-400",
                        },
                        {
                          icon: FiMail,
                          href: `mailto:${member.social.email}`,
                          color: "hover:text-primary",
                        },
                      ].map((social, i) => (
                        <motion.a
                          key={i}
                          href={social.href}
                          whileHover={{ y: -4, scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className={`w-8 h-8 rounded-lg bg-mate/30 flex items-center justify-center text-foreground/70 ${social.color} transition-all`}>
                          <social.icon className="w-4 h-4" />
                        </motion.a>
                      ))}
                    </motion.div>
                  </div>

                  {/* Animated Side Lines */}
                  <motion.div
                    className={`absolute left-0 w-1 h-1/3 bg-gradient-to-b ${member.color} opacity-30`}
                    animate={{
                      height: ["33%", "50%", "33%"],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  <motion.div
                    className={`absolute right-0 w-1 h-1/3 bg-gradient-to-t ${member.color} opacity-30`}
                    animate={{
                      height: ["33%", "50%", "33%"],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2 + 0.5,
                    }}
                  />
                </div>

                {/* Floating Particles */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1.5 h-1.5 rounded-full ${
                      member.color.includes("primary")
                        ? "bg-primary"
                        : member.color.includes("secondary")
                          ? "bg-secondary"
                          : "bg-mate"
                    }`}
                    style={{
                      left: `${15 + i * 20}%`,
                      top: `${20 + i * 10}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0, 1, 0],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamSection
