import type { Metadata } from "next";
import { Fredoka, Nunito_Sans } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portofolio-qa.pages.dev"),
  title: "Indra Kuswara — QA Engineer",
  description:
    "QA Engineer with 7+ years of experience in SaaS, supply chain, and digital media. Playwright automation, API & performance testing — regression time cut by 75%, 95% release coverage.",
  openGraph: {
    title: "Indra Kuswara — QA Engineer",
    description:
      "I find the bugs, so your users don't have to. QA Engineer based in Bekasi, Indonesia — automation, API & performance testing.",
    type: "website",
    images: ["/mascot.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
