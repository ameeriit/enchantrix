import type { Metadata } from "next";

import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enchantrix",
  description: "Spell list app",
};

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
      <body className="font-mashan">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
