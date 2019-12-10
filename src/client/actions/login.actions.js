import Axios from "axios";
import setLoginToken from "../utils/setLoginToken";
import jwt_decode from "jwt-decode";
import {GET_USER, SET_USER} from "./types";

export const registerUser = userData => dispatch => {
	Axios
		.post("/users/register", userData)
    	.then(res => {
      		const {token} = res.data;
      		localStorage.setItem("jwtToken", token);
      		setLoginToken(token);
      		const decoded = jwt_decode(token);
			dispatch(setUser(decoded));
		})
		.catch(err => {
			console.log("Error during registration for email: ", userData.email);
			console.log(err);
		});
};

export const loginUser = userData => dispatch => {
	Axios
    	.post("/users/login", userData)
    	.then(res => {
      		const {token} = res.data;
      		localStorage.setItem("jwtToken", token);
      		setLoginToken(token);
      		const decoded = jwt_decode(token);
			dispatch(setUser(decoded));
		})
    	.catch(err => {
			console.log("Error during login for email: ", userData.email);
			console.log(err);
		});
}

export const logoutUser = () => dispatch => {
  	localStorage.removeItem("jwtToken");
  	setLoginToken(false);
	dispatch(setUser({}));
	console.log("The user is logged out");
}

export const setUser = decoded => {
	return {
	  	type: SET_USER,
	  	payload: decoded
	};
};

export const setUserLoading = () => {
	return {
	  	type: GET_USER
	};
};