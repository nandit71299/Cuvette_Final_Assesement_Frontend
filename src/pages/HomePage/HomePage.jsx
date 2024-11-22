import React from "react";
import {
  Header,
  OfferBanner,
  HeroSection,
  MobileCartMenu,
  Deals,
} from "../../components/index";
import useIsMobile from "../../utils/isMobile";
import Categories from "../../components/HomePage/Categories";
function HomePage() {
  const isMobile = useIsMobile();
  return (
    <div className="flex-container flex-column gap-1 safeArea">
      {!isMobile && <OfferBanner />}
      <div style={{ paddingRight: "0px", paddingLeft: "0px" }}>
        <Header />
      </div>
      {isMobile && <MobileCartMenu />}
      <div style={{ width: "100%" }}>
        <HeroSection />
      </div>
      <Deals />
      <div style={{ width: "100%" }}>
        <Categories />
      </div>
    </div>
  );
}

export default HomePage;
