// utils/useIsMobile.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsMobile } from "../redux/uiStateSlice";

const useIsMobile = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.uiState.isMobile);

  useEffect(() => {
    const checkMobile = () => {
      // Check if window width is less than or equal to 768px
      const isMobileView = window.innerWidth <= 768;
      dispatch(setIsMobile(isMobileView));
    };

    // Call checkMobile initially and on resize
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [dispatch]);

  return isMobile;
};

export default useIsMobile;
