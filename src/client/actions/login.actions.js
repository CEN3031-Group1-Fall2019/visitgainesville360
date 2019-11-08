import axios from "axios";
import setLoginToken from "../utils/setLoginToken";
import jwt_decode from "jwt-decode";
import {
	GET_ERROR,
	GET_USER,
	SET_USER
} from "./types";

export const registerUser = (userData, history) => dispatch => {
	axios
		.post("/users/register", userData)
		.then(res => history.push("/login"))
		.catch(err => dispatch({
        	type: GET_ERROR,
        	payload: err.response.data })
    );
};

export const loginUser = userData => dispatch => {
	console.log("axios", userData);
	axios
    	.post("/api/users/login", userData)
    	.then(res => {
      		const { token } = res.data;
      		localStorage.setItem("jwtToken", token);
      		setLoginToken(token);
      		const decoded = jwt_decode(token);
			dispatch(setUser(decoded));
		})
    	.catch(err => dispatch({
        		type: GET_ERROR,
        		payload: err.response.data })
    );
}

export const setUser = decoded => {
	console.log("Setting user");
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