import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  override render = () => (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap" />
      </Head>
      <body className="w-full h-full overflow-hidden bg-gray-800 font-sans text-white text-tiny">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
