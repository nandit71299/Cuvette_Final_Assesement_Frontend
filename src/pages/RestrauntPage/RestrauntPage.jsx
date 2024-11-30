// RestrauntPage.js

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getItems, getRestraunt } from "../../utils/apiUtil";
import { toast, ToastContainer } from "react-toastify";
import { Header, MobileCartMenu, OfferBanner } from "../../components";
import useIsMobile from "../../utils/isMobile";
import styles from "./RestrauntPage.module.css";
import assets from "../../data/data";
import ResInfo from "../../components/RestrauntPage/ResInfo";
import OfferCard from "../../components/RestrauntPage/OfferCard";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromCart,
  updateCart,
  fetchCartData,
} from "../../redux/cartSlice";
import Cart from "../../components/Cart/Cart";

function RestrauntPage() {
  const isMobile = useIsMobile();
  const [params] = useSearchParams();
  const restrauntId = params.get("id");
  const token = localStorage.getItem("token");
  const [data, setData] = useState({});
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    getRestraunt({ token, restrauntId })
      .then((response) => {
        if (response.success) {
          setData(response.restraunt);
        } else {
          toast.error(response.response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    getItems({ token, restrauntId })
      .then((response) => {
        if (response.success) {
          setItemsData(response.items || []);
        } else {
          toast.error(response.response.data.message || "Error fetching items");
        }
      })
      .catch((error) => {
        toast.error("Error fetching items");
        console.log(error);
      });
  }, [restrauntId, token]);

  useEffect(() => {
    dispatch(fetchCartData()); // Fetch cart data when component mounts
  }, [dispatch]);

  const addItemToCart = (item) => {
    // Check if cartItems.items is an array before proceeding
    if (!Array.isArray(cartItems.items)) {
      console.error("cartItems.items is not an array:", cartItems.items);
      return; // Prevent further execution if cartItems.items is not an array
    }
    console.log(item);
    const existingItemIndex = cartItems.items.findIndex(
      (cartItem) => cartItem.item_id === item._id // Match by item_id instead of _id to ensure unique items
    );

    let updatedItems = [];
    console.log(existingItemIndex);
    if (existingItemIndex !== -1) {
      // If item exists, update quantity
      updatedItems = cartItems.items.map((cartItem, index) => {
        if (index === existingItemIndex) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1, // Increase quantity by 1
          };
        }
        return cartItem;
      });
    } else {
      // If item doesn't exist in the cart, add it with quantity 1
      updatedItems = [...cartItems.items, { ...item, quantity: 1 }];
    }

    // Safely calculate the updated subtotal and total
    const updatedSubTotal = updatedItems.reduce(
      (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
      0
    );

    const updatedTotal = updatedSubTotal + cartItems.deliveryFee;

    // Dispatch to update the cart state in Redux
    dispatch(
      updateCart({
        items: updatedItems, // Pass updatedItems directly
        subTotal: updatedSubTotal,
        total: updatedTotal,
        deliveryFee: cartItems.deliveryFee, // Use the existing delivery fee from the state
      })
    );
  };

  const groupedItems = itemsData.reduce((acc, item) => {
    const category = item.category || "Others";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div className={styles.mainContainer}>
      <div className="safeArea">
        {!isMobile && <OfferBanner />}
        <Header />
        <div style={{ marginTop: "15px" }}>
          {isMobile && <MobileCartMenu />}
        </div>
        <ResInfo data={data} assets={assets} />
        <ToastContainer />
      </div>
      {!isMobile && (
        <div className={`${styles.searchContainer} safeArea`}>
          <h3>All Offers from {data.name}</h3>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search from menu..."
          />
          <i className={`bi bi-search ${styles.searchIcon}`}></i>
        </div>
      )}
      <div className={styles.categoryStripContainer}>
        <div className={styles.categoryStrip}>
          <button className={styles.active}>Offers</button>
          <button>Burgers</button>
          <button>Fries</button>
          <button>Snacks</button>
          <button>ColdDrinks</button>
          <button>HappyMeals</button>
          <button>Desserts</button>
          <button>HotDrinks</button>
          <button>Sauces</button>
          <button>Orbit™️</button>
        </div>
      </div>
      <div className={styles.mainItemsContainer}>
        <div className={styles.ItemsContainer}>
          {!isMobile && (
            <div className={styles.offerContainer}>
              <div className={styles.offerCardContainer}>
                <OfferCard
                  image={assets.restrauntPageImage1}
                  resName={data.name}
                  subText="First Order Discount"
                />
                <OfferCard
                  image={assets.restrauntPageImage2}
                  resName={data.name}
                  subText="Vegan Discount"
                />
                <OfferCard
                  image={assets.restrauntPageImage3}
                  resName={data.name}
                  subText="Free ice Cream Offer"
                />
              </div>
            </div>
          )}
          <div className={`safeArea ${styles.itemListContainer}`}>
            {Object.keys(groupedItems).map((category) => (
              <div key={category} className={styles.categorySection}>
                <h3 className={styles.categoryTitle}>{category}</h3>
                <div className={styles.itemList}>
                  {groupedItems[category].map((item) => (
                    <div className={styles.itemCardWrapperContainer}>
                      <div key={item._id} className={styles.itemCard}>
                        <div className={styles.itemInfo}>
                          <h4 className={styles.itemTitle}>{item.title}</h4>
                          <p className={styles.itemDescription}>
                            {item.description}
                          </p>
                          <div className={styles.itemPrice}>${item.price}</div>
                        </div>
                        <div className={styles.itemImageContainer}>
                          <img
                            src={item.image}
                            alt={item.title}
                            className={styles.itemImage}
                          />
                          <button
                            className={styles.addIconContainer}
                            onClick={() => addItemToCart(item)}
                          >
                            <i className="bi bi-plus-circle-fill"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {cartItems.items.length > 0 && <Cart />}
      </div>
    </div>
  );
}

export default RestrauntPage;
