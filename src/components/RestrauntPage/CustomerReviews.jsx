import React, { useRef } from "react";
import styles from "./CustomerReviews.module.css";

const CustomerReviews = () => {
  const reviewsWrapperRef = useRef(null);

  const scrollLeft = () => {
    reviewsWrapperRef.current.scrollBy({
      left: -300, // Adjust based on the card width
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    reviewsWrapperRef.current.scrollBy({
      left: 300, // Adjust based on the card width
      behavior: "smooth",
    });
  };

  const reviews = [
    {
      id: 1,
      name: "St Glx",
      location: "South London",
      date: "24th September, 2023",
      rating: 5,
      review:
        "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
      image: "https://randomuser.me/api/portraits/women/16.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      location: "North London",
      date: "15th October, 2023",
      rating: 4,
      review:
        "The food was delicious, and the service was quick. However, the seating area could have been cleaner.",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      id: 3,
      name: "Jane Doe",
      location: "North London",
      date: "15th October, 2023",
      rating: 4,
      review:
        "The food was delicious, and the service was quick. However, the seating area could have been cleaner.",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      id: 4,
      name: "Jane Doe",
      location: "North London",
      date: "15th October, 2023",
      rating: 4,
      review:
        "The food was delicious, and the service was quick. However, the seating area could have been cleaner.",
      image: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
      id: 5,
      name: "Jane Doe",
      location: "North London",
      date: "15th October, 2023",
      rating: 4,
      review:
        "The food was delicious, and the service was quick. However, the seating area could have been cleaner.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 6,
      name: "Jane Doe",
      location: "North London",
      date: "15th October, 2023",
      rating: 4,
      review:
        "The food was delicious, and the service was quick. However, the seating area could have been cleaner.",
      image: "https://randomuser.me/api/portraits/men/84.jpg",
    },
    // Add more reviews as needed
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h2>Customer Reviews</h2>
        <div className={styles.navigation}>
          <button className={styles.navButton} onClick={scrollLeft}>
            ❮
          </button>
          <button className={styles.navButton} onClick={scrollRight}>
            ❯
          </button>
        </div>
      </div>
      <div className={styles.reviewsWrapper} ref={reviewsWrapperRef}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div
              style={{
                display: "flex",
                width: "100%",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <div className={styles.profile}>
                <img
                  src={review.image}
                  alt={`${review.name}'s profile`}
                  className={styles.profileImage}
                />
              </div>
              <div className="flex-container justify-content-between w-100 align-items-center">
                <div className={styles.profileDetails}>
                  <h3 className={styles.name}>{review.name}</h3>
                  <p className={styles.location}>{review.location}</p>
                </div>
                <div className={styles.dateAndRating}>
                  <p className={styles.rating}>{"★".repeat(review.rating)}</p>
                  <div className="flex-container gap-05 align-items-center justify-content-end">
                    <i className="bi bi-clock-history"></i>
                    <p className={styles.date}>{review.date}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className={styles.reviewText}>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.averageReviewContainer}>
        <div className={styles.averageReviewCard}>
          <h1>3.4</h1>
          <div>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
          <p style={{ color: "gray" }}>1243 Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
