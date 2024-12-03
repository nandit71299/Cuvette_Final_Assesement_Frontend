import React, { useState, useEffect } from "react";
import styles from "./AddressBook.module.css";
import { useSelector, useDispatch } from "react-redux";
import AddEditAddressModal from "./AddEditAddressModal.jsx";
import { setUser } from "../../redux/userSlice"; // Dispatch updated user data
import {
  addAddress,
  updateAddress,
  deleteAddress,
} from "../../utils/apiUtil.js"; // Path to your API functions
import { Header, MobileCartMenu, OfferBanner } from "../../components/index.js";
import useIsMobile from "../../utils/isMobile.js";

const AddressBook = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const addresses = user?.addresses || [];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Open modal for adding a new address
  const handleAddAddress = () => {
    setIsEditing(false);
    setCurrentAddress(null);
    setModalOpen(true);
  };

  // Open modal to edit an existing address
  const handleEditAddress = (index) => {
    setIsEditing(true);
    setCurrentAddress({ ...addresses[index], index });
    setModalOpen(true);
  };

  // Delete address (API call + state update)
  const handleRemoveAddress = async (addressId) => {
    try {
      const response = await deleteAddress({ userId: user.userId, addressId });
      if (response.success) {
        const updatedAddresses = addresses.filter(
          (address) => address._id !== addressId
        );
        // Update the user state with the updated address list
        dispatch(setUser({ ...user, addresses: updatedAddresses }));
      } else {
        alert(response.message || "Failed to delete address");
      }
    } catch (error) {
      alert("Error removing address: " + error.message);
    }
  };

  // Save new or updated address (API call + state update)
  const handleSaveAddress = async (newAddress) => {
    try {
      let response;
      if (isEditing && currentAddress) {
        response = await updateAddress({
          ...newAddress,
          userId: user.userId,
          addressId: currentAddress._id,
        });
      } else {
        response = await addAddress({ ...newAddress, userId: user.userId });
      }

      if (response.success) {
        const updatedAddresses = isEditing
          ? addresses.map((address) =>
              address._id === currentAddress._id ? response.data : address
            )
          : [...addresses, response.data];

        // Update the user state with the updated address list
        dispatch(setUser({ ...user, addresses: updatedAddresses }));
        setModalOpen(false);
      } else {
        alert(response.message || "Failed to save address");
      }
    } catch (error) {
      alert("Error saving address: " + error.message);
    }
  };

  // Close modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const isMobile = useIsMobile();

  return (
    <div className="safeArea">
      {/* Header & OfferBanner */}
      {!isMobile && <OfferBanner />}
      <Header />

      {/* MobileCartMenu for mobile users */}
      {isMobile && <MobileCartMenu />}

      {/* Main Content */}
      <div className={styles.container}>
        <div className={styles.header}>
          <i
            className="bi bi-arrow-left"
            onClick={() => window.history.back()}
          ></i>
          <h2>Your Addresses</h2>
        </div>

        {/* Address Grid */}
        <div className={styles.addressGrid}>
          {/* Add Address Card */}
          <div className={styles.addCard} onClick={handleAddAddress}>
            <div className={styles.addIcon}>+</div>
            <p>Add Address</p>
          </div>

          {/* Address Cards */}
          {addresses.map((address, index) => (
            <div key={address._id} className={styles.addressCard}>
              <div className={styles.addressHeader}>
                <h3>{address?.name}</h3>
                {address?.isDefault && (
                  <span className={styles.defaultBadge}>Default</span>
                )}
              </div>
              <p className={styles.addressLine}>{address?.street}</p>
              <p className={styles?.phoneNumber}>
                Phone Number: {address.phone}
              </p>
              <div className={styles.actions}>
                <span
                  className={styles.edit}
                  onClick={() => handleEditAddress(index)}
                >
                  Edit
                </span>
                {" | "}
                <span
                  className={styles.remove}
                  onClick={() => handleRemoveAddress(address._id)}
                >
                  Remove
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Add/Edit Address Modal */}
        {modalOpen && (
          <AddEditAddressModal
            onClose={handleCloseModal}
            onSave={handleSaveAddress}
            address={currentAddress}
            isEditing={isEditing}
            addresses={addresses}
          />
        )}
      </div>
    </div>
  );
};

export default AddressBook;
