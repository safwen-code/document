import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import reducerdocument from"./reducerdocument"
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  document:reducerdocument
});