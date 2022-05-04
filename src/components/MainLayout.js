import React from "react";
import { Outlet } from "react-router-dom";
// import Footer from "./NavFoot/Footer";
import Navbar from "./NavFoot/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
