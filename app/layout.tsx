import type React from 'react';
import type { Metadata } from 'next';
import {
  Playfair_Display,
  Source_Sans_3,
  Dancing_Script,
} from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

// Elegant serif font for headings
const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
});

// Clean sans-serif for body text
const sourceSans = Source_Sans_3({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-source-sans',
});

// Script font for decorative elements
const dancingScript = Dancing_Script({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing-script',
});

export const metadata: Metadata = {
  title: 'Tereza & Jakub | Svatební stránka',
  description: 'Svatební stránka Terezy a Jakuba',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${sourceSans.className} ${playfairDisplay.variable} ${sourceSans.variable} ${dancingScript.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
