import { LOGIN_ERROR, LOGIN, LOG_OUT } from "./actionTypes";

const checkExistedUser = (userParams) => {
  if (
    userParams.name.toLowerCase() !== "admin" ||
    userParams.password !== "12345"
  ) {
    return false;
  }

  return true;
};

export const login = (params, cb) => {
  return (dispatch) => {
    if (checkExistedUser(params)) {
      dispatch({
        type: LOGIN,
        payload: {
          name: params.name,
          isAuth: true,
        },
      });
      cb();
    } else {
      dispatch({
        type: LOGIN_ERROR,
        payload: {
          errorMessage: "Username or password is incorrect",
          isAuth: false,
        },
        error: true,
      });
    }
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch({
      type: LOG_OUT,
      payload: {
        isAuth: false,
      },
    });
  };
};
