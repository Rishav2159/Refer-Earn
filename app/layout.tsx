import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Refer Earn: Let's Grow",
  description: "Share the Love, Earn the Rewards!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
