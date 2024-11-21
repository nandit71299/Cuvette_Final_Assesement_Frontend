import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setIsAuthenticated } from "../redux/authSlice"; // Import the action to update authentication status
import { verifyToken } from "../utils/apiUtil"; // Import the verifyToken function

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch(); // Get dispatch function
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Access the isAuthenticated state from Redux store
  const [loading, setLoading] = useState(true); // Loading state to handle verification delay
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Verify the token if it's available
      const checkToken = async () => {
        const response = await verifyToken(token); // Call verifyToken to check if token is valid

        if (response.success) {
          // If token is valid, update Redux state to reflect authentication
          dispatch(setIsAuthenticated(true));
        } else {
          // If token is invalid, clear authentication state and remove token from localStorage
          dispatch(setIsAuthenticated(false));
          localStorage.removeItem("token"); // Remove invalid token from localStorage
          navigate("/login");
        }

        // Set loading to false after the token verification
        setLoading(false);
      };

      checkToken();
    } else {
      // If no token exists, set loading to false and update state to unauthenticated
      dispatch(setIsAuthenticated(false));
      setLoading(false);
      navigate("/login");
    }
  }, [dispatch]); // Run the effect once on mount

  // If we're still loading (waiting for token verification), show a loading state or spinner
  if (loading) {
    return <div>Loading...</div>; // Customize with a spinner or any loading UI component
  }

  // If the user is authenticated, render the children (protected content)
  if (isAuthenticated) {
    return children;
  }

  // If the user is not authenticated, redirect to the login page
  return <Navigate to="/" />;
};

export default PrivateRoute;
