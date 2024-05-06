"use client";

import React from 'react'
// import Map from './Map'
import Marker from './Marker'
import { MapContainerProps } from '@/helpers/classes'
import { Map } from './Map'

const MapContainer = ({ apiKey, initialCenter, zoomLevel, places }: MapContainerProps) => {  

  return (
    <div>
        <Map apiKey={apiKey} initialCenter={initialCenter} zoomLevel={zoomLevel} places={places}/>
    </div>
  )
}

export default MapContainer
