import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '1000px',
  height: '700px',
};

const center = {
  lat: 31.9686,
  lng: -99.9018,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC5BvRIbwnwfsZiON0Pg8W_KUrSLJ5cFoQ">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker
          position={{
            lat: 31.9686,
            lng: -99.9018,
          }}
        />
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;


