'use client';

import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Library } from '@googlemaps/js-api-loader';
import { MapProps } from '@/helpers/classes';

const splitLatLong = (latLong: string) => {
  const [lat, lng] = latLong.trim().split(',')
  return { lat: parseFloat(lat), lng: parseFloat(lng) }
}


export const Map = ({ apiKey, initialCenter, zoomLevel, places}: MapProps) => {
    const [map, setMap] = React.useState(null);
  
    const libraries: Library[] = ['places']; // Optional: Enable places library for search
  
    const handleLoad = (mapInstance: any) => {
      setMap(mapInstance);
    };
  
    return (
      <LoadScript
        googleMapsApiKey={apiKey!} // Replace with your actual API key
        libraries={libraries}
      >
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          zoom={zoomLevel}
          center={initialCenter}
          onLoad={handleLoad}
        >
          {/* Add markers or other map elements here if needed */}
          {/* {map && <Marker position={initialCenter} />} */}
          {map && places.map((place) => (
            <Marker key={place.id} position={splitLatLong(place.lat_long!)} />
          ))}
        </GoogleMap>
      </LoadScript>
    );
  };
  
  export default Map;
  