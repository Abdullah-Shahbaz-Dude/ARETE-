import React from "react";
import WhatHero from "../components/What We do/WhatHero";
import WhatBanner from "../components/What We do/WhatBanner";
import Logo from "../components/Logo";
import BookUs from "../components/BookUs";
import SlickCarousel from "../components/Homepage/SlickCarousel";

const What = () => {
  return (
    <div>
      <WhatHero />
      <WhatBanner />
      <SlickCarousel />
      <Logo />
      <BookUs />
    </div>
  );
};

export default What;
