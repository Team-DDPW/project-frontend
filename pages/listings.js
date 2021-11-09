import { Grid } from '@mui/material';
import React from 'react';
import Layout from '../components/Layout';
import List from '../components/List';
import Map from '../components/Map';
import { Sticky, StickyScrollUp, StickyProvider } from 'react-stickup';

const container = React.createRef();

function Listings() {
  return (
    <Layout>
      <StickyProvider>
        <Grid container spacing={4}>
          <Grid item lg={4}>
            <List />
          </Grid>
          <div ref={container}>
            <Sticky container={container}>
              <Grid item lg={8}>
                <Map />
              </Grid>
            </Sticky>
          </div>
        </Grid>
      </StickyProvider>
    </Layout>
  );
}

export default Listings;



