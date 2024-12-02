import React, { useState, useEffect } from "react";
import styles from "./ProfilePage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/userSlice";
import { toast } from "react-toastify";
import { updateUser } from "../../utils/apiUtil";
import { addCard, updateCard, deleteCard } from "../../utils/apiUtil"; // Import updateCard utility
import AddEditCardModal from "../../components/ProfilePage/AddEditCard"; // Import modal
import { Footer, Header, MobileCartMenu, OfferBanner } from "../../components";
import useIsMobile from "../../utils/isMobile";

function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user); // Getting user data from redux state

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    fullName: user.name,
    email: user.email,
    country: user.country || "",
    phone: user.phone || "",
  });

  const [isSaveEnabled, setIsSaveEnabled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // Track modal visibility
  const [currentCard, setCurrentCard] = useState(null); // Track the current card for editing

  useEffect(() => {
    const hasChanges =
      editedData.fullName !== user.name ||
      editedData.email !== user.email ||
      editedData.country !== user.country ||
      editedData.phone !== user.phone;

    setIsSaveEnabled(hasChanges);
  }, [editedData, user]);

  // Start editing mode
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Cancel editing mode and reset changes
  const handleCancel = () => {
    setIsEditing(false);
    setEditedData({
      fullName: user.name,
      email: user.email,
      country: user.country || "",
      phone: user.phone || "",
    });
  };

  // Handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate user profile fields
  const validateProfile = () => {
    const { fullName, email, phone, country } = editedData;

    if (!fullName) {
      toast.error("Full name is required.");
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (!country) {
      toast.error("Country is required.");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (phone && !phoneRegex.test(phone)) {
      toast.error("Please enter a valid phone number (10 digits).");
      return false;
    }

    return true;
  };

  // Save the edited data
  const handleSave = async () => {
    if (!validateProfile()) return;

    const updatedUser = {
      userId: user.userId,
      name: editedData.fullName,
      email: editedData.email,
      country: editedData.country,
      phone: editedData.phone,
    };

    const response = await updateUser(updatedUser);

    if (response.success) {
      dispatch(setUser({ user: response.user }));
      setIsEditing(false); // Exit edit mode after successful save
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  // Open modal for editing or adding a card
  const handleEditCard = (card) => {
    setCurrentCard(card);
    setModalOpen(true);
  };

  // Handle adding a new card
  const handleAddCard = () => {
    setCurrentCard(null); // No card data for new card
    setModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Validate card fields
  const validateCard = (cardData) => {
    const { cardNumber, expiryDate, cvc, nameOnCard } = cardData;

    if (!cardNumber || cardNumber.length !== 16) {
      toast.error("Card number must be 16 digits.");
      return false;
    }

    const cvcRegex = /^[0-9]{3}$/;
    if (!cvc || !cvcRegex.test(cvc)) {
      toast.error("Please enter a valid CVC (3 digits).");
      return false;
    }

    if (!nameOnCard) {
      toast.error("Cardholder's name is required.");
      return false;
    }

    return true;
  };

  // Handle saving card changes
  const handleSaveCard = async (cardData) => {
    if (!validateCard(cardData)) return;

    if (currentCard) {
      // Update existing card using the updateCard utility
      const response = await updateCard({
        userId: user.userId,
        cardId: currentCard._id, // Assuming each card has an `id`
        ...cardData, // Spread the card data into the request
      });

      if (response.success) {
        toast.success("Card updated successfully!");
        dispatch(setUser(response)); // Update the user state with the new data
        setModalOpen(false); // Close the modal
      } else {
        toast.error(response.message);
      }
    } else {
      // Add new card
      const response = await addCard({ ...cardData, userId: user.userId });
      if (response.success) {
        toast.success("Card added successfully!");
        dispatch(setUser(response)); // Update the user state with the new data
        setModalOpen(false); // Close the modal
      } else {
        toast.error(response.message);
      }
    }
  };

  // Handle removing a card
  const handleRemoveCard = async (cardId) => {
    console.log(cardId);
    // Make sure the cardId is available before proceeding
    if (!cardId) {
      toast.error("Card ID is missing.");
      return;
    }

    const cardData = {
      userId: user.userId, // Assuming `user.userId` contains the current user's ID
      cardId: cardId, // The ID of the card to be deleted
    };

    // Call the deleteCard utility function
    const response = await deleteCard(cardData);

    if (response.success) {
      toast.success("Card removed successfully!");

      // Update user data in Redux (assuming the card is removed from the user's data)
      const updatedUser = {
        ...user,
        cards: user.cards.filter((card) => card.id !== cardId), // Remove the deleted card from the list
      };
      dispatch(setUser(response)); // Update Redux state

      setModalOpen(false); // Close the modal
    } else {
      toast.error(response.message || "Failed to remove the card.");
    }
  };

  // Navigate back to the previous page
  const handleBack = () => {
    navigate(-1);
  };

  const isMobile = useIsMobile();

  return (
    <div className={styles.mainContainer}>
      <div className="safeArea">
        {!isMobile && <OfferBanner />}
        <div className="safeArea">
          <Header />
        </div>
        <div style={{ marginTop: "15px" }}>
          {isMobile && <MobileCartMenu />}
        </div>
      </div>
      <div className={`${styles.container}`}>
        <div className={styles.header}>
          <i
            className={`bi bi-arrow-left ${styles.backIcon}`}
            onClick={handleBack}
          />
          {!isMobile ? (
            <h1>My Profile</h1>
          ) : (
            <div className="flex-container justify-content-between w-100">
              <h1>Your Profile</h1>
              <div>
                {isEditing ? (
                  <div className="flex-container gap-05">
                    <button
                      className={styles.cancelButton}
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button
                      className={`${styles.saveButton} ${
                        !isSaveEnabled ? styles.disabled : ""
                      }`}
                      onClick={handleSave}
                      disabled={!isSaveEnabled} // Disable save button if no changes
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <button className={styles.editButton} onClick={handleEdit}>
                    Edit
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        <div className={styles.profileSection}>
          <div className={styles.profileInfo}>
            <img
              src="https://randomuser.me/api/portraits/men/79.jpg"
              alt="User"
              className={styles.profileImage}
            />
            <div className={styles.nameSection}>
              <h2 className={styles.name}>{user.name}</h2>
            </div>
          </div>
          <div className={styles.actionButtons}>
            {isEditing ? (
              <>
                <button className={styles.cancelButton} onClick={handleCancel}>
                  Cancel
                </button>
                <button
                  className={`${styles.saveButton} ${
                    !isSaveEnabled ? styles.disabled : ""
                  }`}
                  onClick={handleSave}
                  disabled={!isSaveEnabled} // Disable save button if no changes
                >
                  Save
                </button>
              </>
            ) : (
              <button className={styles.editButton} onClick={handleEdit}>
                Edit
              </button>
            )}
          </div>
        </div>

        <div className={styles.detailsSection}>
          <div className={styles.detailRow}>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={editedData.fullName}
                onChange={handleChange}
                readOnly={!isEditing}
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={editedData.email}
                readOnly
                disabled
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.detailRow}>
            <div className={styles.inputGroup}>
              <label>Gender</label>
              <input
                type="text"
                name="gender"
                value={editedData.gender || "Male"}
                readOnly
                disabled
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={editedData.country}
                onChange={handleChange}
                readOnly={!isEditing}
                className={styles.input}
              />
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <h3 className={styles.paymentTitle}>Saved Payment Methods</h3>
        <div className={styles.paymentMethods}>
          {user.cards && Array.isArray(user.cards) && user.cards.length > 0
            ? user.cards.map((card, index) => (
                <div key={index} className={styles.paymentCard}>
                  <div className={styles.cardDetails}>
                    <div className={styles.cardIcon}>
                      <i className="bi bi-credit-card" />
                    </div>
                    <div>
                      <p className={styles.cardNumber}>{card.cardNumber}</p>
                      <p className={styles.cardName}>{card.nameOnCard}</p>
                    </div>
                  </div>
                  <i
                    className={`bi bi-pencil ${styles.editCard}`}
                    onClick={() => handleEditCard(card)} // Open modal to edit
                  />
                </div>
              ))
            : "No saved cards yet."}
          <div
            className={`${styles.addCard} ${
              isMobile ? styles.mobileAddCard : ""
            }`}
            onClick={handleAddCard}
          >
            <i className="bi bi-plus-circle" />
            {!isMobile ? <p>Add New Card</p> : <span>Add Card</span>}
          </div>
        </div>

        {/* Conditionally render the modal */}
        {modalOpen && (
          <AddEditCardModal
            onClose={handleCloseModal}
            onSave={handleSaveCard}
            onRemove={handleRemoveCard}
            cardDetails={currentCard || {}} // Empty object if no card is passed
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
