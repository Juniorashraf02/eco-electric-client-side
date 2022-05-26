import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 23.87365013744025, 
  lng: 90.38257933293865
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDdnUI5oF_hX399nhFPaVz3D-jxkv0ullM"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={center}></Marker>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)