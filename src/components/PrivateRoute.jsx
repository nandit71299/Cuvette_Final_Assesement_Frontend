import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setIsAuthenticated } from "../redux/authSlice"; // Import the action to update authentication status
import { setUser } from "../redux/userSlice"; // Import the action to update user data
import { verifyToken } from "../utils/apiUtil"; // Import the verifyToken function

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const checkToken = async () => {
        const response = await verifyToken(token);

        if (response.success) {
          // If the token is valid, update the authentication state
          dispatch(setIsAuthenticated(true));

          // Dispatch user data (user information such as name, email, etc.)
          dispatch(setUser({ user: response.user }));
        } else {
          // If the token is invalid, reset authentication state and remove token
          dispatch(setIsAuthenticated(false));
          localStorage.removeItem("token");
          navigate("/login");
        }

        setLoading(false);
      };

      checkToken();
    } else {
      // If no token is found, mark the user as not authenticated and redirect to login
      dispatch(setIsAuthenticated(false));
      setLoading(false);
      navigate("/login");
    }
  }, [dispatch, navigate]);

  if (loading) {
    return <div>Loading...</div>; // You can add a spinner or custom loading UI
  }

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
