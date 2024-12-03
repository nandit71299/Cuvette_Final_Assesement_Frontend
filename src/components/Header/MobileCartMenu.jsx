import React, { useState, useEffect } from "react";
import styles from "./MobileCartMenu.module.css";
import data from "../../data/data";
import axios from "axios";
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
  const [userLocation, setUserLocation] = useState("Fetching Location...");
  const [loadingLocation, setLoadingLocation] = useState(true);

  const fetchLocation = async (lat, lon) => {
    try {
      // Replace this URL with your chosen Geolocation API URL
      const apiKey = import.meta.env?.VITE_OPEN_PAGE_KEY;
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`
      );
      const locationData = response.data.results[0];
      if (locationData) {
        // Extract relevant location information
        const formattedLocation = locationData.formatted;
        setUserLocation(formattedLocation); // Set the location state
      } else {
        setUserLocation("Location not found");
      }
    } catch (error) {
      setUserLocation("Unable to fetch location");
    } finally {
      setLoadingLocation(false); // Set loading state to false once done
    }
  };

  // Get user's latitude and longitude using the Geolocation API
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          fetchLocation(lat, lon);
        },
        (error) => {
          setUserLocation("Location permission denied");
          setLoadingLocation(false);
        }
      );
    } else {
      setUserLocation("Geolocation not supported");
      setLoadingLocation(false);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);
  return (
    <div
      className={`${styles.mainContainer} flex-container flex-column gap-05`}
    >
      <div
        className={`${styles.userInfoContainer}  flex-container justify-content-between`}
      >
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
        <p className={`${styles.userAddress}`}>{userLocation}</p>
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
