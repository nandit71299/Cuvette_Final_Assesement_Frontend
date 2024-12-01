import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header, MobileCartMenu, OfferBanner } from "../../components";
import { toast, ToastContainer } from "react-toastify";
import useIsMobile from "../../utils/isMobile";
import styles from "./ViewOrder.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData } from "../../redux/cartSlice";

function ViewOrder() {
  const [params] = useSearchParams();
  const cartId = params.get("cartId");
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart); // Get cart data from Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartId) {
      dispatch(fetchCartData(cartId)); // Fetch cart data when component mounts
    }
  }, [cartId, dispatch]);

  if (cartData.loading) {
    return <div>Loading...</div>; // Show loading state while fetching cart data
  }

  if (cartData.error) {
    return <div>Error: {cartData.error}</div>; // Show error if there's an issue with fetching cart data
  }

  // Helper function to format price (assuming price is in cents or dollars)
  const formatPrice = (price) => {
    return `$${(price / 100).toFixed(2)}`;
  };

  return (
    <div>
      <div className="safeArea">
        {!isMobile && <OfferBanner />}
        <div className="safeArea">
          <Header />
        </div>
        <div style={{ marginTop: "15px" }}>
          {isMobile && <MobileCartMenu />}
        </div>
        <ToastContainer />
      </div>

      <div className="safeArea">
        <div className={`${styles.navigationContainer}`}>
          <i
            className={`bi bi-arrow-left ${styles.backIcon}`}
            onClick={() => navigate(-1)}
          ></i>
          <h1>Your Order Details</h1>
        </div>
      </div>

      {/* Cart details section */}
      <div className={`${styles.cartDetailsContainer}`}>
        <h2>Your Cart</h2>

        {/* Display cart items */}
        <div className={styles.cartItems}>
          {cartData.items.length === 0 ? (
            <div>Your cart is empty</div>
          ) : (
            cartData.items.map((item) => (
              <div key={item._id} className={styles.cartItem}>
                <img
                  src={item.image || "/placeholder.png"}
                  alt={item.title}
                  className={styles.cartItemImage}
                />
                <div className={styles.cartItemDetails}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>Price: {formatPrice(item.price)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: {formatPrice(item.price * item.quantity)}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart summary */}
        <div className={styles.cartSummary}>
          <div className={styles.summaryItem}>
            <span>Subtotal:</span>
            <span>{formatPrice(cartData.subTotal)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Delivery Fee:</span>
            <span>{formatPrice(cartData.deliveryFee)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Total:</span>
            <span>{formatPrice(cartData.total)}</span>
          </div>
        </div>

        {/* Optionally, you could have a checkout button */}
        <button className={styles.checkoutButton}>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default ViewOrder;
