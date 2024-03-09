// create a react component for a layout page
// Path: client/src/components/layout.js
import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Outlet />
    </div>
  );
}

