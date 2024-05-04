import React from "react";
import Navigation from "@/components/Navigation";
import "./globals.css";
import { createClient } from "@/utils/supabase/server";

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  const supabase = createClient();
  const data = await supabase.from('places').select('*');

  console.log('data')
  console.log(data)

  return (
    <html>
      <body>
          <div>
            <Navigation />
          </div>
          <div>
            {data.data}
            {children}
        </div>
      </body>
    </html>
  );
}
