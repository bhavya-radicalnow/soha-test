import { Geist, Geist_Mono, Onest } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import 'react-loading-skeleton/dist/skeleton.css';

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-onest",
});

export const metadata = {
  title: "Dr. Chaithra SK",
  description: "Dr. Chaithra SK",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WTL69B8Z" />
      {/* <GoogleAnalytics gaId="G-BLE2R0VPP6" />    */}
      <body
        className={`${onest.variable} font-sans antialiased`} suppressHydrationWarning
        >
        {children}
      </body>
    </html>
  );
}
