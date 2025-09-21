import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Job-Listing App</title>
        <meta name="description" content="A minimal Next.js 13 project" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
