import Head from 'next/head';
import type { FC } from 'react';
import React from 'react';
import Header from './Header';

const Layout: FC = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>Paint</title>
    </Head>
    <Header />
    {children}
  </>
);

export default Layout;
