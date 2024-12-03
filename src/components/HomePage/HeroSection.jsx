import React from "react";
import styles from "./HeroSection.module.css";
import data from "../../data/data";
import FancyInput from "../UiComponents/FancyInput";
import useIsMobile from "../../utils/isMobile";

function HeroSection() {
  const isMobile = useIsMobile();

  const API_PORT = import.meta.env?.VITE_API_PORT || "";
  const API_URL = import.meta.env.VITE_API_URL;
  const apiUrl = `${API_URL}:${API_PORT}/api`;

  const buttonStyles = {
    right: isMobile ? "0px" : "100px", // Add any other styles you want here
    width: isMobile ? "30%" : "40%",
  };
  const inputStyles = {
    backgroundColor: "#FFFFFF",
    border: "1px solid #bfbfbf",
    width: isMobile ? "100%" : "60%",
  };
  return (
    <div className="safeArea">
      <div className={styles.heroSectionContainer}>
        <div className={styles.heroSectionContent}>
          <p>Order Restaurant food, takeaway and groceries.</p>
          <h1>
            Feast Your Senses,
            <br />
            <span>Fast and Fresh</span>
          </h1>
          <p>Enter a postcode to see what we deliver</p>
          <FancyInput
            placeholder="e.g. EC4R 3TE"
            type="text"
            buttonStyles={buttonStyles}
            buttonTitle={isMobile ? ">" : "Subscribe"}
            inputStyles={inputStyles} // Pass buttonStyles to FancyInput
          />
        </div>
        <div className={styles.modelImagesContainer}>
          <img
            src={`${apiUrl}/general/images/heroSectionModelOne.png`}
            alt=""
            className={styles.heroSectionModelOne}
          />
        </div>
        <div className={styles.modelImagesContainer}>
          <img
            src={`${apiUrl}/general/images/heroSectionModelTwo.png`}
            alt=""
            className={styles.heroSectionModelTwo}
          />
        </div>
        <div className={styles.strokeBackground}></div>
        <div className={styles.messageContainer}>
          <div>
            <img
              className={styles.notificationOne}
              src={`${apiUrl}/general/images/notificationOne.png`}
              alt=""
            />
            <h1 className={styles.notificationCount1}>1</h1>
          </div>
        </div>
        <div className={styles.messageContainer}>
          <div>
            <img
              className={styles.notificationTwo}
              src={`${apiUrl}/general/images/notificationTwo.png`}
              alt=""
            />
            <h1 className={styles.notificationCount2}>2</h1>
          </div>
        </div>
        <div className={styles.messageContainer}>
          <div>
            <img
              className={styles.notificationThree}
              src={`${apiUrl}/general/images/notificationThree.png`}
              alt=""
            />
            <h1 className={styles.notificationCount3}>3</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
