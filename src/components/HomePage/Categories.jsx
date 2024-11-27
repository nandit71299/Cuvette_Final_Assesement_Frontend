import React from "react";
import styles from "./Categories.module.css";
import { categoriesData } from "../../data/data";

function Categories() {
  return (
    <div
      className={`safeArea flex-container flex-column ${styles.mainContainer}`}
    >
      <div>
        <h1 className={styles.containerTitle}>
          Order.uk Popular Categories 🤩
        </h1>
      </div>
      <div>
        <div className={styles.categoryCardsContainer}>
          {categoriesData.map((category) => (
            <div
              key={category.id}
              className={styles.categoryCard}
              style={{ cursor: "pointer" }}
            >
              <img
                src={category.image}
                className={styles.categoryImage}
                alt={category.name}
              />
              <p className={styles.categoryName}>{category.name}</p>
              <p className={styles.noOfRestruants}>
                {category.noOfRestraunts} Restaurants
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
