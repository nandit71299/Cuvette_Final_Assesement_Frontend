import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import styles from "./PaymentOptions.module.css";
import Header from "../../components/Header/Header";
import { MobileCartMenu, OfferBanner } from "../../components";
import { toast, ToastContainer } from "react-toastify";
import useIsMobile from "../../utils/isMobile";
import { createOrder } from "../../utils/apiUtil"; // Ensure the createOrder function is imported
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData } from "../../redux/cartSlice";
function PaymentOptions() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const paymentOptions = [
    { id: "wallet", label: "Wallet", subLabel: "Available balance: ₹300" },
    { id: "maestro", label: "MaestroKard" },
    { id: "paypal", label: "Paypal" },
    { id: "stripe", label: "Stripe" },
  ];
  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  const confirmOrder = async () => {
    if (selectedOption === null || selectedOption === undefined) {
      toast.error("Please select a payment option");
      return;
    }

    try {
      const orderData = {
        paymentMethod: selectedOption,
        items: cartData.items,
        address: "AVADD",
      };

      const response = await createOrder(orderData);

      // Handle successful order creation
      if (response && response.success) {
        toast.success("Order placed successfully!");
        navigate("/order-successful");
      } else {
        // Handle case where order creation fails (API error, validation, etc.)
        toast.error(response?.message || "Failed to create order");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  // Handle clicking on a payment option
  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
  };

  // Handle clicking the "Add Debit Card" option
  const handleAddDebitCardClick = () => {
    navigate("/add-debit-card"); // Navigate to the Add Debit Card page
  };

  return (
    <div className="position-relative">
      <div className="safeArea">
        {!isMobile && <OfferBanner />}
        <Header />
        <ToastContainer />
        {/* {isMobile && <MobileCartMenu />} */}
      </div>
      {/* Title and Back Icon */}
      <div className={styles.container}>
        <div className={styles.header}>
          <i
            className={`bi bi-arrow-left ${styles.backIcon}`}
            onClick={() => window.history.back()}
          ></i>
          <h1>Choose and Pay</h1>
        </div>

        <div className={styles.mainContent}>
          {/* Payment Options */}
          <div className={styles.paymentOptions}>
            {/* Wallet option */}
            <div
              key="wallet"
              className={`${styles.optionCard} ${
                selectedOption === "wallet" ? styles.selected : ""
              }`}
              onClick={() => handleOptionClick("wallet")}
            >
              <div className={styles.optionIcon}>W</div>
              <div className={styles.optionDetails}>
                <h3>Wallet</h3>
                {/* This is where we move the balance text */}
                {selectedOption === "wallet" && (
                  <p className={styles.walletBalance}>
                    Available balance: ₹300
                  </p>
                )}
              </div>
              {/* Show the arrow icon instead of radio button when selected */}
              {selectedOption === "wallet" ? (
                <i
                  className="bi bi-chevron-right"
                  style={{ fontSize: "24px" }}
                ></i>
              ) : (
                <input
                  type="radio"
                  className={styles.radioButton}
                  checked={selectedOption === "wallet"}
                  onChange={() => handleOptionClick("wallet")}
                />
              )}
            </div>

            {/* Horizontal Rule Below Wallet */}
            <hr className={styles.hrLine} />

            {/* Other Payment Options */}
            {paymentOptions.slice(1).map((option) => (
              <div
                key={option.id}
                className={`${styles.optionCard} ${
                  selectedOption === option.id ? styles.selected : ""
                }`}
                onClick={() => handleOptionClick(option.id)}
              >
                <div className={styles.optionIcon}>
                  {option.label.charAt(0)}
                </div>
                <div className={styles.optionDetails}>
                  <h3>{option.label}</h3>
                  {option.subLabel && <p>{option.subLabel}</p>}
                </div>
                {/* Show the arrow icon instead of radio button when selected */}
                {selectedOption === option.id ? (
                  <i
                    className="bi bi-chevron-right"
                    style={{ fontSize: "24px" }}
                  ></i>
                ) : (
                  <input
                    type="radio"
                    className={styles.radioButton}
                    checked={selectedOption === option.id}
                    onChange={() => handleOptionClick(option.id)}
                  />
                )}
              </div>
            ))}

            {/* Static "Add Debit Card" option at the end of the list */}
            <div
              key="addCard"
              className={`${styles.optionCard} ${
                selectedOption === "addCard" ? styles.selected : ""
              }`}
              onClick={handleAddDebitCardClick} // Navigate when clicked
            >
              <div className={styles.optionIcon}>+</div>
              <div className={styles.optionDetails}>
                <h3>Add Debit Card</h3>
              </div>
              {/* Show the arrow icon instead of radio button when selected */}
              {selectedOption === "addCard" ? (
                <i
                  className="bi bi-chevron-right"
                  style={{ fontSize: "24px" }}
                ></i>
              ) : (
                <input
                  type="radio"
                  className={styles.radioButton}
                  checked={selectedOption === "addCard"}
                  onChange={() => handleOptionClick("addCard")}
                />
              )}
            </div>
          </div>

          {/* Summary Box */}
          {!isMobile && (
            <div className={styles.summaryBox}>
              <h3>Amount to be paid</h3>
              <p className={styles.amount}>₹240</p>
              <button className={styles.payButton} onClick={confirmOrder}>
                Proceed Payment
              </button>
            </div>
          )}
        </div>
      </div>
      {isMobile && (
        <div className={styles.mobileProceedContainer}>
          <div className="flex-container justify-content-between align-items-center">
            <p>Amount to be payed</p>
            <h2>₹344.3</h2>
          </div>
          <button className={styles.payButton} onClick={confirmOrder}>
            Proceed Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default PaymentOptions;
