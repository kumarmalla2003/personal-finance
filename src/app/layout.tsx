import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/custom.scss";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FinEdge - Personal Finance Manager",
  description: "Comprehensive personal finance management and education platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="light">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
