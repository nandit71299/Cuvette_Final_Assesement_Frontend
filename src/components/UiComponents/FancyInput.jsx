import React from "react";
import styles from "./FancyInput.module.css";

function FancyInput(props) {
  const { type, placeholder, onClick, buttonStyles, inputStyles } = props; // Destructure props correctly

  return (
    <div className={styles.fancyInputContainer}>
      <input
        type={type || "email"}
        placeholder={placeholder || "youremail@gmai.com"}
        style={{ ...inputStyles }}
      />
      <button
        onClick={onClick || null}
        style={{ ...buttonStyles }} // Apply custom button styles
      >
        {props?.buttonTitle || "Subscribe"}
      </button>
    </div>
  );
}

export default FancyInput;
