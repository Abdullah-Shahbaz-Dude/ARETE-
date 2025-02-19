import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Logo from "../components/Logo";
import Programmes from "../components/Programmes";
import Team from "../components/Team";
import SlickCarousel from "../components/SlickCarousel";
import HeroAuto from "../components/HeroAuto";
import LandingPageTexts from "../components/LandingPageTexts";
import BookUs from "../components/BookUs";
import JoinUS from "../components/JoinUS";
import FocusArea from "../components/FocusArea";

const Landing = () => {
  return (
    <div>
      <HeroAuto />
      <Banner />
      <FocusArea />
      <SlickCarousel />
      <Team />
      <LandingPageTexts />
      <Banner />
      <JoinUS />
      <Programmes />
      <Logo />
      <BookUs />
    </div>
  );
};

export default Landing;
