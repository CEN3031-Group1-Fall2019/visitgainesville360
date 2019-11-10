import Axios from "axios";
import setLoginToken from "../utils/setLoginToken";
import jwt_decode from "jwt-decode";
import {
	GET_ERROR,
	GET_USER,
	SET_USER
} from "./types";

export const displayUser = (req, history) => dispatch => {
	Axios
		.get("/users/display", req)
		.then(function() {
			console.log('response from display.actions.js\'s dispUser() :');
		})
		.catch(err => dispatch({
        	type: GET_ERROR,
			payload: JSON.stringify(err.response.data)
		})
    );
}
	
	
/*	
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

*/

