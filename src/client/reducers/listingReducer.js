import {ADD_IMAGE, GET_LISTING, BROWSE_LISTINGS} from "../actions/types";

const initialState = {
	listingCount: 0,
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
		case GET_LISTING:
				return {
					...state,
					listingCount: 1,
					browseListing: action.payload,
					isPosted: true
				};
	  	case BROWSE_LISTINGS:
			return {
				...state,
				listingCount: action.payload.count,
				browseListing: action.payload,
				isPosted: true
			};
	  	default:
			return state;
	}
}