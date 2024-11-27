import React from "react";
import styles from "./Stats.module.css";

function Stats() {
  return (
    <div className={styles.mainContainer}>
      <div
        className={`flex-container flex-column justify-content-center align-items-center gap-1 ${styles.card}`}
      >
        <h1 className={`${styles.number} m-0`}>546+</h1>
        <p className={`${styles.message} m-0`}>Registered Riders</p>
      </div>
      <div
        className={`flex-container flex-column justify-content-center align-items-center gap-1 ${styles.card}`}
      >
        <h1 className={`${styles.number} m-0`}>789,900+</h1>
        <p className={`${styles.message} m-0`}>Orders Delivered</p>
      </div>
      <div
        className={`flex-container flex-column justify-content-center align-items-center gap-1 ${styles.card}`}
      >
        <h1 className={`${styles.number} m-0`}>690+</h1>
        <p className={`${styles.message} m-0`}>Restraunts Partnered</p>
      </div>
      <div
        className={`flex-container flex-column justify-content-center align-items-center gap-1 ${styles.card}`}
        style={{ border: "none" }}
      >
        <h1 className={`${styles.number} m-0`}>17,457+</h1>
        <p className={`${styles.message} m-0`}>Food Items</p>
      </div>
    </div>
  );
}

export default Stats;
