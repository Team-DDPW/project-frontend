import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>FastEx</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
