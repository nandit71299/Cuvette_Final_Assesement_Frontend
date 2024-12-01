import React, { useState } from "react";
import styles from "./MobileCartMenu.module.css";
import data from "../../data/data";
import Cart from "../Cart/Cart";
function MobileCartMenu() {
  const [displayCart, setDisplayCart] = useState(false);
  const handleCartClick = () => {
    setDisplayCart(!displayCart);
  };
  const cartStyles = {
    width: "90%",
  };
  return (
    <div
      className={`${styles.mainContainer} flex-container flex-column gap-05`}
    >
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
        <div className={styles.cartInfo} onClick={handleCartClick}>
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
        style={{ maxHeight: "20px", marginBottom: "10px" }}
        className="flex-container justify-content-end align-items-center"
      >
        <img src={data.pinIcon} alt="" className={styles.pinIcon} />
        <p className={`${styles.userAddress}`}>User Address</p>
      </div>
      <div
        className={styles.cart}
        style={{ display: displayCart ? "block" : "none" }}
      >
        <Cart styles={cartStyles} toggleVisibility={handleCartClick} />
      </div>
    </div>
  );
}

export default MobileCartMenu;
