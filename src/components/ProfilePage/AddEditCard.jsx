import React, { useState, useEffect } from "react";
import styles from "./AddEditCardModal.module.css";

const AddEditCardModal = ({ onClose, onSave, onRemove, cardDetails }) => {
  const [cardData, setCardData] = useState({
    cardNumber: cardDetails.cardNumber || "",
    expiryDate: cardDetails.expiryDate || "",
    cvc: cardDetails.cvc || "",
    nameOnCard: cardDetails.nameOnCard || "",
  });

  // Update cardData if cardDetails changes
  useEffect(() => {
    if (cardDetails) {
      setCardData({
        cardNumber: cardDetails.cardNumber || "",
        expiryDate: cardDetails.expiryDate || "",
        cvc: cardDetails.cvc || "",
        nameOnCard: cardDetails.nameOnCard || "",
      });
    }
  }, [cardDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(cardData);
  };

  // Determine title based on the presence of cardDetails (editing or adding)
  const modalTitle =
    cardDetails && cardDetails.cardNumber
      ? "Edit Payment Method"
      : "Add Payment Method";

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.title}>{modalTitle}</h2>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={cardData.cardNumber}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Expiration</label>
            <input
              type="text"
              name="expiryDate"
              value={cardData.expiryDate}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>CVC</label>
            <input
              type="text"
              name="cvc"
              value={cardData.cvc}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Name on Card</label>
            <input
              type="text"
              name="nameOnCard"
              value={cardData.nameOnCard}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </form>

        <div className={styles.actions}>
          {cardDetails && cardDetails.cardNumber && (
            <button
              className={styles.removeButton}
              onClick={() => onRemove(cardDetails._id)}
            >
              Remove
            </button>
          )}
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.saveButton} onClick={handleSave}>
            {cardDetails ? "Save Changes" : "Add Card"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditCardModal;
