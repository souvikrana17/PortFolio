// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ThemeProvider } from "./provider";
import StructuredData from "@/components/StructuredData"; // Component for structured data

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOUVIK RANA",
  description: "SOUVIK RANA's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        {/* You may also include other <meta> tags here if needed */}
      </head>
      <body className={inter.className}>
        {/* SEO structured data for Google */}
        <StructuredData />

        {/* Theme + App content */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {/* Vercel insights */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
