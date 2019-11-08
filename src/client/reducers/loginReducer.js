import {
	SET_USER,
	GET_USER
} from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
	isAuthenticated: false,
	user: {},
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
	  	case SET_USER:
			return {
		  		...state,
		  		isAuthenticated: !isEmpty(action.payload),
		  		user: action.payload };
	  	case GET_USER:
			return {
		  		...state,
		  		loading: true };
	  	default:
			return state;
	}
}