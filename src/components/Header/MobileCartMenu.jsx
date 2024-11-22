import React from "react";
import styles from "./MobileCartMenu.module.css";
import data from "../../data/data";
function MobileCartMenu() {
  return (
    <div className="flex-container flex-column gap-1">
      <div className="flex-container justify-content-between">
        <div className={styles.userInfo}>
          <img
            src={data.userAvatar}
            alt=""
            style={{
              margin: 0,
              height: "80%",
              width: "30%",
              borderRadius: "50%",
            }}
          />
          <p className={styles.userName}>Hey User</p>
        </div>
        <div className={styles.cartInfo}>
          <img
            src={data.cartIcon}
            alt=""
            style={{
              margin: 0,
              height: "auto",
              width: "20%",
              filter: "invert()",
            }}
          />
          <p className={styles.cartText}>My Cart</p>
        </div>
      </div>
      <div
        style={{ maxHeight: "20px" }}
        className="flex-container justify-content-end align-items-center"
      >
        <img src={data.pinIcon} alt="" className={styles.pinIcon} />
        <p className={`${styles.userAddress}`}>User Address</p>
      </div>
    </div>
  );
}

export default MobileCartMenu;
