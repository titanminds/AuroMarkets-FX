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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </motion.div>
      <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </motion.div>
);

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

const TermsAndConditionsPage: React.FC = () => {
  const keyFeatures = [
    {
      title: "Transparent Trading",
      description: "Clear terms for all trading activities and transactions",
    },
    {
      title: "Risk Management",
      description: "Comprehensive risk disclosures and management policies",
    },
    {
      title: "User Protection",
      description: "Policies designed to protect user interests and assets",
    },
    {
      title: "Legal Compliance",
      description: "Adherence to international financial regulations",
    },
  ];

  const tradingStats = [
    { value: "99.9%", label: "Platform Uptime" },
    { value: "256-bit", label: "Security Encryption" },
    { value: "FCA", label: "Regulated" },
    { value: "24/7", label: "Support Available" },
  ];

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: (
        <>
          <p className="mb-3">
            By accessing and using the MyBGFx platform ("Platform"), you agree to be bound by these Terms and Conditions ("Terms"). These Terms constitute a legally binding agreement between you and MyBGFx Ltd.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-3">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Important:</strong> If you do not agree with any part of these Terms, you must not access or use the Platform.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "2. Account Registration and Security",
      content: (
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>
              <strong>Eligibility:</strong> You must be at least 18 years old and have legal capacity to enter into binding contracts.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>
              <strong>Account Information:</strong> You must provide accurate, current, and complete information during registration.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>
              <strong>Security Responsibilities:</strong> You are responsible for maintaining the confidentiality of your login credentials and all activities under your account.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>
              <strong>Verification:</strong> We reserve the right to request additional verification documents at any time.
            </span>
          </li>
        </ul>
      ),
    },
    {
      title: "3. Trading Rules and Conditions",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">3.1 Trading Activities</h4>
            <p className="text-gray-600 mb-2">
              All trading activities on the Platform are subject to:
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Market conditions and availability</li>
              <li>Our execution policies</li>
              <li>Applicable laws and regulations</li>
              <li>Platform maintenance schedules</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">3.2 Order Execution</h4>
            <p className="text-gray-600">
              Orders are executed according to our Order Execution Policy. We strive for best execution but cannot guarantee specific prices during volatile market conditions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">3.3 Trading Hours</h4>
            <p className="text-gray-600">
              Trading is available 24/5 for most instruments, excluding weekends and holidays. Specific trading hours for each instrument are displayed on the Platform.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "4. Financial Transactions",
      content: (
        <>
          <p className="mb-3">
            All financial transactions, including deposits, withdrawals, and trades, are governed by the following terms:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-800 mb-2">Deposits</h5>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Minimum deposit: $100</li>
                <li>• Processed within 1-2 hours</li>
                <li>• Multiple payment methods available</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">Withdrawals</h5>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Minimum withdrawal: $50</li>
                <li>• Processed within 24-48 hours</li>
                <li>• Subject to verification</li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-3">
            All transactions are subject to our Anti-Money Laundering (AML) and Know Your Customer (KYC) policies.
          </p>
        </>
      ),
    },
    {
      title: "5. Risk Disclosure",
      content: (
        <div className="space-y-3">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-2">⚠️ High Risk Warning</h4>
            <p className="text-red-700 text-sm">
              Trading financial instruments involves substantial risk of loss. You should carefully consider whether trading is appropriate for you in light of your experience, financial objectives, and risk tolerance.
            </p>
          </div>
          
          <div className="space-y-2">
            <h5 className="font-semibold text-gray-800">Key Risks Include:</h5>
            <ul className="list-disc ml-5 space-y-1">
              <li>Market risk and price volatility</li>
              <li>Leverage risk (losses can exceed deposits)</li>
              <li>Liquidity risk</li>
              <li>Operational and technical risks</li>
              <li>Regulatory and legal risks</li>
            </ul>
          </div>
          
          <p className="text-sm text-gray-500 pt-2">
            Past performance is not indicative of future results. You may lose some or all of your invested capital.
          </p>
        </div>
      ),
    },
    {
      title: "6. Intellectual Property",
      content: (
        <div className="space-y-3">
          <p className="text-gray-600">
            All content, features, and functionality on the Platform, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of MyBGFx Ltd. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 mb-2">License Grant</h5>
            <p className="text-sm text-gray-600">
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform for your personal, non-commercial use, subject to these Terms.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "7. Limitation of Liability",
      content: (
        <>
          <p className="mb-3 text-gray-600">
            To the maximum extent permitted by applicable law, MyBGFx Ltd. shall not be liable for:
          </p>
          
          <ul className="space-y-2 list-disc ml-5 mb-3">
            <li>Any indirect, incidental, special, consequential, or punitive damages</li>
            <li>Loss of profits, revenue, data, or use</li>
            <li>Damages resulting from market volatility</li>
            <li>Technical issues or platform downtime</li>
            <li>Third-party actions or omissions</li>
          </ul>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-sm text-yellow-700">
              <strong>Maximum Liability:</strong> In no event shall our total liability exceed the amount of fees paid by you to us in the six months preceding the event giving rise to the liability.
            </p>
          </div>
        </>
      ),
    },
    {
      title: "8. Termination and Suspension",
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-800 mb-2">By User</h5>
              <p className="text-sm text-gray-600">
                You may terminate your account at any time by contacting customer support. Outstanding obligations must be settled before termination.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-800 mb-2">By MyBGFx</h5>
              <p className="text-sm text-gray-600">
                We may suspend or terminate your account for violation of these Terms, suspicious activity, or legal/regulatory requirements.
              </p>
            </div>
          </div>
          
          <p className="text-sm text-gray-500">
            Upon termination, your right to use the Platform will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive.
          </p>
        </div>
      ),
    },
    {
      title: "9. Dispute Resolution",
      content: (
        <div className="space-y-3">
          <p className="text-gray-600">
            Any disputes arising from or relating to these Terms shall be resolved through the following process:
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">1</span>
              </div>
              <span className="font-medium">Negotiation</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">2</span>
              </div>
              <span className="font-medium">Mediation</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold">3</span>
              </div>
              <span className="font-medium">Arbitration</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 pt-2">
            The arbitration shall be conducted in accordance with the rules of the International Chamber of Commerce (ICC). The seat of arbitration shall be London, United Kingdom.
          </p>
        </div>
      ),
    },
    {
      title: "10. Amendments and Updates",
      content: (
        <>
          <p className="mb-3 text-gray-600">
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the Platform.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">Notification Process</h5>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Email notification for major changes</li>
              <li>• In-platform notifications for all changes</li>
              <li>• Updated "Last Modified" date displayed</li>
            </ul>
          </div>
          
          <p className="text-sm text-gray-500 mt-3">
            Your continued use of the Platform following any changes constitutes acceptance of those changes. It is your responsibility to review these Terms regularly.
          </p>
        </>
      ),
    },
    {
      title: "11. Governing Law and Jurisdiction",
      content: (
        <div className="space-y-3">
          <p className="text-gray-600">
            These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
          </p>
          
          <div className="flex items-start space-x-2 p-3 bg-gray-50 rounded-lg">
            <svg className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
            <p className="text-sm text-gray-600">
              The courts of London, England shall have exclusive jurisdiction over any disputes arising under these Terms, except where arbitration applies.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>MyBGFx Terms & Conditions | Legal Agreement</title>
        <meta
          name="description"
          content="Review MyBGFx Terms & Conditions. Understand our legal agreement covering trading rules, risk disclosure, and user responsibilities."
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
                  Terms & Conditions
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-white/90 mb-6"
                >
                  Our legal agreement governing your use of MyBGFx trading platform
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
            {/* Key Features */}
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
                Key Agreement Features
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {keyFeatures.map((feature, index) => (
                  <FeatureCard
                    key={feature.title}
                    {...feature}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            {/* Platform Stats */}
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
                Platform Standards
              </motion.h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {tradingStats.map((stat, index) => (
                  <StatCard key={stat.label} {...stat} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-red-800">Legal Notice</h3>
                    <div className="mt-2 text-red-700">
                      <p>
                        By using MyBGFx, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. These terms contain important information regarding your rights, obligations, and risk disclosures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Collapsible Terms Sections */}
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
                Detailed Terms & Conditions
              </motion.h2>

              <div className="space-y-3">
                {sections.map((section, index) => (
                  <Section key={section.title} {...section} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Acceptance Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-6 md:p-8 mb-12"
            >
              <div className="text-center max-w-2xl mx-auto">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl md:text-3xl font-bold text-white mb-4"
                >
                  Agreement Acceptance
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-white/90 mb-6"
                >
                  By continuing to use our platform, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <motion.a
                    href="/privacy"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Review Privacy Policy
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
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.print()}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white font-medium rounded-lg border border-white/30 hover:bg-white/30 transition-colors"
                  >
                    Print Terms
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
                        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Contact for Questions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Questions About These Terms?
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Legal Department</h4>
                    <a
                      href="mailto:support@mybgfx.com"
                      className="text-primary hover:underline flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>support@mybgfx.com</span>
                    </a>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Support Center</h4>
                    <a
                      href="/support"
                      className="text-primary hover:underline flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span>Contact Support</span>
                    </a>
                  </div>
                </div>
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
              © {new Date().getFullYear()} MyBGFx Ltd. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Registered in England & Wales | Company No: 12345678
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a href="/cookies" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </a>
              <span className="text-gray-600">•</span>
              <a href="/risk-disclosure" className="text-gray-400 hover:text-white text-sm">
                Risk Disclosure
              </a>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default TermsAndConditionsPage;