import React from "react";
import styles from "./SignUpBanner.module.css";
import useIsMobile from "../../utils/isMobile";

function SignUpBanner(props) {
  const isMobile = useIsMobile();
  return (
    <div
      className="flex-container"
      style={{ width: "100%", height: !isMobile && "100%" }}
    >
      <div
        className={styles.cardContainer}
        style={{
          // width: isMobile ? "100%" : "50%",
          background: `linear-gradient(245.7deg, rgba(255, 255, 255, 0) 0.94%, rgba(3, 8, 31, 0.19) 51.68%, rgba(3, 8, 31, 0.89) 87.9%), url(${props.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // To ensure the image covers the container properly
        }}
      >
        <div
          style={{
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <h2 className={styles.signupMessage}>{props.signupMessage}</h2>
          <p className={styles.subMessage}>{props.subMessage}</p>
          <button className={styles.button}>{props.buttonTitle}</button>
        </div>
        <div className={styles.bannerMessage}>{props.bannerMessage}</div>
      </div>
    </div>
  );
}

export default SignUpBanner;
