import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Footer, Header, MobileCartMenu, OfferBanner } from "../../components";
import useIsMobile from "../../utils/isMobile";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData } from "../../redux/cartSlice";
import styles from "./ViewOrder.module.css";
import PopularRestaurants from "../../components/HomePage/PopularRestaurants";
import { toast } from "react-toastify"; // Import toast

function ViewOrder() {
  const [params] = useSearchParams();
  const cartId = params.get("cartId");
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  // Use navigate hook to navigate programmatically
  const navigate = useNavigate();

  // Filter the user's default address
  const defaultAddress = user?.addresses?.find((address) => address.isDefault);

  // Combine the address fields
  const fullAddress = defaultAddress
    ? `${defaultAddress.street}, ${defaultAddress.city}, ${defaultAddress.state}, ${defaultAddress.country}`
    : "No default address available";

  useEffect(() => {
    dispatch(fetchCartData(cartId));
  }, [cartId, dispatch]);

  if (cartData.loading) {
    return <div>Loading...</div>;
  }

  if (cartData.error) {
    return <div>Error: {cartData.error}</div>;
  }

  const handlePaymentClick = (event) => {
    // event.preventDefault();
    if (!defaultAddress) {
      console.log("No default address found"); // Debugging line
      toast.error("Please select a default address");
      return;
    }
    navigate("/payment");
  };

  return (
    <div>
      {/* Safe area with Header, OfferBanner, and MobileCartMenu */}
      <div className="safeArea">
        {!isMobile && <OfferBanner />}
        <Header />
      </div>
      <div className={`flex-container flex-column gap-1`}>
        {/* Navigation and Title */}
        <div className={`${styles.navigationContainer} safeArea`}>
          <i
            className={`bi bi-arrow-left ${styles.backIcon}`}
            onClick={() => window.history.back()}
          ></i>
          <h1 className={styles.pageTitle}>
            {isMobile ? "Checkout" : "Your Order Details"}
          </h1>
        </div>

        <div className={`${styles.mainContainer}`}>
          {/* Order Items */}
          <div className={`${styles.cartDetailsContainer} safeArea`}>
            {cartData.items.length === 0 ? (
              <div className={styles.emptyCartMessage}>Your cart is empty</div>
            ) : (
              cartData.items.map((item) => (
                <div key={item._id} className={styles.cartItem}>
                  <img
                    src={item.image || "/placeholder.png"}
                    alt={item.title}
                    className={styles.cartItemImage}
                  />
                  <div className={styles.cartItemDetails}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemQuantity}>{item.quantity}x item</p>
                  </div>
                  <p className={styles.itemPrice}>₹{item.price}</p>
                </div>
              ))
            )}

            {/* Notes Section */}
            <div className={styles.notesSection}>
              <p className={styles.notesLabel}>Notes</p>
              <input
                type="text"
                placeholder="Add order notes"
                className={styles.notesInput}
              />
            </div>
          </div>

          {/* ProceedContent */}
          <div className={`${styles.proceedContainer} safeArea`}>
            {isMobile && (
              <h2 className={styles.deliveryLabel}>Delivery Address</h2>
            )}
            <div className={styles.delvieryInput}>
              <div className={styles.pinIcon}>
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div
                className={styles.address}
                onClick={() => navigate("/addresses")}
              >
                <p>Delivery Address</p>
                <p style={{ fontWeight: "400", fontSize: "12px" }}>
                  {fullAddress}
                </p>
              </div>
              <div>
                <i className={`bi bi-chevron-right ${styles.chevron}`}></i>
              </div>
            </div>
            {!isMobile && <hr className={styles.hrLine} />}
            <div className={`${styles.amountsContainer}`}>
              {isMobile && <h2>Order Summary</h2>}{" "}
              <div className="flex-container justify-content-between">
                <p>Items</p>
                <p>₹{cartData.subTotal}</p>
              </div>
              <div className="flex-container justify-content-between">
                <p>Delivery Fee</p>
                <p>₹{cartData.deliveryFee}</p>
              </div>
              <div className="flex-container justify-content-between">
                <p>Sales Tax</p>
                <p>₹{0}</p>
              </div>
              {!isMobile && <hr className={styles.hrLine} />}
              <div className="flex-container justify-content-between">
                <p className={styles.totalAmountLabel}>Total</p>
                <p className={styles.totalAmount}>₹{cartData.total}</p>
              </div>
            </div>
            <div>
              <button className={styles.payButton} onClick={handlePaymentClick}>
                Choose Payment Method
              </button>
            </div>
          </div>
          <div></div>
        </div>

        {!isMobile && (
          <div>
            <PopularRestaurants title="Similar Restaurants" />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewOrder;
