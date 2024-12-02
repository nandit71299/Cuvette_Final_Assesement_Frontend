import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Footer, Header, MobileCartMenu, OfferBanner } from "../../components";
import { toast, ToastContainer } from "react-toastify";
import useIsMobile from "../../utils/isMobile";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData } from "../../redux/cartSlice";
import styles from "./ViewOrder.module.css";
import PopularRestaurants from "../../components/HomePage/PopularRestaurants";

function ViewOrder() {
  const [params] = useSearchParams();
  const cartId = params.get("cartId");
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  // Use navigate hook to navigate programmatically
  const navigate = useNavigate();

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
    event.preventDefault();
    // Navigate to the /payment page
    navigate("/payment");
  };

  return (
    <div className="flex-container flex-column gap-1">
      {/* Safe area with Header, OfferBanner, and MobileCartMenu */}
      <div className="safeArea">
        {!isMobile && <OfferBanner />}
        <Header />
        <ToastContainer />
        {isMobile && <MobileCartMenu />}
      </div>

      {/* Navigation and Title */}
      <div className={`${styles.navigationContainer} safeArea`}>
        <i
          className={`bi bi-arrow-left ${styles.backIcon}`}
          onClick={() => window.history.back()}
        ></i>
        <h1 className={styles.pageTitle}>Your Order Details</h1>
      </div>

      <div className={`${styles.mainContainer} safeArea`}>
        {/* Order Items */}
        <div className={styles.cartDetailsContainer}>
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
        {/* proceedContent */}
        <div className={`${styles.proceedContainer} safeArea`}>
          <div className={styles.delvieryInput}>
            <div className={styles.pinIcon}>
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <div className={styles.address}>
              <p>Delivery Address</p>
              <p style={{ fontSize: "14px", fontWeight: "200" }}>
                45, Green Street, Sector 12...
              </p>
            </div>
            <div>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
          <hr className={styles.hrLine} />
          <div className={`${styles.amountsContainer}`}>
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
            <hr className={styles.hrLine} />
            <div className="flex-container justify-content-between">
              <p>Total</p>
              <p>
                <strong>₹{cartData.total}</strong>
              </p>
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
          {" "}
          <PopularRestaurants title="Similiar Restruants" />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default ViewOrder;
