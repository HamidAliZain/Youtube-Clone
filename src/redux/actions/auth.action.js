import auth from "../../firebase";
import firebase from "firebase/app";
import {
  Laod_Profile,
  Login_Failed,
  Login_Request,
  Login_Sucess,
  Log_Out,
} from "../reducers/actionType";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: Login_Request,
    });

    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);

    const accessToken = res.credential.accessToken;
    const profile = {
      name: res.additionalUserInfo.profile.given_name,
      email: res.additionalUserInfo.profile.email,
    };
    sessionStorage.setItem("ytc=acessToke", accessToken);
    sessionStorage.setItem("user", JSON.stringify(profile));

    dispatch({
      type: Login_Sucess,
      payload: accessToken,
    });

    dispatch({
      type: Laod_Profile,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);

    dispatch({
      type: Login_Failed,
      payload: error.message,
    });
  }
};

export  const log_out =() =>async dispatch => {
  await auth.signOut()
  dispatch({
    type:Log_Out
  })
  sessionStorage.removeItem("ytc-acess-toke")
  sessionStorage.removeItem("user")
}  

