import type { Metadata } from 'next';
import Navbar from './component/Navbar';

import './globals.css';
export const metadata: Metadata = {
  title: 'Medium app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
