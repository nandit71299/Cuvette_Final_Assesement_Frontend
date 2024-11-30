import React, { useEffect } from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartTitle}>
        <i className="bi bi-basket2 bi-xxl" style={{ fontSize: "20px" }}></i>
        <h3>My Basket</h3>
      </div>
      <div className={styles.cartItemsList}>
        {cartItems.items.length > 0 ? (
          cartItems.items.map((item) => (
            <div key={item._id} className={styles.cartItem}>
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
                  onClick={() => {
                    //API Call Then ...
                    dispatch(removeItemFromCart(item._id));
                  }}
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
          ))
        ) : (
          <div className={styles.emptyCartContainer}>
            {" "}
            No items in the cart.
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
