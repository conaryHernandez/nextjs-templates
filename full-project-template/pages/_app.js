import Head from 'next/head';
import Layout from '../components/Layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Blog</title>
        <meta name='description' content='Next Blog' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
