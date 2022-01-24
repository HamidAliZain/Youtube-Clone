import {
  Laod_Profile,
  Login_Failed,
  Login_Request,
  Login_Sucess,
  Log_Out,
} from "../reducers/actionType";

const initsialState = {
  accessToken: sessionStorage.getItem("ytc-acsess")? sessionStorage.getItem("ytc-acsess"):null,
  user:  sessionStorage.getItem("ytc-acsess")?JSON.parse (sessionStorage.getItem("ytc-acsess")):null,
  loading: false,
};

export const authReducer = (prevState = initsialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Login_Request:
      return {
        ...prevState,
        loading: true,
      };

    case Login_Sucess:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };

    case Login_Failed:
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };

    case Laod_Profile:
      return {
        ...prevState,
        user: payload,
      };

case Log_Out:
  return{
    ...prevState,
    accessToken:null,
    user:null
  }
      default:
      return prevState;
  }
    };
