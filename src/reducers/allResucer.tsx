import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoginReducer from "./isLogin";

//reducerを一つにまとめる
const allReducer = combineReducers({
  counter: counterReducer,
  isLogin: isLoginReducer,
});
export default allReducer;
