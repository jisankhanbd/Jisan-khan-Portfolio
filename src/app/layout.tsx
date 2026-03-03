import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jisan Khan | Network Engineer",
  description:
    "Explore the portfolio of Jisan Khan, a Professional Network Engineer specializing in networking, security, and infrastructure solutions.",
  keywords: [
    "Jisan Khan",
    "Network Engineer",
    "Network Automation",
    "AI Automation",
    "Software Engineer",
    "React Developer",
  ],
  authors: [{ name: "Jisan Khan" }],
  openGraph: {
    title: "Jisan Khan | Personal Portfolio",
    description:
      "Network Engineer — Building the future of the web.",
    url: "https://jisan-khan.vercel.app",
    siteName: "Jisan Khan Portfolio",
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: "Jisan Khan Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jisan Khan | Network Engineer",
    description: "Building modern network infrastructure",
    images: ["/Website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
