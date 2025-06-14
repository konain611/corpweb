import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Roboto, Montserrat } from 'next/font/google';

import "./globals.css";
import Footer from "./components/footer";
import SubFooter from "./components/subFooter";
import Navbar from "./components/navbar";
import CookieConsentBanner from "./components/alert";



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  subsets: ['latin'],
});

// Example for using Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "DIGINFO",
  description: "Created by DIGINFO Team of developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`${roboto.className} ${montserrat.className}`}
      >
        <Navbar/>
        <br />
        {children}
        <SubFooter/>
        <Footer/>
        <CookieConsentBanner/>
      </body>
    </html>
  );
}
