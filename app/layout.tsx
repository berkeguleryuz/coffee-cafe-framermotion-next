import type { Metadata } from "next";
import { Harmattan } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const fonts = Harmattan({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-sacramento",
});

export const metadata: Metadata = {
  title: "Clodron Coffee",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.className}>{children}</body>
    </html>
  );
}
