import React from "react";
import BannerSection from "./Banner";
import IntroduceSection from "./Introduce";
import MapAndNewsSection from "./Map&News";

function HomePage() {
  return (
    <div>
      <BannerSection />
      <IntroduceSection />
      <MapAndNewsSection />
    </div>
  );
}

export default HomePage;
