import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
});

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Raj Ambalpady Info." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="ff1baac4-0236-440e-be9f-0e0a046e4701"
        strategy="lazyOnload"
      />
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
