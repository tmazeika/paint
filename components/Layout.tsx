import Head from 'next/head';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import Header from './Header';

const Layout: FC = ({ children }: PropsWithChildren<unknown>): JSX.Element => (
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
