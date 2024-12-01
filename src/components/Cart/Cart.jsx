import React from "react";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice"; // Now dispatching the thunk
import { toast } from "react-toastify"; // If you want to show notifications

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart); // Accessing cart state from Redux

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId)); // Dispatch the thunk to remove item
  };

  // Render cart items
  return (
    <div className={styles.cartContainer}>
      <div className={styles.sharingOptionContainer}>
        <i className="bi bi-share-fill"></i>
        <p>Share this cart with your friends</p>
        <button>Copy Link</button>
      </div>
      <div className={styles.cartTitle}>
        <i className="bi bi-basket2 bi-xxl" style={{ fontSize: "20px" }}></i>
        <h3>My Basket</h3>
      </div>
      <div className={styles.cartItemsList}>
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
          </div>{" "}
          <hr className="w-100" />
          <div className={styles.totalContainer}>
            <h4>Total to pay</h4>
            <h3>₹{cartItems.total}</h3>
          </div>
        </div>
        {/* static elements */}
        <div className="flex-container flex-column gap-05">
          {/* freeItems */}
          <div className={styles.chooseFreeItems}>
            <h5>Choose your free items</h5>
            <i className="bi bi-arrow-down-circle-fill"></i>
          </div>{" "}
          <div className={styles.applyCoupon}>
            <h5>Choose your free items</h5>
            <i className="bi bi-arrow-right-circle-fill"></i>
          </div>
        </div>
        {/* delivery options */}
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
        <div className={styles.checkoutButtonContainer}>
          <i className="bi bi-arrow-right-circle-fill"></i>
          <button className={styles.checkoutButton}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
