import React from 'react';
import List from '../components/List';
import Map from '../components/Map';
import { Sticky, StickyScrollUp, StickyProvider } from 'react-stickup';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';
import Header from '../components/Header';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const BgImage = dynamic(() => import('../components/BGImage'), {
  ssr: false,
});

const container = React.createRef();

const Wrapper = styled.div`
  display: flex-grow;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;


function Listings() {
  return (
    <>
      <Wrapper>
        <Row>
          <Header />
        </Row>
        <Container>
          <Row>
            <StickyProvider>
              <Col>
                <List />
              </Col>
              <Col>
                <Sticky>
                  <Map />
                </Sticky>
              </Col>
            </StickyProvider>
          </Row>
        </Container>
      </Wrapper>
      <BgImage />
    </>
  );
}

export default Listings;



