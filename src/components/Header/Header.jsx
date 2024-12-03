import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom"; // Import Link for Home
import styles from "./Header.module.css";
import useIsMobile from "../../utils/isMobile";
import data from "../../data/data";
import { useSelector } from "react-redux";

function Header() {
  const API_PORT = import.meta.env?.VITE_API_PORT || "";
  const API_URL = import.meta.env.VITE_API_URL;
  const apiUrl = `${API_URL}:${API_PORT}/api`;

  const location = useLocation(); // Get current location
  const isMobile = useIsMobile();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

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
          src={`${apiUrl}/general/images/logo.jpg`}
        />
        {!isMobile && (
          <div className={styles.menu}>
            <div>
              <div
                className={`${styles.menuItems} justify-content-center align-items-center`}
              >
                {/* Home link with React Router's Link */}
                <Link to="/" className={`${styles.menuItem} ${isActive("/")}`}>
                  Home
                </Link>
                {/* Static links */}
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
                  Restaurants
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
                src={`${apiUrl}/general/images/userAvatar2.png`}
                alt=""
                style={{ margin: 0, height: "auto", width: "20%" }}
              />
              {user?.name && (
                <p
                  className={styles.userName}
                  onClick={() => navigate("/profile")}
                >
                  Hey {user.name}
                </p>
              )}
              {!user?.name && (
                <p
                  className={styles.userName}
                  onClick={() => navigate("/login")}
                >
                  Login/Signup
                </p>
              )}
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
              src={`${apiUrl}/general/images/hamburgerIcon.jpg`}
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
