import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment, FunctionComponent } from 'react';
import { GlobalStyles } from '~/shared/styles/globals';

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>My Dream Trips</title>
        <link rel="shortcut icon" href="/img-512.png" />
        <link rel="apple-touch-icon" href="/img-512.png" />

        <meta name="author" content="Yazalde Filimone" />
        <meta name="description" content="Simple website with spaces I want travel in future" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
