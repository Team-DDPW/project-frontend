import { Grid } from '@mui/material';
import React from 'react';
import Layout from '../components/Layout';
import List from '../components/List';
import Map from '../components/Map';

function Listings() {
  return (
    <div>
      <Layout>
        <h1>Listing</h1>

        <Grid container spacing={4}>
          <Grid item xs={4}>
            <List />
          </Grid>
          <Grid item xs={8}>
            <Map />
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}

export default Listings;
