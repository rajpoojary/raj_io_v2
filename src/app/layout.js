import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter bg-light dark:bg-dark w-full min-h-screen`}>
        {children}
      </body>
    </html>
  );
} 