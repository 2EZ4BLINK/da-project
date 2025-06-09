import { combineReducers } from "redux";
import userIdentityReducer from "@/redux/reducer";

const allReducer = combineReducers({
  userIdentity: userIdentityReducer,
});

export default allReducer;
