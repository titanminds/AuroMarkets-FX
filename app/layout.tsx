import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadataBase = new URL("https://www.mybgfx.com");

export const viewport: Viewport = {
  themeColor: "#138DC8",
}

export const metadata: Metadata = {
  title: "Best Forex Trading Platform in Pakistan | MyBGFx",
  description:
    "MyBGFx is the leading forex trading platform in Pakistan with fast execution, low spreads, and secure crypto trading.",
  keywords: [
    "forex trading Pakistan",
    "online trading platform",
    "Pakistani forex broker",
    "crypto trading Pakistan",
    "MyBGFx",
  ],
  icons: {
    icon: "/assets/images/favicon.png",
    shortcut: "/assets/images/favicon.png",
    apple: "/assets/images/favicon.png",
  },
  appleWebApp: {
    capable: true,
    title: "MyBGFx",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: "MyBGFx | Forex Trading in Pakistan",
    description:
      "Trade forex, crypto, and stocks with MyBGFx in Pakistan. Secure platform, low spreads, and local support.",
    type: "website",
    url: "https://www.mybgfx.com",
    siteName: "MyBGFx",
    images: [
      {
        url: "https://www.mybgfx.com/assets/images/bg.png",
        width: 1200,
        height: 630,
        alt: "MyBGFx forex trading platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyBGFx | Forex Trading in Pakistan",
    description:
      "Start trading forex and crypto with MyBGFx, the trusted trading platform in Pakistan.",
  },
  other: {
    "msapplication-TileColor": "#138DC8",
    "msapplication-TileImage": "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}