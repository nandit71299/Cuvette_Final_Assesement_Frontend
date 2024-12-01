import React from "react";
import {
  Header,
  OfferBanner,
  HeroSection,
  MobileCartMenu,
  Deals,
  Footer,
} from "../../components/index";
import useIsMobile from "../../utils/isMobile";
import Categories from "../../components/HomePage/Categories";
import PopularRestaurants from "../../components/HomePage/PopularRestaurants";
import PromoSection from "../../components/HomePage/PromoSection";
import SignUpBanner from "../../components/HomePage/SignUpBanner";
import data from "../../data/data";
import AboutUs from "../../components/HomePage/AboutUs";
import Stats from "../../components/HomePage/Stats";
function HomePage() {
  const isMobile = useIsMobile();
  return (
    <div
      className={` ${isMobile ? "gap-05" : "gap-1"} flex-container flex-column`}
    >
      <div className="safeArea">{!isMobile && <OfferBanner />}</div>
      <div className="safeArea">
        <Header />
      </div>
      {isMobile && <MobileCartMenu />}
      <div className="safeArea">
        <HeroSection />
      </div>
      <div className="safeArea">
        <Deals />
      </div>
      <div className={isMobile ? "" : "safeArea"}>
        <Categories />
      </div>
      <div className="safeArea">
        <PopularRestaurants />
      </div>

      <div className="safeArea">
        <PromoSection />
      </div>
      <div className="safeArea">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: isMobile ? "20px" : "10px",
            maxWidth: "100%",
            height: isMobile ? "" : "425px",
            flexWrap: isMobile ? "wrap" : "",
          }}
        >
          <SignUpBanner
            image={data.signUpAsBusiness}
            signupMessage={"Sign up as a bussiness"}
            subMessage={"Partner with us"}
            buttonTitle="Get Started"
            bannerMessage="Earn more with lower fees"
          />
          <SignUpBanner
            image={data.signUpAsRider}
            signupMessage={"Sign up as a rider"}
            subMessage={"Ride with us"}
            buttonTitle="Get Started"
            bannerMessage="Avail exclusive perks"
          />
        </div>
      </div>

      <div className="safeArea">
        <AboutUs />
      </div>
      <div className="safeArea">
        <Stats />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
