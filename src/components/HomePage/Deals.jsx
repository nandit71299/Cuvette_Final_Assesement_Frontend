import React, { useState } from "react";
import styles from "./Deals.module.css";
import useIsMobile from "../../utils/isMobile";
import { dealsData } from "../../data/data";
import Skeleton from "react-loading-skeleton"; // Import Skeleton

function Deals() {
  const isMobile = useIsMobile();
  const [selectedCategory, setSelectedCategory] = useState("vegan"); // State for the selected category

  // Handle the category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Update the selected category
  };

  // Filter the deals based on selectedCategory from all categories in dealsData
  const filteredDeals = dealsData
    .map((categoryData) => categoryData.category) // Extract categories array from each item
    .flat() // Flatten the array so that it's a single array of all deals
    .filter(
      (deal) => deal.name.toLowerCase() === selectedCategory.toLowerCase()
    );

  return (
    <div className="safeArea flex-container flex-column gap-1">
      <div className="flex-container justify-content-between">
        <div className="flex-container align-items-center">
          <h3 className={styles.dealTitle}>
            Up to -40% 🎊 Order.uk exclusive deals
          </h3>
        </div>

        {/* Category selection buttons for mobile and desktop */}
        <div className={styles.categoryButtonsContainer}>
          {isMobile ? (
            <select
              className="rounded-5 bg-primary"
              value={selectedCategory}
              onChange={(e) => handleCategorySelect(e.target.value)} // Handle change on mobile
            >
              <option value="vegan">Vegan</option>
              <option value="shushi">Shushi</option>
              <option value="Pizza & Fast Food">Pizza & Fast Food</option>
              <option value="others">Others</option>
            </select>
          ) : (
            <div
              className={`${styles.categoryButtonsContainer} flex-container justify-content-between`}
            >
              <button
                className={`rounded-5 textWhite ${
                  selectedCategory === "vegan" ? styles.selected : ""
                } bg-primary`}
                onClick={() => handleCategorySelect("vegan")}
              >
                Vegan
              </button>
              <button
                className={`rounded-5 textWhite ${
                  selectedCategory === "shushi" ? styles.selected : ""
                } bg-primary ${styles.categoryButtons}`}
                onClick={() => handleCategorySelect("shushi")}
              >
                Shushi
              </button>
              <button
                className={`rounded-5 textWhite ${
                  selectedCategory === "Pizza & Fast Food"
                    ? styles.selected
                    : ""
                } bg-primary`}
                onClick={() => handleCategorySelect("Pizza & Fast Food")}
              >
                Pizza & Fast Food
              </button>
              <button
                className={`rounded-5 textWhite ${
                  selectedCategory === "others" ? styles.selected : ""
                } bg-primary`}
                onClick={() => handleCategorySelect("others")}
              >
                Others
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Render the cards dynamically based on the filtered deals */}
      <div className={`flex-container gap-1 ${styles.dealsContainer}`}>
        {filteredDeals.map((deal) => (
          <div key={deal.id} className={`${styles.dealCard} rounded-2 card`}>
            <div className="position-relative">
              <div
                className={`${styles.cardGradientOverlay} position-absolute`}
              />
              <div className={`${styles.cardChip} position-absolute`}>
                {deal.restraunt.offer}
              </div>

              {/* Conditional rendering of image with Skeleton loader */}
              {deal.restraunt.image ? (
                <img
                  src={deal.restraunt.image}
                  alt={deal.restraunt.name}
                  className={`${styles.cardImage}`}
                />
              ) : (
                <Skeleton
                  height={"325px"} // Set the height to match your image dimensions
                  width={"100%"} // Set width to 100% to match the container's width
                  className={`${styles.cardImage}`}
                />
              )}

              {/* Restaurant Info: Move position based on mobile or desktop */}
              <div
                className={`${styles.restrauntInfo} ${
                  isMobile ? styles.mobileInfo : styles.desktopInfo
                }`}
              >
                <div className={styles.restrauntTitle}>Restaurant</div>
                <div
                  className={
                    !isMobile
                      ? `${styles.restrauntName} textWhite`
                      : `${styles.restrauntName}`
                  }
                >
                  {deal.restraunt.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deals;
