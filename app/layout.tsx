import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/StoreProvider";
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
        <div className="container">
          <StoreProvider>
            {children}
        </StoreProvider>
        </div>
      </body>
    </html>
  );
}
