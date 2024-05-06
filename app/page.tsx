import Map from "@/components/Map";
import MapContainer from "@/components/MapContainer";
// import { createClient } from "@/utils/supabase/server";
import React from "react";
// import { fetch } from "next/dist/server/utils" 


export default async function Index() {

  const places = await fetch('http://localhost:3000/users', {  //TODO: Rename this route
    method: 'GET',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())

  // here we could do something with the data
  // here we filter the data... we get only the places that need to be rendered and pass those to MapContainer

  return (
    <div>
      <MapContainer apiKey={process.env.MAPS_API_KEY!} initialCenter={{ lat: -34.397, lng: 150.644 }} zoomLevel={17} places={places}/>
    </div>
  );
}
