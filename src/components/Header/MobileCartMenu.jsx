import React, { useState } from "react";
import styles from "./MobileCartMenu.module.css";
import data from "../../data/data";
import Cart from "../Cart/Cart";

function MobileCartMenu() {
  const API_PORT = import.meta.env?.VITE_API_PORT || "";
  const API_URL = import.meta.env.VITE_API_URL;
  const apiUrl = `${API_URL}:${API_PORT}/api`;

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
            src={`${apiUrl}/general/images/userAvatar.jpeg`}
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
            src={`${apiUrl}/general/images/cartIcon.jpg`}
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
        <img
          src={`${apiUrl}/general/images/pinIcon.png`}
          alt=""
          className={styles.pinIcon}
        />
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
