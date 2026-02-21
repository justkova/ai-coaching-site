import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Coaching & Consulting | Stop Guessing. Start Using AI.",
  description: "Expert AI coaching for business leaders. Cut through the hype and implement AI solutions that actually deliver results.",
  keywords: ["AI coaching", "AI consulting", "business AI strategy", "AI implementation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
