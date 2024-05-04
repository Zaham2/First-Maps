'use client';

import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Library } from '@googlemaps/js-api-loader';

class MapProps {
    constructor(initialCenter: { lat: number; lng: number; }, zoomLevel: number, apiKey: string) {
        this.initialCenter = initialCenter;
        this.zoomLevel = zoomLevel;
        this.apiKey = process.env.MAPS_API_KEY!;
    }
    initialCenter: { lat: number; lng: number };
    zoomLevel: number;
    apiKey: string;
}

export const Map = (props: MapProps) => {
    const [map, setMap] = React.useState(null);
  
    const libraries: Library[] = ['places']; // Optional: Enable places library for search
  
    const handleLoad = (mapInstance: any) => {
      setMap(mapInstance);
    };

    const apiKey = props.apiKey;
  
    return (
      <LoadScript
        googleMapsApiKey={apiKey!} // Replace with your actual API key
        libraries={libraries}
      >
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          zoom={props.zoomLevel}
          center={props.initialCenter}
          onLoad={handleLoad}
        >
          {/* Add markers or other map elements here if needed */}
          {map && <Marker position={props.initialCenter} />}
        </GoogleMap>
      </LoadScript>
    );
  };
  
  export default Map;
  