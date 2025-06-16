import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), // ✅ Add this line
  title: 'WebbyWolf - Premium Web Development Agency',
  description: 'Transform your digital presence with WebbyWolf. Expert web development, design, and digital solutions for modern businesses.',
  keywords: 'web development, design agency, digital solutions, responsive websites, modern web apps',
  authors: [{ name: 'WebbyWolf Team' }],
  creator: 'WebbyWolf',
  openGraph: {
    title: 'WebbyWolf - Premium Web Development Agency',
    description: 'Transform your digital presence with WebbyWolf. Expert web development, design, and digital solutions for modern businesses.',
    url: 'https://webbywolf.com',
    siteName: 'WebbyWolf',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebbyWolf - Premium Web Development Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebbyWolf - Premium Web Development Agency',
    description: 'Transform your digital presence with WebbyWolf. Expert web development, design, and digital solutions for modern businesses.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WebbyWolf",
              "description": "Premium Web Development Agency",
              "url": "https://webbywolf.com",
              "logo": "https://webbywolf.com/logo.png",
              "sameAs": [
                "https://facebook.com/webbywolf",
                "https://twitter.com/webbywolf",
                "https://linkedin.com/company/webbywolf"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}