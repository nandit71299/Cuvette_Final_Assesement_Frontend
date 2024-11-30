import React from "react";
import styles from "./OfferCard.module.css";

function OfferCard(props) {
  return (
    <div className={styles.OfferCard}>
      <img src={props.image} alt="" />
      <div className={styles.gradientOverlay}></div>
      <div className="position-absolute w-100">
        <div className={styles.content}>
          <div>
            {" "}
            <p>{props.resName}</p>
            <h3>{props.subText}</h3>
          </div>
          <div className={styles.cardButtonContainer}>
            <button className={styles.cardButton}> + </button>
          </div>
        </div>
      </div>
      <div className={styles.offerCountContainer}>
        <h5>20%</h5>
      </div>
    </div>
  );
}

export default OfferCard;
