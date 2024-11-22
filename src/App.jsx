import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import "react-toastify/dist/ReactToastify.css";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import HomePage from "./pages/HomePage/HomePage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      {/* Use useSelector inside the provider to access the Redux state */}
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
        </Routes>
      </BrowserRouter>
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
