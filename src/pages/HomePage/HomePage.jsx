import React from "react";
import { Header, OfferBanner, HeroSection } from "../../components/index";
function HomePage() {
  return (
    <div className="safeArea">
      <OfferBanner />
      <div style={{ paddingRight: "20px", paddingLeft: "20px" }}>
        <Header />
      </div>
      <div>
        <HeroSection />
      </div>
    </div>
  );
}

export default HomePage;
