import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Madhuban Motors — Car Accessories & Customization | Ghaziabad, Delhi NCR",
  description:
    "Ghaziabad & Delhi NCR's most trusted car customization workshop since 1989. Seat covers, car audio, ceramic coating, GPS, cameras, LED & security. 3 lakh+ cars served.",
  keywords: [
    "car accessories ghaziabad",
    "car customization ghaziabad",
    "car audio installation ghaziabad",
    "seat covers ghaziabad",
    "ceramic coating ghaziabad delhi ncr",
    "car accessories delhi",
    "madhuban motors ghaziabad",
  ],
  openGraph: {
    title: "Madhuban Motors — Three Generations. One Standard.",
    description: "Delhi NCR's premium car accessories & customization since 1989.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} antialiased`}>
      <body><LangProvider>{children}</LangProvider></body>
    </html>
  );
}
