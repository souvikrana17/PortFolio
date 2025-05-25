import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Head from 'next/head'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Souvik Rana",
  description: "Souvik Rana's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
     <Head>
  <link rel="icon" href="logo.png" sizes="any" />

  {/* ✅ JSON-LD Structured Data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Souvik Rana",
        "url": "https://souvik-rana.vercel.app",
        "sameAs": [
          "https://github.com/YOUR_USERNAME",
          "https://linkedin.com/in/YOUR_USERNAME",
          "https://en.gravatar.com/YOUR_USERNAME"
        ]
      }),
    }}
  />
</Head>

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
