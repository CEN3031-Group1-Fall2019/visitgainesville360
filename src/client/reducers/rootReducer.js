import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import listingReducer from "./listingReducer";

export default combineReducers ({
  	login: loginReducer,
	listing: listingReducer
});