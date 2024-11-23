import React from "react";
import styles from "./Categories.module.css";
import { categoriesData } from "../../data/data";

function Categories() {
  return (
    <div className="safeArea flex-container flex-column">
      <div>
        <h1>Order.uk Popular Categories 🤩</h1>
      </div>
      <div>
        <div
          className={`flex-container justify-content-between gap-05 ${styles.categoryCardsContainer}`}
        >
          {categoriesData.map((category) => (
            <div
              key={category.id}
              className={`${styles.categoryCard} flex-container flex-column gap-05`}
              style={{ cursor: "pointer" }}
            >
              <img
                src={category.image}
                className={styles.categoryImage}
                alt=""
              />
              <p className={styles.categoryName}>{category.name}</p>
              <p className={styles.noOfRestruants}>
                {category.noOfRestraunts} Restraunts
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
