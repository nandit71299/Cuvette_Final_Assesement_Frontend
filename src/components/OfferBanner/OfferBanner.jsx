import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./OfferBanner.module.css";
import data from "../../data/data";

function OfferBanner() {
  const [userLocation, setUserLocation] = useState("Fetching Location...");
  const [loadingLocation, setLoadingLocation] = useState(true);

  const API_PORT = import.meta.env?.VITE_API_PORT || "";
  const API_URL = import.meta.env.VITE_API_URL;
  const apiUrl = `${API_URL}:${API_PORT}/api`;

  // Function to fetch user's actual location using geolocation API
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
      className={`${styles.offerBannerContainer} flex-container align-items-center`}
    >
      <div>
        <div className="flex-container gap-05" style={{ paddingLeft: "10px" }}>
          <span>🌟</span>
          <span className={styles.offerMessage}>
            {" "}
            Get 5% Off your first order,{" "}
            <span className={styles.offerMessageCode}>Promo: ORDER5</span>
          </span>
        </div>
      </div>
      <div
        className="flex-container gap-2 ml-auto align-items-center"
        style={{ height: "100%" }}
      >
        <div className="flex-container justify-content-center align-items-center gap-05">
          <img
            src={`${apiUrl}/general/images/pinIcon.png`}
            alt="Pin Icon"
            className={`${styles.pinIcon}`}
          />
          <p className={styles.userLocation}>
            {loadingLocation ? "Fetching Location..." : userLocation}
          </p>
          <span className={styles.changeLocationBtn}>
            <a href="#" className={styles.changeLocationLink}>
              Change Location
            </a>
          </span>
        </div>

        <div className={styles.cartDetailsContainer}>
          <div className={styles.cartDetails}>
            <img
              src={`${apiUrl}/general/images/cartIcon.jpg`}
              className={styles.cartIcon}
              alt="Cart Icon"
            />
            <p className={`${styles.myCartTitle} textWhite`}>My Cart</p>
          </div>
          <div className={styles.emptyBox}></div>
          <div className={styles.arrowDownContainer}>
            <img
              className={styles.arrowDown}
              src={`${apiUrl}/general/images/arrowDown.png`}
              alt="Arrow Down"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferBanner;
