import type { Metadata } from "next";
import { Ma_Shan_Zheng } from "next/font/google";
import BannerTitle from "./components/BannerTitle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enchantrix",
  description: "Spell list app",
};

const mashan = Ma_Shan_Zheng({ weight: ["400"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Sedgwick+Ave+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${mashan.className} bg-slate-100 h-screen`}>
        <Header />
        <BannerTitle title=" Welcome to Worlds of Spells" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
