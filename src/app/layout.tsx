import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ahad Ramzan - Frontend Developer | React.js | Next.js | TailwindCSS',
  description:
    'Frontend Developer specializing in React.js, Next.js, and TailwindCSS. Creating exceptional user experiences with modern web technologies. Available for freelance projects.',
  keywords: [
    'Frontend Developer',
    'React.js',
    'Next.js',
    'TailwindCSS',
    'JavaScript',
    'TypeScript',
    'Web Developer',
    'UI/UX',
    'Responsive Design',
    'Ahad Ramzan',
  ],
  authors: [{ name: 'Ahad Ramzan' }],
  creator: 'Ahad Ramzan',
  openGraph: {
    title: 'Ahad Ramzan - Frontend Developer',
    description:
      'Frontend Developer specializing in React.js, Next.js, and TailwindCSS',
    url: 'https://ahadramzan.vercel.app',
    siteName: 'Ahad Ramzan Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ahad Ramzan - Frontend Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahad Ramzan - Frontend Developer',
    description:
      'Frontend Developer specializing in React.js, Next.js, and TailwindCSS',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
