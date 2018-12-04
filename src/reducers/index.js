import { combineReducers } from "redux";
import subwayReducer from "./subwayReducer";

export default combineReducers({
  subway: subwayReducer
});
