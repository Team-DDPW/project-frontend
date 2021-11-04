import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

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
