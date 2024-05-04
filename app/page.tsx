import Map from "@/components/Map";
// import { createClient } from "@/utils/supabase/server";
import React from "react";
// import { fetch } from "next/dist/server/utils" 


export default async function Index() {

  const data = await fetch('http://localhost:3000/users', {
    method: 'GET',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())

  // here we could do something with the data

  return (
    <div>
      <Map apiKey={process.env.MAPS_API_KEY!} initialCenter={{ lat: -34.397, lng: 150.644 }} zoomLevel={17}/>
    </div>
  );
}
