import React from "react";
import styles from "./OfferBanner.module.css";

function OfferBanner() {
  return (
    <div
      className={`${styles.offerBannerContainer} flex-container align-items-center`}
    >
      <div>
        <div className="flex-container gap-05" style={{ paddingLeft: "10px" }}>
          <span>🌟</span>
          <span className={styles.offerMessage}>
            {" "}
            Get 5% Off your first order,{" "}
            <span className={styles.offerMessageCode}>Promo: ORDER5</span>
          </span>
        </div>
      </div>
      <div
        className="flex-container gap-2 ml-auto align-items-center"
        style={{ height: "100%" }}
      >
        <div className="flex-container justify-content-center align-items-center gap-05">
          <img
            src="https://s3-alpha-sig.figma.com/img/f277/15bb/6e6ab9f0bcb3a0b07191c3bf52ea4a72?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IYMFYjrdXk~PJatvluJoFOjU9QHOaAEJMu~OeeN7z4NL0JBDy7OFkkZ-Ol2nvyrORg7GqUznmExRTP8H73Z8Ur3OghLaabT0buAUKrGk7auvts8DTnJYH94lFgE1dFdlnpFUjw4tD7XmT~rczVpTXWpAurv1Q4CxSkZ3k9pqy8BEtucK3qfBlXg-nbfX41spKFg7YBNCUzM97zVE2jrc6YfHR5Y-kRQZmmSkloyZhkO6owauexocnylMnNNT6pw6q8kDIqcdFLn8QTUjaQxj2hlNn237Sl-echGW2o7YccPg6OLVJuMo3J9Nhd01n83ykOQCNw~JGsNluyjskBJPUg__"
            alt=""
            className={`${styles.pinIcon}`}
          />

          <p className={styles.userLocation}>User's Location </p>
          <span className={styles.changeLocationBtn}>
            <a href="#" className={styles.changeLocationLink}>
              Change Location
            </a>
          </span>
        </div>

        <div className={styles.cartDetailsContainer}>
          <div className={styles.cartDetails}>
            <img
              src="https://s3-alpha-sig.figma.com/img/d065/be83/51d92dacc580f56cb51dc1f8d10aa7a5?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mn3rZx1Ig53W6LGShMhHSXG7D3EaBlaon~jpOBGxvwZV6TBBZwskqHyiq6wKZrw~RQ95rQfNNq1vz7OVnnIue~DrDFKKq81nW73IgHSZwuINxCDyAc9nII---52nQMta4VchCy6FsgHSbzRYkMWnyMPGaDN~NsjR9vwOjcGjwmUhVoAtTvw~8IotyQmF-PLtlPCRuRUcRyE-MszWE7BeDYBh7b6R74BrQhDXc~j09FC4OxDOhmt-JckC5Mx~SqVUPPbug1ZVA~sbHEr-5oqPPXDZ47eT1Bvo3dQn919qYaPUBcvo2cFXZck1PUasT9IAfH8CIOy7YE2Hk8siYKwUbw__"
              className={styles.cartIcon}
            />
            <p className={`${styles.myCartTitle} textWhite`}>My Cart</p>
          </div>
          <div className={styles.emptyBox}></div>
          <div className={styles.arrowDownContainer}>
            <img
              className={styles.arrowDown}
              src="https://s3-alpha-sig.figma.com/img/c9d5/2bb3/282b0d54128a8304af673e8f689a2fa6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PjZfClMQChmr8iSBvVnnBc1YhPlbG235mmY7A1A-z5s8bpXJ8VAVxFOadLvAdjusbc39G5qZHsNtuUEQloFJUohlox436YE9Ak5jYTZ1vIYRQLKikFJ4RaTvP-uwvjWkQ4kshFhwv~bk~gT~E9r~XE0ODtSFLE3LBXoGPtLp63KQQ8zY2DG2lwr-AzImBejeNAidfJR7q3o6q0vW2CcsWxP0bxkZERZcPNAg3icqqm9PMwfOccH2x9PmozcrsfDVHcHfmtn14SqlAe8jAZmxJyqUYWH6xfjnbtWifjYeoEgB1iWLqLOKC05i3Dc1XHY-BEG1KrafNDbtL243-Z5P1Q__"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferBanner;
