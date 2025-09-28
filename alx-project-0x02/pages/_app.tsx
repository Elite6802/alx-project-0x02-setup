import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/layout/Header';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  // NOTE: The Header is included here, in _app.tsx, to wrap the entire application.
  // This ensures the navigation bar is present on ALL pages without manual import.

  return (
    <>
      <Head>
        <title>ALX Next.js Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      {/* Container for main content */}
      <main className="container mx-auto p-8 min-h-[calc(100vh-64px)]">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;