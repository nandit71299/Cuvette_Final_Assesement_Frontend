import React from "react";
import styles from "./resInfo.module.css";

function ResInfo({ data, assets }) {
  return (
    <div
      className={`${styles.resInfoContainer} textWhite`}
      style={{ background: `url(${data.image})` }}
    >
      <div className={styles.resInfoLeft}>
        <div className={styles.resSlogan}>{data.slogan}</div>
        <h1 className={styles.restrauntTitle}>{data.name}</h1>
        <div className={styles.resFacilities}>
          <button>
            <img src={assets.billIcon} alt="" />
            Minimum Order: 12 GBP
          </button>
          <button>
            <img src={assets.riderIcon} alt="" />
            Delivery in 20-25 Minutes{" "}
          </button>
        </div>
      </div>
      <div className={styles.resInfoRight}>
        <div className={styles.ratingCard}>
          <h3 className="m-0">3.4</h3>
          <div className={`${styles.ratingIcons} flex-container gap-05`}>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star"></i>
          </div>
          <p className="m-0">1432 Reviews</p>
        </div>
        <img src={data.image} alt="" />
      </div>
    </div>
  );
}

export default ResInfo;
