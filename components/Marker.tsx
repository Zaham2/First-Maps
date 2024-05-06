import React from 'react'
import { Marker as GoogleMarker } from '@react-google-maps/api'
import { MarkerProps } from '@/helpers/classes'

const Marker = ({ lat, lng }: MarkerProps) => {
  return (
    <GoogleMarker position={{ lat: lat, lng: lng }} />
  )
}

export default Marker
