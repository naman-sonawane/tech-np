import type { Metadata } from "next";
import { Amiri, Roboto, Ubuntu, Oswald } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amiri",
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const ubuntu = Ubuntu({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

const oswald = Oswald({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Tech 4 All • Empowering Communities Through Technology",
  description: "Bridging the digital divide through technology donations and community support.",
  openGraph: {
    title: "Tech 4 All • Empowering Communities Through Technology",
    description: "Bridging the digital divide through technology donations and community support.",
    url: "https://technology4all.vercel.app/",
    siteName: "Tech 4 All",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tech 4 All • Empowering Communities Through Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech 4 All • Empowering Communities Through Technology",
    description: "⚙️ Bridging the digital divide through technology donations and community support.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet"/>
      </head>
      <body className={`${amiri.variable} ${roboto.variable} ${ubuntu.variable} ${oswald.variable} font-ubuntu antialiased`}>
        {children}
      </body>
    </html>
  );
}