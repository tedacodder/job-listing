"use client";
import "./globals.css";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./lib/store";
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Job-Listing App</title>
        <meta
          name="description"
          content="A job listing project build with nextjs"
        />
      </head>
      <body>
        <main>
          <Provider store={store}>{children}</Provider>
        </main>
      </body>
    </html>
  );
}
