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
      <head>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="your-website-id"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.variable} font-inter bg-light dark:bg-dark w-full min-h-screen`}>
        {children}
      </body>
    </html>
  );
} 