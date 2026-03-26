import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Karupati Coffee Shop | Authentic Karupatti Coffee in Pichatur',
  description: 'Experience the fresh, traditional taste of Karupatti coffee, tea, and snacks at Karupati Coffee Shop in Pichatur, Andhra Pradesh. Call or visit us today for the best coffee near Tirupati road!',
  keywords: ["Coffee shop in Pichatur, Karupatti coffee near me, Best coffee near Tirupati road, traditional coffee, tea, snacks, Pichatur, Andhra Pradesh, Karupati Coffee Shop, local coffee shop"],
  openGraph: {
    "title": "Karupati Coffee Shop | Authentic Karupatti Coffee",
    "description": "Fresh Coffee. Traditional Taste. Visit Karupati Coffee Shop in Pichatur for authentic Karupatti coffee, tea, and snacks.",
    "url": "https://www.karupaticoffee.com",
    "siteName": "Karupati Coffee Shop",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/cozy-cup-tea_169016-3634.jpg",
        "alt": "Traditional South Indian coffee cup"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Karupati Coffee Shop | Authentic Karupatti Coffee",
    "description": "Fresh Coffee. Traditional Taste. Visit Karupati Coffee Shop in Pichatur for authentic Karupatti coffee, tea, and snacks.",
    "images": [
      "http://img.b2bpic.net/free-photo/cozy-cup-tea_169016-3634.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
