import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Michiel Aelis Wijaya", template: "%s — Michiel Aelis Wijaya" },
  description: "Medical student working across software engineering, research, and digital systems.",
  authors: [{ name: "Michiel Aelis Wijaya" }],
  creator: "Michiel Aelis Wijaya",
  openGraph: {
    title: "Michiel Aelis Wijaya",
    description: "Medical student working across software engineering, research, and digital systems.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michiel Aelis Wijaya",
    description: "Medical student working across software engineering, research, and digital systems.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
