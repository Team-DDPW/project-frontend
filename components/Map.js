import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Container, Row, Col } from 'react-bootstrap';

const containerStyle = {
  width: '750px',
  height: '700px',
  marginTop: '100px',
  marginLeft: '65px',
};

const center = {
  lat: 31.9686,
  lng: -99.9018,
};

function Map() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <LoadScript googleMapsApiKey="">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={5}
              sx={{ bgcolor: 'error.main' }}
            >
              <Marker
                position={{
                  lat: 31.9686,
                  lng: -99.9018,
                }}
              />
              <></>
            </GoogleMap>
          </LoadScript>
        </Col>
      </Row>
    </Container>
  );
}

export default Map;
