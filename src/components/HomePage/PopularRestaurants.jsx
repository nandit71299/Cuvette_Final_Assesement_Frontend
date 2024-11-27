import React, { useEffect, useState } from "react";
import styles from "./PopularRestaurants.module.css";
import { getAllRestraunts } from "../../utils/apiUtil";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function PopularRestaurants() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/login/${id}`);
  };

  // Fetch the data when the component mounts
  useEffect(() => {
    getAllRestraunts(token)
      .then((response) => {
        if (response.success) {
          setData(response.restraunts);
        } else {
          toast.error(response.message);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to fetch restraunts");
      });
  }, []);

  return (
    <div>
      <div className="safeArea flex-container flex-column">
        <h1 className={styles.containerTitle}>Popular Restaurants</h1>
        <div className={`${styles.restrauntsCardsContainer}`}>
          {data.map((restraunt) => {
            return (
              <div
                key={restraunt._id}
                className={`${styles.restrauntCard} flex-container flex-column gap-05`}
                onClick={() => handleClick(restraunt._id)}
              >
                <img
                  src={restraunt.image}
                  className={styles.restrauntImage}
                  alt=""
                />
                <div className={styles.restrauntInfo}>
                  <h3>{restraunt.name}</h3>
                  <p>{restraunt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default PopularRestaurants;
