import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enterprise Onchain | Track Institutional Crypto Adoption",
  description: "Intelligence built for decision makers. Track tokenization, adoption, and regulatory shifts from one place.",
  openGraph: {
    title: "Enterprise Onchain | Track Institutional Crypto Adoption",
    description: "Intelligence built for decision makers. Track tokenization, adoption, and regulatory shifts from one place.",
    url: "https://enterpriseonchain.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Onchain | Track Institutional Crypto Adoption",
    description: "Intelligence built for decision makers. Track tokenization, adoption, and regulatory shifts from one place.",
  },
  icons: {
    icon: "https://i.imgur.com/LJ0gSjb.jpeg",
    apple: "https://i.imgur.com/LJ0gSjb.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
