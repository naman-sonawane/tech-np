import type { Metadata } from "next";
import { Amiri } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  title: "Tech 4 All - Empowering Communities Through Technology",
  description: "Bridging the digital divide through technology donations and community support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Russo+One&family=Rubik+Mono+One&family=Unna:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${amiri.variable} font-amiri antialiased`}>
        {children}
      </body>
    </html>
  );
}