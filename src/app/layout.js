import { Inter } from 'next/font/google';
import './globals.css';

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
      </body>
    </html>
  );
} 