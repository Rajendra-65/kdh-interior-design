import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./(home)/navbar";
import Footer from "./(home)/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KHD - Interior Design",
  description: "The Best Interior Design Service in Bhubaneswar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-8 mb-[180px] scroll-smooth`}
      >
        <Navbar />
          {children}
        <Footer cn="!pl-0" />
      </body>
    </html>
  );
}
