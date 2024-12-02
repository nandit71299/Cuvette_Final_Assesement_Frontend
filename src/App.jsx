import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import "react-toastify/dist/ReactToastify.css"; // Import the default toast styles
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/RestrauntPage/RestrauntPage";
import ViewOrder from "./pages/ViewOrderPage/ViewOrder";
import PaymentPage from "./pages/PaymentPage/Payment";
import OrderSuccessful from "./pages/OrderSuccessful/OrderSuccessful";
import { ToastContainer } from "react-toastify"; // Import ToastContainer

function App() {
  return (
    <Provider store={store}>
      <Loader />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/restraunt"
            element={
              <PrivateRoute>
                <ProductPage />
              </PrivateRoute>
            }
          />
          <Route path="/view-order" element={<ViewOrder />} />
          <Route
            path="/payment"
            element={
              <PrivateRoute>
                <PaymentPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/order-successful"
            element={
              <PrivateRoute>
                <OrderSuccessful />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* Global ToastContainer for toasts */}
      <ToastContainer theme="dark" />
    </Provider>
  );
}

// Create a separate Loader component that uses useSelector
function Loader() {
  const { isLoading } = useSelector((state) => state.uiState); // Access the loading state from the Redux store

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  return null; // Return null if not loading
}

export default App;
