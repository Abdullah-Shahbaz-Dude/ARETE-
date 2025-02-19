import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Slidebar from "../components/Slidebar";
import Fotter from "../components/Fotter";
import Dropdown from "../components/Dropdown";

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
