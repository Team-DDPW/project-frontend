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
      {/* <Image
        src="/cargo.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom center"
        z-index='-1'
      /> */}
    </div>
  );
}

export default Layout;
