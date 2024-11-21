import React from "react";
import styles from "./HeroSection.module.css";
import data from "../../data/data";
import FancyInput from "../UiComponents/FancyInput";

function HeroSection() {
  const buttonStyles = {
    right: "100px", // Add any other styles you want here
  };
  const inputStyles = {
    backgroundColor: "#FFFFFF",
    border: "1px solid #bfbfbf",
  };
  return (
    <div>
      <div className={styles.heroSectionContainer}>
        <div className={styles.heroSectionContent}>
          <p>Order Restaurant food, takeaway and groceries.</p>
          <h1>
            Feast Your Senses,
            <br />
            <span>Fast and Fresh</span>
          </h1>
          <p>Enter a postcode to see what we deliver</p>
          <FancyInput
            placeholder="e.g. EC4R 3TE"
            type="text"
            buttonStyles={buttonStyles}
            inputStyles={inputStyles} // Pass buttonStyles to FancyInput
          />
        </div>
        <div>
          <img
            src={data.heroSectionModelOne}
            alt=""
            className={styles.heroSectionModelOne}
          />
        </div>
        <div>
          <img
            src={data.heroSectionModelTwo}
            alt=""
            className={styles.heroSectionModelTwo}
          />
        </div>
        <div className={styles.strokeBackground}></div>
        <div className={styles.messageContainer}>
          <div>
            <img
              className={styles.notificationOne}
              src="https://www.figma.com/file/PwcM13xK4XBCiuX2M1iuOL/image/614e7390dc7395cdd7f81c75ee8b35de8e061979"
              alt=""
            />
            <h1 className={styles.notificationCount1}>1</h1>
          </div>
        </div>
        <div className={styles.messageContainer}>
          <div>
            <img
              className={styles.notificationTwo}
              src="https://s3-alpha-sig.figma.com/img/614e/7390/dc7395cdd7f81c75ee8b35de8e061979?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qKe26NizLW6cVViPupu7oK5WbL6tzBDfM3I0uJaNaCeA7P-ayiLn-YBJbPNVvU7IBJeSiTR~cpbUmtibb3BWwTyco1zO2vmHA7smvqbegaR1qHXBOIXxNXEGr3hWfO9VPyWsPsTqY99q3EH2CD6Q0uQKQP1JENTWVkEAsMMBXdtJGFl6~oL4SISBbSFG24IBzGDAWZziFjOzUN8wTP5XLAErfcO3i2gtKV5wcOyHsKLTB2HI399ughKhZSxkllsMTHu0Ew4yMX2pJQ99eQ8ur6yFjixG0AtEN6eNueeLvqJiHS2x77gR3M~ykt8KaLXRCU9etGIkY8YoGS6BNUvs8Q__"
              alt=""
            />
            <h1 className={styles.notificationCount2}>2</h1>
          </div>
        </div>
        <div className={styles.messageContainer}>
          <div>
            <img
              className={styles.notificationThree}
              src="https://s3-alpha-sig.figma.com/img/614e/7390/dc7395cdd7f81c75ee8b35de8e061979?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qKe26NizLW6cVViPupu7oK5WbL6tzBDfM3I0uJaNaCeA7P-ayiLn-YBJbPNVvU7IBJeSiTR~cpbUmtibb3BWwTyco1zO2vmHA7smvqbegaR1qHXBOIXxNXEGr3hWfO9VPyWsPsTqY99q3EH2CD6Q0uQKQP1JENTWVkEAsMMBXdtJGFl6~oL4SISBbSFG24IBzGDAWZziFjOzUN8wTP5XLAErfcO3i2gtKV5wcOyHsKLTB2HI399ughKhZSxkllsMTHu0Ew4yMX2pJQ99eQ8ur6yFjixG0AtEN6eNueeLvqJiHS2x77gR3M~ykt8KaLXRCU9etGIkY8YoGS6BNUvs8Q__"
              alt=""
            />
            <h1 className={styles.notificationCount3}>3</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
