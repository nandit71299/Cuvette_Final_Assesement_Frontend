import React, { useState } from "react";
import styles from "../../pages/LoginPage/LoginPage.module.css";

function LoginPageForm(props) {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(formValues, e);
  };

  return (
    <div style={{ display: "flex", gap: "30px", flexDirection: "column" }}>
      <form
        onSubmit={handleSubmit}
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
            <h1 className={styles.formContent_WelcomeText}>Welcome Back 👋</h1>
            <p className={styles.formContent_WelcomeMessage}>
              Today is a new day. It's your day. You shape it. Sign in to start
              ordering.
            </p>
          </div>
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
              onChange={(e) => {
                setFormValues({ ...formValues, email: e.target.value });
              }}
            />
          </div>
          <div>
            <label htmlFor="password" className={styles.inputLabels}>
              Password
            </label>
            <br />
            <input
              type="password"
              placeholder="At least 8 characters"
              className={styles.inputElements}
              value={formValues.password}
              onChange={(e) => {
                setFormValues({ ...formValues, password: e.target.value });
              }}
            />
          </div>

          <div>
            <button type="submit" className={styles.submitButton}>
              Sign In
            </button>
          </div>
        </div>
      </form>
      <div className={styles.signupMessage}>
        Don't you have an account?{" "}
        <a
          href="/register"
          style={{
            textDecoration: "none",
            color: "#FC8A06",
          }}
        >
          Sign up
        </a>
      </div>
    </div>
  );
}

export default LoginPageForm;
