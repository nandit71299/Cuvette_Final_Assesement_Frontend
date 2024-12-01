import React from "react";
import styles from "./ResOperationalTimings.module.css";

function ResOperationalTimings({ website, phone }) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.deliveryInfoContainer}>
        <h2>
          <i className="bi bi-geo-alt"></i> Delivery Information
        </h2>
        <div>
          <p>
            <strong>Monday:</strong> 12:00 AM - 3:00 AM, 8:00 AM - 3:00 AM
          </p>
          <p>
            <strong>Tuesday:</strong> 1:00 AM - 4:00 AM, 9:00 AM - 4:00 AM
          </p>
          <p>
            <strong>Wednesday:</strong> 12:30 AM - 3:30 AM, 8:30 AM - 3:30 AM
          </p>
          <p>
            <strong>Thursday:</strong> 12:00 AM - 2:00 AM, 7:00 AM - 2:00 AM
          </p>
          <p>
            <strong>Friday:</strong> 1:00 AM - 3:00 AM, 8:00 AM - 4:00 AM
          </p>
          <p>
            <strong>Saturday:</strong> 12:30 AM - 2:30 AM, 9:00 AM - 5:00 AM
          </p>
          <p>
            <strong>Sunday:</strong> 12:00 AM - 3:00 AM, 8:00 AM - 3:00 AM
          </p>
        </div>
      </div>

      <div className={styles.contactInfoContainer}>
        <h2>
          <i className="bi bi-person-vcard-fill"></i> Contact Information
        </h2>
        <p>
          If you have allergies or other dietary restrictions, please contact
          the restaurant. The restaurant will provide food-specific information
          upon request.
          <br />
          Phone number: {phone}
          <br />
          Website: <br />
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </p>
      </div>

      <div className={styles.operationalTimingsContainer}>
        <h2>
          <i className="bi bi-clock"></i> Operational Times
        </h2>
        <p>
          <strong>Monday:</strong> 8:00 AM – 3:00 AM
          <br />
          <strong>Tuesday:</strong> 8:00 AM – 3:00 AM
          <br />
          <strong>Wednesday:</strong> 8:00 AM – 3:00 AM
          <br />
          <strong>Thursday:</strong> 8:00 AM – 3:00 AM
          <br />
          <strong>Friday:</strong> 8:00 AM – 3:00 AM
          <br />
          <strong>Saturday:</strong> 8:00 AM – 3:00 AM
          <br />
          <strong>Sunday:</strong> 8:00 AM – 3:00 AM
        </p>
      </div>
    </div>
  );
}

export default ResOperationalTimings;
