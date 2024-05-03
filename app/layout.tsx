import Navigation from "@/components/Navigation";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html>
      <body>
          <div>
            <Navigation />
          </div>
          <div>
            {children}
        </div>
      </body>
    </html>
  );
}
