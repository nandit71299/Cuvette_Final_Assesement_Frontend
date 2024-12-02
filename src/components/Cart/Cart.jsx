import React from "react";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice"; // Dispatching the thunk
import { toast, ToastContainer } from "react-toastify"; // Notifications
import useIsMobile from "../../utils/isMobile";
import { Navigate } from "react-router-dom";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart); // Accessing cart state from Redux
  const [redirectToCheckout, setRedirectToCheckout] = React.useState(false);

  // Handle removing item from cart
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId)); // Dispatch the thunk to remove item
  };

  // Handle copying the cart URL
  const handleCopyLink = () => {
    const currentUrl = window.location.origin;

    if (!cartItems.items || cartItems.items.length === 0) {
      toast.error("No cart items to share");
      return;
    }

    navigator.clipboard
      .writeText(`${currentUrl}/view-order?cartId=${cartItems.cartId}`)
      .then(() => {
        toast.success("URL copied to clipboard");
      })
      .catch(() => {
        toast.error("Failed to copy the URL");
      });
  };

  const isMobile = useIsMobile();

  // Redirect to checkout page when needed
  const handleCheckoutClick = () => {
    const minAmount = 20; // Minimum checkout amount
    if (cartItems.total < minAmount) {
      const remainingAmount = minAmount - cartItems.total;
      toast.error(
        `Minimum delivery is ₹20. You must spend ₹${remainingAmount.toFixed(
          2
        )} more to checkout!`
      );
      return;
    }
    setRedirectToCheckout(true);
  };

  // If redirectToCheckout is true, Navigate to the checkout page
  if (redirectToCheckout) {
    return <Navigate to={`/view-order?cartId=${cartItems.cartId}`} />;
  }

  // Render cart items
  return (
    <div className={styles.cartContainer} style={{ ...props.styles }}>
      {isMobile && (
        <div
          style={{
            textAlign: "end",
            display: "flex",
            justifyContent: "end",
            marginBottom: "20px",
          }}
        >
          <p
            onClick={props.toggleVisibility}
            style={{
              background: "white",
              padding: "10px",
              height: "25px",
              width: "25px",
              borderRadius: "50%",
              textAlign: "center",
            }}
          >
            X
          </p>
        </div>
      )}

      <div className={styles.sharingOptionContainer}>
        <i className="bi bi-share-fill"></i>
        <p>Share this cart with your friends</p>
        <button onClick={handleCopyLink}>Copy Link</button>
      </div>

      <div className={styles.cartTitle}>
        <i className="bi bi-basket2 bi-xxl" style={{ fontSize: "20px" }}></i>
        <h3>My Basket</h3>
      </div>

      <div
        className={styles.cartItemsList}
        style={{ backgroundColor: isMobile ? "white" : "" }}
      >
        {cartItems.items.length > 0 ? (
          cartItems.items.map((item) => (
            <div key={item._id}>
              <div className={styles.cartItem}>
                <div className={styles.itemQuantityContainer}>
                  <h3 className={styles.itemQuantity}>{item.quantity}x</h3>
                </div>
                <div>
                  <p className={styles.cartItemPrice}>
                    ₹{item.quantity * item.price}
                  </p>
                  <h4 className={styles.cartItemName}>{item.title}</h4>
                  <h5 className={styles.cartItemDescription}>
                    {item.description}
                  </h5>
                </div>
                <div>
                  <button
                    className={styles.cartItemRemoveButton}
                    onClick={() => handleRemoveFromCart(item.item_id)} // Ensure correct ID is passed
                  >
                    <i
                      className="bi bi-trash-fill"
                      style={{
                        color: "red",
                        fontSize: "20px",
                      }}
                    ></i>
                  </button>
                </div>
              </div>
              <hr />
            </div>
          ))
        ) : (
          <div className={styles.emptyCartContainer}>No items in the cart.</div>
        )}

        {/* Render billing section only if there are items in the cart */}
        {cartItems.items.length > 0 && (
          <>
            <div className={styles.billingAmountsContainer}>
              <div className={styles.billingItem}>
                <h4>Subtotal:</h4>
                <h3>₹{cartItems.subTotal}</h3>
              </div>
              <div className={styles.billingItem}>
                <h4>Discounts:</h4>
                <h3>₹0.00</h3>
              </div>
              <div className={styles.billingItem}>
                <h4>Delivery Fee:</h4>
                <h3>₹{cartItems.deliveryFee}</h3>
              </div>

              <hr className="w-100" />

              <div className={styles.totalContainer}>
                <h4>Total to pay</h4>
                <h3>₹{cartItems.total}</h3>
              </div>
            </div>

            {/* Static Elements */}
            <div className="flex-container flex-column gap-05">
              <div className={styles.chooseFreeItems}>
                <h5>Choose your free items</h5>
                <i className="bi bi-arrow-down-circle-fill"></i>
              </div>
              <div className={styles.applyCoupon}>
                <h5>Apply a coupon</h5>
                <i className="bi bi-arrow-right-circle-fill"></i>
              </div>
            </div>

            {/* Delivery Options */}
            <div className="flex-container gap-05">
              <div
                className={`${styles.scooterDelivery} flex-container flex-column gap-05`}
              >
                <i className="bi bi-scooter"></i>
                <h6>Delivery</h6>
                <p>Starts at 17:50</p>
              </div>
              <hr />
              <div
                className={`${styles.shopCollection} flex-container flex-column gap-05`}
              >
                <i className="bi bi-shop"></i> <h6>Collection</h6>
                <p>Starts at 16:50</p>
              </div>
            </div>

            {/* Checkout Button */}
            <div
              className={`${styles.checkoutButtonContainer} ${
                cartItems.total < 20 ? styles.disabled : ""
              }`}
              onClick={handleCheckoutClick}
            >
              <i className="bi bi-arrow-right-circle-fill"></i>
              <button
                className={`${styles.checkoutButton} ${
                  cartItems.total < 20 ? styles.disabled : ""
                }`}
                disabled={cartItems.total < 20}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default Cart;
