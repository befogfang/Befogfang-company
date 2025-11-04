import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Stop losing leads to manual chaos. We build automated sales engines for non-technical teams." />
        <meta name="keywords" content="automation, sales, lead generation, business process, Befogfang" />
        <meta name="author" content="Befogfang" />
        <meta property="og:title" content="Stop Losing Leads to Manual Chaos: We Build Your Automated Sales Engine" />
        <meta property="og:description" content="Befogfang designs, integrates, and manages simple automation flows so your team focuses only on closing sales." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stop Losing Leads to Manual Chaos: We Build Your Automated Sales Engine" />
        <meta name="twitter:description" content="Befogfang designs, integrates, and manages simple automation flows so your team focuses only on closing sales." />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}