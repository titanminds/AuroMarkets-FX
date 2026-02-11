"use client";

import { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

interface SectionProps {
  title: string;
  content: React.ReactNode;
  index: number;
}

const Section: React.FC<SectionProps> = ({ title, content, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
    >
      <motion.button
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-800">{title}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-primary ml-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="text-gray-600 leading-relaxed">{content}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const StatCard: React.FC<{ value: string; label: string; index: number }> = ({
  value,
  label,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm border border-gray-100"
  >
    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
      {value}
    </div>
    <div className="text-gray-600 font-medium">{label}</div>
  </motion.div>
);

const FeatureCard: React.FC<{
  title: string;
  description: string;
  index: number;
}> = ({ title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    whileHover={{
      y: -5,
      scale: 1.02,
      transition: { duration: 0.2 },
    }}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
  >
    <div className="flex items-start mb-3">
      <motion.div
        className="p-2 bg-primary/10 rounded-lg mr-3"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <svg
          className="w-5 h-5 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </motion.div>
      <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </motion.div>
);

const PrivacyPolicyPage: React.FC = () => {
  const features = [
    {
      title: "Data Portability",
      desc: "Export your data in common formats like JSON and CSV anytime.",
    },
    {
      title: "Right to Erasure",
      desc: "Request complete deletion of your personal data at any time.",
    },
    {
      title: "Access Rights",
      desc: "Transparent access to all data we hold about you.",
    },
    {
      title: "Opt-Out Controls",
      desc: "Full control over marketing and communication preferences.",
    },
  ];

  const stats = [
    { value: "256-bit", label: "SSL Encryption" },
    { value: "0", label: "Data Breaches" },
    { value: "GDPR", label: "Compliant" },
    { value: "24/7", label: "Security Monitoring" },
  ];

  const sections = [
    {
      title: "1. Introduction and Scope",
      content: (
        <>
          <p className="mb-3">
            Welcome to{" "}
            <span className="font-semibold text-primary">AuroMarkets FX</span> ("we",
            "our", "us"). We are committed to protecting your personal data and
            respecting your privacy.
          </p>
          <p className="mb-2">
            <strong>Scope:</strong> This policy applies to all personal data
            processed through our website, mobile apps, trading platforms, and
            communications.
          </p>
          <p>
            <strong>Compliance:</strong> GDPR, CCPA, UK Data Protection Act
            2018, and other applicable laws.
          </p>
        </>
      ),
    },
    {
      title: "2. Data Controller Information",
      content: (
        <>
          <p className="mb-3">
            The data controller for your personal data is{" "}
            <span className="font-semibold">AuroMarkets FX</span>.
          </p>
          <p>
            Contact our Data Protection Officer at:{" "}
            <a
              href="mailto:dpo@AuroMarkets FX.com"
              className="text-primary font-medium hover:underline"
            >
              dpo@AuroMarkets FX.com
            </a>
          </p>
        </>
      ),
    },
    {
      title: "3. Information We Collect",
      content: (
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Account details: name, email, phone number, address</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Financial information: bank account, payment methods</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>
              Trading activity: transactions, portfolio data, preferences
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Device & usage data: IP address, browser, cookies</span>
          </li>
        </ul>
      ),
    },
    {
      title: "4. How We Use Your Information",
      content: (
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Provide and improve our trading services</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Verify identity and comply with legal obligations</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Communicate updates and relevant information</span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>Monitor security and prevent fraudulent activity</span>
          </li>
        </ul>
      ),
    },
    {
      title: "5. Data Sharing and Third Parties",
      content: (
        <>
          <p className="mb-3">We may share your data with:</p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Regulatory authorities as required by law</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Payment processors and trading partners</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Service providers supporting our platform</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "9. Your Data Protection Rights",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-50 p-4 rounded-lg"
          >
            <h4 className="font-semibold text-gray-800 mb-2">
              Access & Correction
            </h4>
            <p className="text-sm text-gray-600">
              View and update your personal information
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-50 p-4 rounded-lg"
          >
            <h4 className="font-semibold text-gray-800 mb-2">
              Data Portability
            </h4>
            <p className="text-sm text-gray-600">
              Request your data in common formats
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-50 p-4 rounded-lg"
          >
            <h4 className="font-semibold text-gray-800 mb-2">
              Right to Erasure
            </h4>
            <p className="text-sm text-gray-600">
              Request deletion of your data
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gray-50 p-4 rounded-lg"
          >
            <h4 className="font-semibold text-gray-800 mb-2">Opt-Out Rights</h4>
            <p className="text-sm text-gray-600">
              Control marketing communications
            </p>
          </motion.div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>AuroMarkets FX Privacy Policy | Data Protection</title>
        <meta
          name="description"
          content="Protecting your personal data is our top priority. Learn how we collect, use, and safeguard your information."
        />
      </Head>

      <main className="min-h-screen bg-white relative overflow-hidden">
        {/* Gradient Background - Half white, half matte */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_white_50%,_#1b1d24_50%)] z-0"></div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/5"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>

        {/* Hero Section */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary/90 to-primary text-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
              <div className="text-center max-w-3xl mx-auto">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                >
                  Privacy & Data Protection
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-white/90 mb-6"
                >
                  Your trust is our priority. We're committed to transparency
                  and protecting your data with enterprise-grade security.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="inline-flex items-center space-x-2 text-sm bg-white/10 px-4 py-2 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    Last updated:{" "}
                    {new Date().toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center"
              >
                Your Data Protection Rights
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {features.map((feature, index) => (
                  <FeatureCard
                    description={""}
                    key={feature.title}
                    {...feature}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            {/* Security Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center"
              >
                Our Security Standards
              </motion.h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <StatCard key={stat.label} {...stat} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Collapsible Policy Sections */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-gray-800 mb-8"
              >
                Privacy Policy Details
              </motion.h2>

              <div className="space-y-3">
                {sections.map((section, index) => (
                  <Section key={section.title} {...section} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-bl from-primary to-primary/10 rounded-2xl p-6 md:p-8 mb-12"
            >
              <div className="text-center max-w-2xl mx-auto">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
                >
                  <svg
                    className="w-8 h-8 text-background"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl md:text-3xl font-bold text-background mb-4"
                >
                  Exercise Your Rights
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-background/50 mb-6"
                >
                  Contact our Data Protection Officer to manage your data
                  preferences
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <motion.a
                    href="mailto:dpo@AuroMarkets FX.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-6 py-3 bg-mate text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Contact DPO
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="/cookie-preferences"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-800 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Cookie Settings
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Related Documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                Related Documents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Terms & Conditions",
                    description: "Comprehensive terms governing platform usage",
                    href: "#",
                  },
                  {
                    title: "Cookie Policy",
                    description:
                      "Detailed information about our use of cookies",
                    href: "#",
                  },
                  {
                    title: "Data Processing Agreement",
                    description: "For business clients and partners",
                    href: "#",
                  },
                ].map((doc, index) => (
                  <motion.a
                    key={doc.title}
                    href={doc.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group p-4 bg-white border border-gray-200 rounded-lg hover:border-primary hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start mb-2">
                      <motion.div
                        className="p-2 bg-gray-100 group-hover:bg-primary/10 rounded-lg mr-3 transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <svg
                          className="w-5 h-5 text-gray-600 group-hover:text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </motion.div>
                      <h4 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                        {doc.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 pl-11">
                      {doc.description}
                    </p>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 bg-[#1b1d24] text-white py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} AuroMarkets FX. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Protecting your privacy is our commitment
            </p>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default PrivacyPolicyPage;
