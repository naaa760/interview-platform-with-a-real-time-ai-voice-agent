import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter, Roboto, Dancing_Script } from "next/font/google";

import "./globals.css";

const titleFont = Roboto({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-title",
});

const cursiveFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-cursive",
});

export const metadata: Metadata = {
  title: "EchoHire",
  description: "An AI-powered platform for preparing for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${titleFont.variable} ${cursiveFont.variable} antialiased pattern`}
      >
        {children}

        <Toaster />
      </body>
    </html>
  );
}
