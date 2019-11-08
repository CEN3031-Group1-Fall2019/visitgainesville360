import Axios from "axios";
import setLoginToken from "../utils/setLoginToken";
import jwt_decode from "jwt-decode";
import {
	GET_ERROR,
	GET_USER,
	SET_USER
} from "./types";

export const registerUser = (userData, history) => dispatch => {
	Axios
		.post("/users/register", userData)
		.then(res => history.push("/login"))
		.catch(err => dispatch({
        	type: GET_ERROR,
			payload: JSON.stringify(err.response.data)
		})
    );
};

export const loginUser = userData => dispatch => {
	Axios
    	.post("/users/login", userData)
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