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
          <img
            src="https://s3-alpha-sig.figma.com/img/be11/353a/02f4b1476ff7565a60acdccf6f4f0dce?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oane5q0bqrP7jffE2qGaWnS4TEgp4fFqUd8zFSsi4dPSqz7ozQ5Q9gCA2Lx6V~otCJpmgCUdvWVlMYQY60VWufaiA13EdJs43LurI97NrmudDkyG3sBdfYEZQHGTB4ft4G0hjgcqdSZ5p~RHeY6BRMFR594O7o5W~4jAqshg2K4L9JlpZtuYRlc3wL8EFf1a9waJ3n6DeFdR0q2yrNMbGpX~8pDb0g7NLp8MM7xxs1jtlz6TZ1GXvnw4zlscWfz1gQ39fy3-x-ODTzlG1vfQOxtiHD97wJBACFMOCIkZWTTos8GBG1-KCxfeycm5-5hQHDQI2-KFPnGdaf5Ft0hG4w__"
            alt=""
          />
        </aside>
      </main>
      <Footer />
    </div>
  );
}

export default LoginSignup;
