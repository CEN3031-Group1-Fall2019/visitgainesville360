import {
	SET_USER,
	GET_USER
} from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
	isLoggedIn: false,
	isAdmin: false,
	user: {},
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
	  	case SET_USER:
			return {
		  		...state,
				isLoggedIn: !isEmpty(action.payload),
				isAdmin: action.payload.isAdmin,
				user: action.payload
			};
	  	case GET_USER:
			return {
		  		...state,
				loading: true
			};
	  	default:
			return state;
	}
}