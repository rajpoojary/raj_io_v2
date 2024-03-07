import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';

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
    <main className={'${montserrat.variable} font-mont bg-light w-full min-h-screen' } >
      <NavBar></NavBar>
    <Component {...pageProps} />
    <Footer></Footer>
    Home
    </main> 
  </>
  );
}