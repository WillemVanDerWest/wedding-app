import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Fraunces } from 'next/font/google'
import localFont from 'next/font/local'

import "./globals.css";

const bodoni_Moda = Bodoni_Moda({
  variable: '--font-bodoniModa',
  display: "swap",
  weight: "400",
  preload: false
})

const brittany = localFont({
  src:'./fonts/local/BrittanySignature.ttf',
  variable: '--font-brittany',
  display: 'swap',
  preload: false
})

const fraunces = Fraunces({
  variable: '--font-fraunces',
  display: 'swap',
  weight: "100",
  preload: false
})

export const metadata: Metadata = {
  title: "Cabous en Jeanine",
  description: "Cabous en Jeanine se trou website",
  icons: {
    icon: '/icon.png'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoni_Moda.variable} ${fraunces.variable} ${brittany.variable}`}>
      <body >
        {children}
      </body>
    </html>
  );
}
