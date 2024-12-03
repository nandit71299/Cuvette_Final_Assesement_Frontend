import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/uiStateSlice";
import { login, register, verifyToken } from "../../utils/apiUtil";
import { toast } from "react-toastify";
import styles from "../LoginSignUpPage/LoginSignUpPage.module.css"; // Reuse your styles
import { Footer } from "../../components/index";
import { useNavigate, useLocation } from "react-router-dom";
import { setIsAuthenticated } from "../../redux/authSlice";
import LoginPageForm from "../../components/LoginPage/LoginPageForm";
import { setUser } from "../../redux/userSlice";

function LoginSignup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const API_PORT = import.meta.env?.VITE_API_PORT || "";
  const API_URL = import.meta.env.VITE_API_URL;
  const apiUrl = `${API_URL}:${API_PORT}/api`;

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    name: "", // Only for signup
    phone: "", // Only for signup
  });

  const isSignUp = location.pathname === "/signup"; // Determine if it's signup page

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (formValues, e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    let response;

    if (isSignUp) {
      // If it's sign up, call register API
      response = await register({ ...formValues, country: "India" });
    } else {
      // If it's login, call login API
      response = await login(formValues);
    }

    dispatch(setLoading(false));
    dispatch(setUser({ user: response.user }));

    if (!response.success) {
      toast.error(response.message);
    } else {
      localStorage.setItem("token", response.token);
      toast.success(response.message);

      dispatch(setLoading(true));
      setTimeout(() => {
        dispatch(setLoading(false));
        dispatch(setIsAuthenticated(true));
        navigate("/"); // Redirect after successful login/signup
      }, 2000);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContainer}>
        <div className={styles.formContainer}>
          <LoginPageForm
            isSignUp={isSignUp}
            formValues={formValues}
            onSubmit={handleSubmit}
            onInputChange={handleInputChange}
          />
        </div>
        <aside className={styles.imageContainer}>
          <img alt="" src={`${apiUrl}/general/images/resBgImg.png`} />
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default LoginSignup;
