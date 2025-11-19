import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';

export const metadata: Metadata = {
  title: 'VitalBlink - Complete Hospital Management System',
  description: 'Professional hospital management software with 26+ medical departments, patient records, billing, inventory, and advanced security. One blink, full control.',
  icons: {
    icon: '/default_logo.png',
    shortcut: '/default_logo.png',
    apple: '/default_logo.png',
  },
};

export const viewport: Viewport = {
  maximumScale: 1
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
    >
      <body className={`min-h-[100dvh] bg-gray-50 text-black ${manrope.className}`}>
        {children}
      </body>
    </html>
  );
}
