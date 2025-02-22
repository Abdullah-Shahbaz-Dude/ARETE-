import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Global Components/Navbar";
import Slidebar from "../components/Global Components/Slidebar";
import Fotter from "../components/Global Components/Fotter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slidebar />
      <Outlet />
      <Fotter />
    </div>
  );
};

export default Home;
