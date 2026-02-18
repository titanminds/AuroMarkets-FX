"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import FloatingButtons from "../components/FloatingButton/FloatingIcons";
import FireLoader from "./PendulumLoaderWithImage";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <FireLoader logoSrc={"/assets/images/favicon.png"} />
      ) : (
        <>
          <Navbar />
          {/* <FireLoader logoSrc={"/assets/images/favicon.png"} /> */}
          <FloatingButtons />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}