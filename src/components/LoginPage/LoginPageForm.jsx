import React from "react";
import styles from "../../pages/LoginSignUpPage/LoginSignUpPage.module.css"; // Make sure this path is correct

function LoginPageForm({ isSignUp, formValues, onSubmit, onInputChange }) {
  return (
    <div style={{ display: "flex", gap: "30px", flexDirection: "column" }}>
      <form
        onSubmit={(e) => onSubmit(formValues, e)}
        style={{ display: "flex", gap: "30px", flexDirection: "column" }}
      >
        <div className={styles.logoContainer}>
          <img
            src="https://s3-alpha-sig.figma.com/img/c323/e614/5fe44fe9aa4ff0011347ab73c5d6358d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oy4PEg3q-kV82AfbHmkKfKm418UHbAjR61Rh3mH9p~RsoHIyBRTZxLyssrOOFQLEQHjQqfqxbA2eZtDbhKtmimbaDFIGeN3MknNaVKjvOgsm60CIDgtChvY6F5SNa~PfcDwzNvhhzUuBoST1BzcRa2qCuGe8SJ7mY~YEhrHFLx9l0ZV4ftOxy9bgo~XZXT2dOCg~SCh3OSZdUSWUo0rruD9qdJgGiwKbgBAo8hNHb3VBecsCUDVuIWTNZM--mDa5KRHxiEH2yX6ZiZ0AUKNX9m6PHFiQIW6XRnfu2~2aopdGjp3LvlXUgQREC0hCrt79koNEsHjJCf82XaGCY0Uobw__"
            alt=""
          />
        </div>
        <div className={styles.formContentContainer}>
          <div>
            <h1 className={styles.formContent_WelcomeText}>
              {isSignUp ? "Create your account 👋" : "Welcome Back 👋"}
            </h1>
            <p className={styles.formContent_WelcomeMessage}>
              {isSignUp
                ? "Join us today and start ordering!"
                : "Today is a new day. It's your day. You shape it. Sign in to start ordering."}
            </p>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={styles.inputLabels}>
              Email
            </label>
            <br />
            <input
              type="text"
              placeholder="Example@email.com"
              className={styles.inputElements}
              name="email"
              value={formValues.email}
              onChange={onInputChange}
            />
          </div>

          {/* Name - Only for Sign Up */}
          {isSignUp && (
            <div>
              <label htmlFor="name" className={styles.inputLabels}>
                Name
              </label>
              <br />
              <input
                type="text"
                placeholder="John Doe"
                className={styles.inputElements}
                name="name"
                value={formValues.name}
                onChange={onInputChange}
              />
            </div>
          )}

          {/* Phone - Only for Sign Up */}
          {isSignUp && (
            <div>
              <label htmlFor="phone" className={styles.inputLabels}>
                Phone Number
              </label>
              <br />
              <input
                type="text"
                placeholder="(123) 456-7890"
                className={styles.inputElements}
                name="phone"
                value={formValues.phone}
                onChange={onInputChange}
              />
            </div>
          )}

          {/* Password */}
          <div>
            <label htmlFor="password" className={styles.inputLabels}>
              Password
            </label>
            <br />
            <input
              type="password"
              placeholder="At least 8 characters"
              className={styles.inputElements}
              name="password"
              value={formValues.password}
              onChange={onInputChange}
            />
          </div>

          <div>
            <button type="submit" className={styles.submitButton}>
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </form>

      {/* Toggle Link */}
      <div className={styles.signupMessage}>
        {isSignUp ? (
          <>
            Already have an account?{" "}
            <a
              href="/login"
              style={{
                textDecoration: "none",
                color: "#FC8A06",
              }}
            >
              Sign In
            </a>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <a
              href="/signup"
              style={{
                textDecoration: "none",
                color: "#FC8A06",
              }}
            >
              Sign Up
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginPageForm;
