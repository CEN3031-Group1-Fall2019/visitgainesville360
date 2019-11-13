import {
	POST_ALL_LISTINGS
} from "../actions/types";

const initialState = {
	browse: true,
	browseListing: {},
	isPosted: false
};

export default function(state = initialState, action) {
	console.log("reducing", action.payload);
	switch (action.type) {
	  	case POST_ALL_LISTINGS:
			return {
				...state,
				browse: true,
				browseListing: action.payload,
				isPosted: true
			};
	  	default:
			return state;
	}
}