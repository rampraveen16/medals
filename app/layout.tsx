import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/feature/store/StoreProvider";
import { Outfit } from "next/font/google";

export const metadata: Metadata = {
  title: "Medal List",
  description: "See the list of teams and medals won by each",
};

const internalFont = Outfit({
  subsets:['latin'],
  weight:['300','400','500','700'],
  variable: '--font-outfit',
   display:'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={internalFont.variable}>
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
       
      </body>
    </html>
  );
}
