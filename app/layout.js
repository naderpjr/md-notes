import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./fanta.css"
import Head from "./head.js";
import AuthProvider from "@/context/AuthContext";

export const metadata = {
  title: "MD Notes",
  description: "Easy Breezy note taking app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body>
          <div id="app">{children}</div>
          <div id="portal"></div>


        </body>
      </AuthProvider>
    </html>
  );
}
