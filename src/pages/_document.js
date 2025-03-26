import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script
          id="theme-switcher"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Check if theme exists in localStorage
              const theme = localStorage.getItem('theme') || 'light';
              // Apply theme to document
              document.documentElement.classList.toggle('dark', theme === 'dark');
            `
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
