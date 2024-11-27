import React from "react";
import styles from "./AboutUs.module.css";
import useIsMobile from "../../utils/isMobile";
import data from "../../data/data";

function AboutUs() {
  const isMobile = useIsMobile();
  return (
    <div className={styles.aboutUsMainContainer}>
      <div className={styles.headerContainer}>
        <div>
          <h2 className="m-0">Know More About Us</h2>
        </div>
        <div
          style={{ display: isMobile ? "none" : "" }}
          className={`flex-container gap-1`}
        >
          <button className={`${styles.active} ${styles.aboutUSButtons}`}>
            Frequent Questions
          </button>
          <button className={styles.aboutUSButtons}>Who we are?</button>
          <button className={styles.aboutUSButtons}>Partner Program</button>
          <button className={styles.aboutUSButtons}>Help & Support</button>
        </div>
      </div>
      <div
        className={`${styles.contentContainer}  flex-container gap-2 justify-content-center w-100`}
      >
        <div className="flex-container flex-grow-1 justify-content-center flex-wrap gap-1">
          <button
            className={`${styles.active} ${styles.coloredButton} ${styles.aboutUSButtons}`}
          >
            How does Order.UK work?
          </button>
          <button className={styles.aboutUSButtons}>
            What payment methods are accepted?
          </button>
          <button className={styles.aboutUSButtons}>
            Can I track my order in real-time?
          </button>
          <button className={styles.aboutUSButtons}>
            Are there any special discounts or promotions available?
          </button>
          <button className={styles.aboutUSButtons}>
            Is Order.UK available in my area?{" "}
          </button>
        </div>
        <div className={`flex-container flex-column ${styles.rightContainer}`}>
          <div className={`${styles.cardsContainer} `}>
            <div className={`${styles.cards}`}>
              <h6 className={styles.cardTitle}>Track Progress</h6>
              <img src={data.orderFood} alt="" />
              <p className={styles.cardMessage}>
                Place order through our website or Mobile app
              </p>
            </div>
            <div className={`${styles.cards}`}>
              <h6 className={styles.cardTitle}>Track Progress</h6>
              <img src={data.food} alt="" />
              <p className={styles.cardMessage}>
                Your can track your order status with delivery time
              </p>
            </div>
            <div className={`${styles.cards}`}>
              <h6 className={styles.cardTitle}>Track Progress</h6>
              <img src={data.order} alt="" />
              <p className={styles.cardMessage}>
                Receive your order at a lighting fast speed!
              </p>
            </div>
          </div>
          <div>
            <p className={styles.stepsMessage}>
              Order.UK simplifies the food ordering process. Browse through our
              diverse menu, select your favorite dishes, and proceed to
              checkout. Your delicious meal will be on its way to your doorstep
              in no time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
