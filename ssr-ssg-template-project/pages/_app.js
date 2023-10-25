import Head from 'next/head';
import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>NextJS Events</title>
        <meta
          name='description'
          content='Find a lot of great events that allow you to evolve...'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='keywords' content='nextjs, react, javascript, events' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
