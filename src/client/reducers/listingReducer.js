import {ADD_IMAGE, GET_LISTINGS, GET_ITEM} from "../actions/types";
import {LOCATION_CHANGE} from 'react-router-redux';

const initialState = {
	currentListing: {},
	browseListing: {},
	isPosted: false
};

export default function(state = initialState, action) {
	switch (action.type) {
	  	case GET_LISTINGS:
			return {
				...state,
				browseListing: action.payload,
				isPosted: true
			};
		case GET_ITEM:
			return {
				...state,
				currentListing: action.payload,
				isPosted: true
			}
		case LOCATION_CHANGE:
			return {
				...state,
				currentListing: {},
				browseListing: {},
				isPosted: false
			}
	  	default:
			return state;
	}
}