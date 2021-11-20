import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    document.querySelector('.main__content').scrollTo(0, 0);
  }, [location]);

  return null
};

export default ScrollToTop;