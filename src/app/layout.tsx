import type { Metadata } from "next";
import { Caveat, Kalam, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-head",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const kalam = Kalam({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Salamonitor — The manager of your infra",
  description:
    "Salamonitor reads your observability platform, finds recurring errors nobody owns, and files a tiny, reviewable PR. Merge it, don't, or close it — we learn either way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${kalam.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
