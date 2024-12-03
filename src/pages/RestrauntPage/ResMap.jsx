import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./ResMap.module.css";

const ResMap = ({ lat, long, address, phone, website, resName }) => {
  // Convert lat/long from string to number
  const latitude = lat; // Trim whitespace
  const longitude = long; // Trim whitespace

  // Check if the conversion was successful
  if (isNaN(latitude) || isNaN(longitude)) {
    console.error("Invalid lat/long:", lat, long);
    return <div>Error: Invalid coordinates</div>; // Display an error message if lat/long are invalid
  }

  const position = [latitude, longitude];

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        position: "relative",
        borderRadius: "10px",
      }}
    >
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          boxShadow: "5px 5px 14px 0px #00000040",
        }}
      >
        {/* OpenStreetMap Tile Layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Marker for the restaurant */}
        <Marker position={position}>
          <Popup>
            <h3>{resName}</h3>
            <p>
              <strong>Address:</strong> {address}
            </p>
            <p>
              <strong>Phone:</strong> {phone}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href={website} target="_blank" rel="noopener noreferrer">
                {website}
              </a>
            </p>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Optional: Display the restaurant info outside the map */}
      <div className={styles.cardContainer}>
        <h3>{resName}</h3>
        <p className={styles.address}>
          <strong>Address:</strong>
          <br /> {address}
        </p>
        <p className={styles.phone}>
          <strong>Phone:</strong> <br />
          {phone}
        </p>
        <p className={styles.website}>
          <strong>Website:</strong> <br />
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResMap;
