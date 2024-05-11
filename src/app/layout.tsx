import type { Metadata } from "next";
import { Ma_Shan_Zheng, Sedgwick_Ave_Display } from "next/font/google";

import "@/app/globals.css";
import BannerTitle from "@/components/BannerTitle";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Enchantrix",
  description: "Spell list app",
};

const mashan = Ma_Shan_Zheng({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-mashan",
});

const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sedgwick",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          sedgwick.variable,
          mashan.variable,
          "font-mashan bg-slate-100 h-screen"
        )}
      >
        <Header />
        <BannerTitle title=" Welcome to Worlds of Spells" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
