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
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossOrigin=""
        />
        <meta name="author" content="Yazalde Filimone" />
        <meta name="description" content="Simple website with spaces I want travel in future" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
