import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-geist-sans',
  display: 'swap',
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-clash',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Christian Ojo | Micro SaaS Builder",
  description: "I build specialized Micro SaaS solutions like compliance trackers and price engines to help businesses scale and automate operations.",
  keywords: "Christian Ojo, Micro SaaS, custom software, compliance tracker, price comparison, automation, Eswatini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
