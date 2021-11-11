import styled from 'styled-components';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';
import Crossimage  from '../components/Carousel';
import Headingcard from '../components/Headingcard'
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
  // console.log('user in index:', user);
  return (
    <>
      <Wrapper>
        <Header />
        {user ? <Dropdown /> : ''}
        <Crossimage />
        <Headingcard />
      </Wrapper>

      <BgImage />
    </>
  );
}
