import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Global Components/Navbar";
import Slidebar from "../components/Global Components/Slidebar";
import Fotter from "../components/Global Components/Fotter";
import ScrollToTop from "../components/Global Components/ScrollToTop";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Slidebar />
      <Outlet />
      <Fotter />
    </div>
  );
};

export default Home;
