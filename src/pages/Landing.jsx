import React from "react";

import Logo from "../components/Homepage/Logo";
import SlickCarousel from "../components/Homepage/SlickCarousel";
import HeroAuto from "../components/Homepage/HeroAuto";
import LandingPageTexts from "../components/Homepage/LandingPageTexts";

import JoinUS from "../components/JoinUS";
import SpecialistAreas from "../components/Homepage/SpecialistAreas";
import Ready from "../components/Homepage/Ready";
import Banner from "../components/Homepage/Banner";

const Landing = () => {
  return (
    <div>
      <HeroAuto />
      <Banner
        heading="What We Do"
        paragraph="At Arete, we support individuals and organisations unlock their
              highest potential through psychology-driven interventions that
              support innovation, digital transformation, and personal
              development. Whether you’re navigating change, overcoming
              challenges, or striving for excellence, we provide the insight,
              tools, and guidance to help you grow, adapt, and achieve.
              Excellence isn’t just a goal it’s the foundation of everything we
              do."
        buttontxt="Find out More"
      />
      <SpecialistAreas />
      <SlickCarousel />
      <Logo />
      <Ready />
      <LandingPageTexts />
      <JoinUS />
    </div>
  );
};

export default Landing;
