import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { ErrorBoundary } from '@/components/error-boundary';

export const metadata: Metadata = {
  metadataBase: new URL('https://vitalblink.com'),
  title: {
    default: 'VitalBlink - Complete Hospital Management System',
    template: '%s | VitalBlink',
  },
  description: 'Professional hospital management software with 26+ medical departments, patient records, billing, inventory, and advanced security. One blink, full control. Secure, reliable, and affordable healthcare IT solution.',
  keywords: [
    'hospital management system',
    'healthcare software',
    'medical management',
    'patient records',
    'hospital billing',
    'EHR system',
    'clinic management',
    'healthcare IT',
    'medical inventory',
    'hospital administration',
    'VitalBlink',
  ],
  authors: [{ name: 'VitalBlink Team' }],
  creator: 'VitalBlink',
  publisher: 'VitalBlink',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vitalblink.com',
    siteName: 'VitalBlink',
    title: 'VitalBlink - Complete Hospital Management System',
    description: 'Professional hospital management software with 26+ medical departments. Secure, reliable, and affordable healthcare IT solution.',
    images: [
      {
        url: '/default_logo.png',
        width: 1200,
        height: 630,
        alt: 'VitalBlink Hospital Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VitalBlink - Hospital Management System',
    description: 'Professional healthcare management software for clinics and hospitals',
    images: ['/default_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/default_logo.png',
  },
  verification: {
    // Add your verification codes here when ready
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
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
    <html lang="en">
      <head>
        <link 
          rel="alternate" 
          type="application/rss+xml" 
          title="VitalBlink Healthcare Blog RSS Feed" 
          href="/blog/rss.xml" 
        />
      </head>
      <body className={`min-h-[100dvh] bg-gray-50 text-black ${manrope.className}`}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
