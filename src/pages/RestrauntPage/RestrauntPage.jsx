import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getItems, getRestraunt } from "../../utils/apiUtil";
import { toast, ToastContainer } from "react-toastify";
import { Footer, Header, MobileCartMenu, OfferBanner } from "../../components";
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
import { addToCart } from "../../utils/apiUtil";
import ResOperationalTimings from "../../components/RestrauntPage/ ResOperationalTimings";
import ResMap from "./ResMap";
import CustomerReviews from "../../components/RestrauntPage/CustomerReviews";
import PopularRestaurants from "../../components/HomePage/PopularRestaurants";

function RestrauntPage() {
  const isMobile = useIsMobile();
  const [params] = useSearchParams();
  const restrauntId = params.get("id");
  const token = localStorage.getItem("token");
  const [data, setData] = useState({});
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [itemsData, setItemsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Added state for search query

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

  const addItemToCart = async (item) => {
    if (!Array.isArray(cartItems.items)) {
      console.error("cartItems.items is not an array:", cartItems.items);
      return;
    }

    const existingItemIndex = cartItems.items.findIndex(
      (cartItem) => cartItem._id === item._id
    );

    let updatedItems = [];

    if (existingItemIndex !== -1) {
      updatedItems = cartItems.items.map((cartItem) => {
        if (cartItem._id === item._id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });
    } else {
      updatedItems = [...cartItems.items, { ...item, quantity: 1 }];
    }

    const updatedSubTotal = updatedItems.reduce(
      (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
      0
    );

    const updatedTotal = updatedSubTotal + cartItems.deliveryFee;

    dispatch(
      updateCart({
        items: updatedItems,
        subTotal: updatedSubTotal,
        total: updatedTotal,
        deliveryFee: cartItems.deliveryFee,
      })
    );

    try {
      const response = await addToCart({
        itemId: item._id,
        token,
      });

      if (response.success) {
        dispatch(
          updateCart({
            cartId: response.cartId,
            items: response.cart.item,
            subTotal: response.cart.totalPrice,
            total: response.cart.totalPrice + cartItems.deliveryFee,
            deliveryFee: cartItems.deliveryFee,
          })
        );
        toast.success("Item added to cart!");
      } else {
        toast.error(response.message || "Failed to add item to cart.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Error adding item to cart.");
    }
  };

  const groupedItems = itemsData.reduce((acc, item) => {
    const category = item.category || "Others";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  // Filter items based on search query
  const filteredItems = Object.keys(groupedItems).reduce((acc, category) => {
    const filteredCategoryItems = groupedItems[category].filter((item) => {
      const itemTitle = item.title.toLowerCase();
      const itemDescription = item.description.toLowerCase();
      const query = searchQuery.toLowerCase();
      return itemTitle.includes(query) || itemDescription.includes(query);
    });

    if (filteredCategoryItems.length > 0) {
      acc[category] = filteredCategoryItems;
    }
    return acc;
  }, {});

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
        <ResInfo data={data} assets={assets} />
      </div>

      {!isMobile && (
        <div className={`${styles.searchContainer} safeArea`}>
          <h3>All Offers from {data.name}</h3>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search from menu..."
            value={searchQuery} // Bind search query to the input
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
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
            {Object.keys(filteredItems).map((category) => (
              <div key={category} className={styles.categorySection}>
                <h3 className={styles.categoryTitle}>{category}</h3>
                <div className={styles.itemList}>
                  {filteredItems[category].map((item) => (
                    <div
                      className={styles.itemCardWrapperContainer}
                      key={item._id}
                    >
                      <div className={styles.itemCard}>
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

        {!isMobile && cartItems.items.length > 0 && <Cart />}
      </div>
      {!isMobile && (
        <div className="safeArea">
          <ResOperationalTimings website={data.website} phone={data.phone} />
        </div>
      )}

      <div style={{ padding: isMobile ? "15px" : "40px" }}>
        <ResMap
          lat={data.latitude}
          long={data.longitude}
          address={data.address}
          phone={data.phone}
          website={data.website}
          resName={data.name}
        />
      </div>
      <div>
        <CustomerReviews />
      </div>
      <div style={{ marginTop: isMobile ? "" : "20px" }}>
        <PopularRestaurants title="Similiar Restraunts" />
      </div>
      <Footer />
    </div>
  );
}

export default RestrauntPage;
