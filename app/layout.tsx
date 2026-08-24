import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CONTACT_EMAIL,
  HERO_HEADLINE,
  HERO_SUBHEAD,
  OPERATOR_LEGAL_NAME,
  PRODUCT_NAME,
  SITE_URL,
} from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PRODUCT_NAME} — MCP readiness CLI`,
    template: `%s — ${PRODUCT_NAME}`,
  },
  description: `${HERO_HEADLINE} ${HERO_SUBHEAD}`,
  applicationName: PRODUCT_NAME,
  authors: [{ name: OPERATOR_LEGAL_NAME, url: SITE_URL }],
  keywords: [
    "MCP",
    "Model Context Protocol",
    "agent readiness",
    "CLI",
    "open source",
  ],
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: PRODUCT_NAME,
    title: PRODUCT_NAME,
    description: HERO_HEADLINE,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: PRODUCT_NAME,
    description: HERO_HEADLINE,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: PRODUCT_NAME,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS, Linux, Windows",
  license: "https://opensource.org/licenses/MIT",
  url: SITE_URL,
  description: HERO_SUBHEAD,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: OPERATOR_LEGAL_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-paper font-body text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
