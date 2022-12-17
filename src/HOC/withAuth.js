import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useNavigate();

    const [verified, setVerified] = useState(false);

    useEffect(() => {
      checkToken();
      // eslint-disable-next-line
    }, []);

    const checkToken = async () => {
      const accessToken = localStorage.getItem("bti_mern_user_token");
      // if no accessToken was found,then we redirect to "/" page.
      if (!accessToken) {
        Router("/sign-in", { replace: true });
      } else {
        const isLoggedIn = () => {
          const token = localStorage.getItem("bti_mern_user_token");
          if (!token) {
            return false;
          }

          const decodedToken = jwt_decode(token);
          const currentTime = new Date().getTime() / 1000;

          return decodedToken.exp > currentTime;
        };

        if (isLoggedIn()) {
          setVerified(true);
        } else {
          // If the token was fraud we first remove Consultancy  from localStorage and then redirect to "/"
          localStorage.removeItem("bti_mern_user_token");
          localStorage.removeItem("bti_mern_local_user");
          Router("/sign-in", { replace: true });
        }
      }
    };

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
