import React from "react";
import Link from "next/link";
import BannerSection from "./Banner";
import IntroduceSection from "./Introduce";
import MapAndNewsSection from "./Map&News";

function HomePage() {
  return (
    <div>
      <div>
        <BannerSection />
        <IntroduceSection />
        <MapAndNewsSection />
      </div>
      <div>
        <Link href={"/login"}>Login</Link>
      </div>
      <div>
        <Link href={"/register"}>Register</Link>
      </div>
    </div>
  );
}

export default HomePage;
