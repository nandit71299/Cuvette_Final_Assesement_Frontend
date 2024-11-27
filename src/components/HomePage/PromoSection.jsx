import React from "react";
import styles from "./PromoSection.module.css";
import data from "../../data/data";
import useIsMobile from "../../utils/isMobile";

function PromoSection() {
  const isMobile = useIsMobile();
  return (
    <div className={styles.promoSectionContainer}>
      {/* Text Content */}
      <div className={styles.promoContent}>
        <div className={`${styles.logoContainer} flex-container`}>
          <img src={data.logo} className={styles.logo} alt="" />
          <h3 className={styles.heading}>ing is more</h3>
        </div>
        <div className={styles.headingSubTextContainer}>
          <h3 className={styles.headingSubText}>
            Personalised &nbsp;
            <span style={{ color: isMobile ? "black" : "white" }}>
              & Instant
            </span>
          </h3>
        </div>
        <div className={styles.storeButtonsContainer}>
          <div className={styles.downloadMessage}>
            Download the Order.uk app for faster ordering
          </div>
          <div className="flex-container justiy-content-cente align-items-end ">
            <img src={data.downloadAppStoreImage} alt="App Store" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
            />
          </div>
        </div>
      </div>

      {/* Model Images */}
      <img
        src={data.downloadAppBannerImage}
        alt="Model One"
        className={styles.modelImageOne}
      />
      <img
        src={data.downloadAppBannerImage}
        alt="Model Two"
        className={styles.modelImageTwo}
      />
    </div>
  );
}

export default PromoSection;
