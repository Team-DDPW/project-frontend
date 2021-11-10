// import { createTheme } from '@mui/material/styles';

// import Layout from '../components/Layout';
// import Heading from '../components/Heading';

// export default function Home() {
//   return (
//     <Layout>
//       <main>
//         <Heading />
//       </main>
//     </Layout>

//   );
// }

import styled from 'styled-components';
import Layout from '../components/Layout';
import dynamic from 'next/dynamic';
import Heading from '../components/Heading';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';
import Cardtemplate from '../components/Cardtemplate';

import { useAuth } from '../contexts/auth';

const BgImage = dynamic(() => import('../components/BGImage'), {
  ssr: false,
});

const Wrapper = styled.div`
  display: flex-grow;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  const { user } = useAuth();
  console.log('user:', user);
  return (
    <>
      <Wrapper>
        <Header />
        <Dropdown />
        <Cardtemplate />
      </Wrapper>

      <BgImage />
    </>
  );
}
