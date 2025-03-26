import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Raj Poojary',
  description: 'Personal website of Raj Poojary',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-light dark:bg-dark w-full min-h-screen`}>
        {children}
        <Script
          src="https://analytics.rajpoojary.com/script.js"
          data-website-id="b5c5c0c0-5c5c-5c5c-5c5c-5c5c5c5c5c5c"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
} 