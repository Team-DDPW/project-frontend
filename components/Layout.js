import Head from 'next/head';
import Header from './Header';

import Image from 'next/image';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>FastEx</title>
      </Head>
      <Header />
      {children}

    </div>
  );
}

export default Layout;
