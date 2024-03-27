import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header className="py-4 w-full" />
        <div className="flex flex-1 flex-col md:flex-row">
          <Outlet />
        </div>
        <Footer className="justify-center p-4 w-full" />
      </div>
    </>
  );
}
