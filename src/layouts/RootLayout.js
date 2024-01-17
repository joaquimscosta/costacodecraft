import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="root-layout">
      <div className="app container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
