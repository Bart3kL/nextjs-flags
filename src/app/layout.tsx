import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { VercelToolbar } from '@vercel/toolbar/next';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} <VercelToolbar />
      </body>
    </html>
  );
}
