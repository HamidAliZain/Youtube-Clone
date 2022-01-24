import "./_login.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth.action";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  const history = useNavigate();
  useEffect(() => {
    if (accessToken) {
      history('/')
    }
  }, [accessToken,history]);

  return (
    <div className="login">
      <div className="login_Container">
        <img
          src="https://www.freepnglogos.com/uploads/youtube-logo-png-images-0.png"
          alt=""
        />
        <button onClick={handleLogin}>Login With Google</button>
        <p>This is made for Practice</p>
      </div>
    </div>
  );
};
