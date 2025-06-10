import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ThemeProvider } from "./provider";
import StructuredData from "@/components/StructuredData"; // Import the component

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
        <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "SOUVIK RANA",
  "url": "https://souvik-rana.vercel.app/",
  "sameAs": [
    "https://github.com/Souvik-Rana",
    "https://www.linkedin.com/in/souvik-rana-sr17/",
    "https://www.instagram.com/souvikrana17/",
    "https://www.kaggle.com/souvikrana17"      
  ]
}
</script>

      </head>
      <body className={inter.className}>
        <StructuredData /> {/* Include the structured data script */}
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
