import "./globals.css";
import React from "react";
import { Poppins } from 'next/font/google'
import type { Metadata } from "next";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Murali Samui",
  description: "assignment on next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
