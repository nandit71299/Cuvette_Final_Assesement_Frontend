import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      {/* <div style={{ display: "flex", flexWrap: "wrap" }}> */}
      <div className={styles.logoContainer}>
        <img src="https://s3-alpha-sig.figma.com/img/c323/e614/5fe44fe9aa4ff0011347ab73c5d6358d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oy4PEg3q-kV82AfbHmkKfKm418UHbAjR61Rh3mH9p~RsoHIyBRTZxLyssrOOFQLEQHjQqfqxbA2eZtDbhKtmimbaDFIGeN3MknNaVKjvOgsm60CIDgtChvY6F5SNa~PfcDwzNvhhzUuBoST1BzcRa2qCuGe8SJ7mY~YEhrHFLx9l0ZV4ftOxy9bgo~XZXT2dOCg~SCh3OSZdUSWUo0rruD9qdJgGiwKbgBAo8hNHb3VBecsCUDVuIWTNZM--mDa5KRHxiEH2yX6ZiZ0AUKNX9m6PHFiQIW6XRnfu2~2aopdGjp3LvlXUgQREC0hCrt79koNEsHjJCf82XaGCY0Uobw__" />
        <div className={styles.downloadImagesContainer}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/640px-Download_on_the_App_Store_Badge.svg.png"
            alt=""
            className={styles.appStoreBadge}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
            alt=""
            className={styles.playStoreBadge}
          />
        </div>
        <div>
          <p className={styles.companyRegistration}>
            Company # 490039-445, Registered with House of companies.
          </p>
        </div>
      </div>
      <div className={styles.subscriptionContainer}>
        <h3 className={styles.dealsMessage}>
          Get Exclusive Deals in your Inbox
        </h3>
        <div className={styles.subscriptionInputContainer}>
          <input type="email" placeholder="youremail@gmai.com" />
          <button>Subscribe</button>
        </div>
        <div className={styles.emailPolicyMessage}>
          we wont spam, read our
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            email policy
          </span>
        </div>
        <div className={styles.socialIconsContainer}>
          <img
            src="https://www.figma.com/file/r3U8N2bNqaeWAVlonvj8fE/image/1029ebbdc2fcc530c8dd76c857b46d89a0169ca9"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/a686/a5c9/99f0710ab2adfcc576d7e1ab76ad9000?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S44kMj09dnmP2gKl4dhx9894cDW5kJFcdxOJD4FzqzpaUowDKcN-WXY9lUY8LDr9kasBKIcPEAn1wietwBWVKUIlFPxdRPKXmRaJaCZOi0WR1DqIbhdXwVSPyoIaZMMRym1T8onvJj7a0uUnMIS-p7S9JK4xL7eYY3X8stCLtZQ2izgvskLEeYbPYT3FhOQHpWBSrPAnHC40hVKs4dBp8Bra2rUfr1-qaWd87L52k3wvWUUKDxYHGtX5qFGGZj2YI82rlOLMEZF5AYo-QccpJ6spdFXEmnwjQS8JEqd4Rew6vmHLFExnkvK52jktvxjVMIrI-3MvI-xm9WejurW0~Q__"
            alt=""
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/3c63/27f0/738689ba2fea2973454a5fab7b84b44a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OwWM-1imHGVVbgRX9G-BoMZxI14NOaCZo1S-vb5FFOjrhZrVputWNfqEYBei~DFI2FbdfkTa~g7b1bSi6v0i20I8po--xUtB5KWnRmqVt7ITj6pWkI2uxDV~3aZ1rHHiZA7GFzftGBJQcHgX8~Br~S94ZZvr--V7M68QKL1zLeLo6S0QIVYrwe9R3xL27ZuZ6nnRCWZN3d9ThuMjDjerIDt-IiWNJLNKSyV41BDMXTaLP1iaF5Tnm5Or5pecq~74wSzj9Cx6yl1qzkMnP8atlbcLZCOJOCCzEFkecY83FGpk5-6c49ivVlKCgXVJv~3wM~PvIEHdZeT9a9I~Ml0JaA__"
            alt=""
          />
          <img
            src="https://www.figma.com/file/r3U8N2bNqaeWAVlonvj8fE/image/ea3fd0ea1bc023b83de8415b6529cd42075fa995"
            alt=""
          />
        </div>
      </div>
      {/* </div> */}
      <div className={styles.linksContainer}>
        <div>
          <ul>
            <li style={{ fontWeight: "bold", textDecoration: "none" }}>
              Legal Pages
            </li>
            <li>About Us</li>
            <li>Press</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <ul style={{ listStyle: "none" }}>
            <li style={{ fontWeight: "bold", textDecoration: "none" }}>
              Legal Pages
            </li>
            <li>Get help</li>
            <li>Add your restaurant</li>
            <li>Sign up to deliver</li>
            <li>Create a business account</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
