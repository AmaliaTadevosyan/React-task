import { LOGIN, LOG_OUT, LOGIN_ERROR } from "../actions/actionTypes";
import { login, logOut } from "../actions/actions";

const initialState = {
  user: null,
  errorMessage: "",
  isAuth: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: {
          name: action.payload.username,
        },
        errorMessage: "",
        isAuth: true,
      };
    case LOG_OUT:
      return {
        ...state,
        user: null,
        errorMessage: "",
        isAuth: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        isAuth: false,
      };

    default:
      return state;
  }
}
