import React, { useEffect } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch to dispatch actions
import { setLoading } from "../../redux/uiStateSlice"; // Import your setLoading action
import { login } from "../../utils/apiUtil"; // Your login function
import { toast, ToastContainer } from "react-toastify";
import styles from "../LoginPage/LoginPage.module.css";
import LoginPageForm from "../../components/LoginPage/LoginPageForm";
import { Header, Footer } from "../../components/index";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate();
  const handleSubmit = async (formValues, e) => {
    e.preventDefault();

    // Set loading to true before making the API call
    dispatch(setLoading(true));

    const response = await login(formValues);

    // Set loading to false after the API call is complete
    dispatch(setLoading(false));

    if (!response.success) {
      toast.error(response.message);
    } else {
      localStorage.setItem("token", response.token);
      toast.success(response.message);
      dispatch(setLoading(true));
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 2000);
      navigate("/homepage"); // Redirect to the dashboard page after successful login
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setLoading(true));
      setTimeout(() => {
        dispatch(setLoading(false));
        navigate("/homepage");
      }, 2000);
    }
  }, []);
  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContainer}>
        <div className={styles.formContainer}>
          <LoginPageForm onSubmit={handleSubmit} />
        </div>
        <aside className={styles.imageContainer}>
          <img
            src="https://s3-alpha-sig.figma.com/img/be11/353a/02f4b1476ff7565a60acdccf6f4f0dce?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oane5q0bqrP7jffE2qGaWnS4TEgp4fFqUd8zFSsi4dPSqz7ozQ5Q9gCA2Lx6V~otCJpmgCUdvWVlMYQY60VWufaiA13EdJs43LurI97NrmudDkyG3sBdfYEZQHGTB4ft4G0hjgcqdSZ5p~RHeY6BRMFR594O7o5W~4jAqshg2K4L9JlpZtuYRlc3wL8EFf1a9waJ3n6DeFdR0q2yrNMbGpX~8pDb0g7NLp8MM7xxs1jtlz6TZ1GXvnw4zlscWfz1gQ39fy3-x-ODTzlG1vfQOxtiHD97wJBACFMOCIkZWTTos8GBG1-KCxfeycm5-5hQHDQI2-KFPnGdaf5Ft0hG4w__"
            alt=""
          />
        </aside>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
