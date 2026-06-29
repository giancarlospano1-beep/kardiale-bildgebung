import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. med. Giancarlo Spano | Facharzt für Kardiologie FMH",
  description:
    "Kardiologie und kardiale Bildgebung (CT und MRT) in Thun und Neuchâtel. Facharzt FMH für Kardiologie und Innere Medizin.",

  verification: {
    google: "G5DG9mHwhV2yabjxmUDnTucFPu-z7xSoZSjkfxJeNYE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
