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
  description: 'Professional hospital management software starting at $299. Get 26+ medical departments, unlimited users, EHR, billing, inventory management. One-time payment, lifetime updates. Save 90% vs subscription software.',
  keywords: [
    'hospital management system',
    'affordable hospital software',
    'cheap hospital management system',
    'HMS software price',
    'hospital software cost',
    'one-time payment HMS',
    'EHR system',
    'clinic management software',
    'medical practice management',
    'healthcare software',
    'patient records software',
    'hospital billing software',
    'medical inventory management',
    'hospital administration software',
    'electronic health records',
    'practice management system',
    'medical software',
    'healthcare IT solution',
    'hospital ERP',
    'clinic software',
    'VitalBlink',
    'vitalblink hospital',
    'affordable EHR',
    'cheap clinic software',
    'hospital management system India',
    'HMS for small clinics',
    'medical software India',
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
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CXTHPG65DX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CXTHPG65DX');
            `,
          }}
        />
        <link 
          rel="alternate" 
          type="application/rss+xml" 
          title="VitalBlink Healthcare Blog RSS Feed" 
          href="/blog/rss.xml" 
        />
        {/* Schema.org structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'VitalBlink',
              url: 'https://vitalblink.com',
              logo: 'https://vitalblink.com/default_logo.png',
              description: 'Professional hospital management software with 26+ medical departments',
              sameAs: [
                'https://x.com/vitalblink',
                'https://www.youtube.com/channel/UCfFuZTlKNywVmA1v8GzuP4Q',
                'https://github.com/divyanshxxx527-beep'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'contact@vitalblink.store',
                contactType: 'Customer Service'
              }
            }),
          }}
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
