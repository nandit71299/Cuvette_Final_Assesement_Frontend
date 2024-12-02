import React, { useEffect } from "react";
import { Footer, Header, MobileCartMenu, OfferBanner } from "../../components";
import { ToastContainer } from "react-toastify";
import useIsMobile from "../../utils/isMobile";
import styles from "./OrderSuccessful.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../redux/cartSlice";

function OrderSuccessful() {
  const isMobile = useIsMobile();
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  return (
    <div>
      <div className="safeArea">
        {!isMobile && <OfferBanner />}
        <Header />
      </div>
      <div className={`${styles.contentContainer}`}>
        <div
          className={`${styles.iconContainer} flex-container flex-column gap-2`}
        >
          <i className={`${styles.checkIcon} bi bi-check-lg`}></i>
        </div>
        <div className={styles.textContentContainer}>
          <h2>Order Placed Successfully</h2>
          <p>
            Your order is confirmed and on its way. Get set to savor your chosen
            delights!
          </p>
          <div className={styles.orderItemsContainer}>
            {cartItems.items.map((item) => (
              <div key={item.id} className={styles.orderItem}>
                <p>{item.title}</p>
              </div>
            ))}
            <button
              className="w-100"
              style={{ cursor: "pointer" }}
              onClick={() => (window.location = "/")}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderSuccessful;
