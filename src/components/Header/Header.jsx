import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import styles from "./Header.module.css";
import useIsMobile from "../../utils/isMobile";
import data from "../../data/data";

function Header() {
  const location = useLocation(); // Get current location
  const isMobile = useIsMobile();
  // Function to check if the current page is selected
  const isActive = (path) => {
    return location.pathname === path ? styles.active : ""; // Compare current path with the menu item
  };

  return (
    <div>
      <div
        className={`${
          styles.headerContainer
        } flex-container gap-2 align-items-center ${
          isMobile ? "justify-content-between" : ""
        }`}
        style={{
          padding: isMobile ? "0px" : "10px",
        }}
      >
        <img
          className={styles.headerLogo}
          style={{ padding: isMobile ? "10px" : "" }}
          src="https://s3-alpha-sig.figma.com/img/c323/e614/5fe44fe9aa4ff0011347ab73c5d6358d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oy4PEg3q-kV82AfbHmkKfKm418UHbAjR61Rh3mH9p~RsoHIyBRTZxLyssrOOFQLEQHjQqfqxbA2eZtDbhKtmimbaDFIGeN3MknNaVKjvOgsm60CIDgtChvY6F5SNa~PfcDwzNvhhzUuBoST1BzcRa2qCuGe8SJ7mY~YEhrHFLx9l0ZV4ftOxy9bgo~XZXT2dOCg~SCh3OSZdUSWUo0rruD9qdJgGiwKbgBAo8hNHb3VBecsCUDVuIWTNZM--mDa5KRHxiEH2yX6ZiZ0AUKNX9m6PHFiQIW6XRnfu2~2aopdGjp3LvlXUgQREC0hCrt79koNEsHjJCf82XaGCY0Uobw__"
        />
        {!isMobile && (
          <div className={styles.menu}>
            <div>
              <div
                className={`${styles.menuItems} justify-content-center align-items-center`}
              >
                <a href="/" className={`${styles.menuItem} ${isActive("/")}`}>
                  Home
                </a>
                <a
                  href="#"
                  className={`${styles.menuItem} ${isActive("/specialOffers")}`}
                >
                  Special Offers
                </a>
                <a
                  href="#"
                  className={`${styles.menuItem} ${isActive("/restraunt")}`}
                >
                  Restraunts
                </a>
                <a
                  href="#"
                  className={`${styles.menuItem} ${isActive("/track-order")}`}
                >
                  Track Order
                </a>
              </div>
            </div>

            <button
              className={`${styles.userInfo} flex-container textWhite rounded-5 justify-content-center align-items-center`}
            >
              <img
                src="https://www.figma.com/file/PwcM13xK4XBCiuX2M1iuOL/image/e9ac58674f3e800a3b628b034b504eed4fd0ea8b"
                alt=""
                style={{ margin: 0, height: "auto", width: "20%" }}
              />{" "}
              <p className={styles.userName}>Hey User</p>
            </button>
          </div>
        )}
        {isMobile && (
          <div
            className="flex-container justify-content-center align-items-center"
            style={{
              borderLeft: "1px solid black",
              height: "100%",
              width: "20%",
            }}
          >
            <img
              src={data.hamburgerIcon}
              alt=""
              style={{
                height: "auto",
                width: "70%",
                cursor: "pointer",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
