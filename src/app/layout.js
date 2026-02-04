import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shivam Marble & Tiles | Premium Tiles & Marbles in Nepal",
  description: "Premium quality marbles, granites, ceramic tiles, wall claddings, and sanitary ware in Itahari, Nepal. Transform your spaces with elegance.",
  keywords: "tiles, marble, granite, ceramic tiles, wall tiles, floor tiles, Nepal, Itahari, sanitary ware",
  openGraph: {
    title: "Shivam Marble & Tiles Suppliers",
    description: "Premium Tiles and Marbles for Elegant Interiors",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-bg-primary)]`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
