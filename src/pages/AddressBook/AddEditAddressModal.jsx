import React, { useState, useEffect } from "react";
import styles from "./AddEditAddressModal.module.css";

const AddEditAddressModal = ({ onClose, onSave, address, isEditing }) => {
  const [addressData, setAddressData] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    phone: "",
    name: "", // Added name field
    isDefault: false, // Added isDefault field
  });

  useEffect(() => {
    if (isEditing && address) {
      setAddressData({
        street: address.street || "",
        city: address.city || "",
        state: address.state || "",
        country: address.country || "",
        postalCode: address.postalCode || "",
        phone: address.phone || "", // Pre-fill phone field for editing
        name: address.name || "", // Pre-fill name field for editing
        isDefault: address.isDefault || false, // Pre-fill isDefault field for editing
      });
    }
  }, [isEditing, address]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAddressData({
      ...addressData,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox for isDefault
    });
  };

  const handleSave = () => {
    if (
      !addressData.street ||
      !addressData.city ||
      !addressData.state ||
      !addressData.country ||
      !addressData.postalCode ||
      !addressData.phone ||
      !addressData.name // Ensure name is also filled
    ) {
      alert("Please fill all fields before saving.");
      return;
    }

    onSave(addressData); // Pass the data back to parent component
    onClose(); // Close the modal
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <h3>{isEditing ? "Edit Address" : "Add Address"}</h3>
          <span className={styles.closeButton} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={styles.form}>
          <input
            type="text"
            name="name" // Added name field
            value={addressData.name}
            onChange={handleChange}
            placeholder="Name"
            className={styles.input}
          />
          <input
            type="text"
            name="street"
            value={addressData.street}
            onChange={handleChange}
            placeholder="Street Address"
            className={styles.input}
          />
          <div className={styles.row}>
            <input
              type="text"
              name="city"
              value={addressData.city}
              onChange={handleChange}
              placeholder="City"
              className={styles.input}
            />
            <input
              type="text"
              name="state"
              value={addressData.state}
              onChange={handleChange}
              placeholder="State"
              className={styles.input}
            />
            <input
              type="text"
              name="country"
              value={addressData.country}
              onChange={handleChange}
              placeholder="Country"
              className={styles.input}
            />
            <input
              type="text"
              name="postalCode"
              value={addressData.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              className={styles.input}
            />
            <input
              type="text"
              name="phone"
              value={addressData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className={styles.input}
            />
          </div>

          {/* Add checkbox for default address */}
          <div className={styles.checkboxWrapper}>
            <label>
              <input
                type="checkbox"
                name="isDefault"
                checked={addressData.isDefault}
                onChange={handleChange}
              />
              Set as Default Address
            </label>
          </div>

          <div className={styles.footer}>
            <button className={styles.saveButton} onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditAddressModal;
