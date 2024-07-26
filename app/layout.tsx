import type { Metadata } from 'next';
import Navbar from './component/Navbar';

import './globals.css';
import { headers } from 'next/headers';
export const metadata: Metadata = {
  title: 'Medium app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = headers().get('x-invoke-path') || '';
  console.log(pathname, 'pathname');
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
