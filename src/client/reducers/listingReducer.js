import {ADD_IMAGE, GET_LISTINGS, COMPLETE_LISTINGS} from "../actions/types";

const initialState = {
	browseListing: {},
	isPosted: false
};

export default function(state = initialState, action) {
	console.log("reducing", action.payload);
	switch (action.type) {
		case ADD_IMAGE:
			return {
				...state
			};
	  	case GET_LISTINGS:
			return {
				...state,
				browseListing: action.payload,
				isPosted: false
			};
		case COMPLETE_LISTINGS:
			return {
				isPosted: true
			};
	  	default:
			return state;
	}
}