import {NOTIFICATIONS} from "../actions/types";
import {LOCATION_CHANGE} from 'react-router-redux';

const initialState = {
	currNotifications: 0,
	isNotified: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case NOTIFICATIONS:
			return {
				...state,
				currNotifications: action.payload,
				isNotified: true
			};
		case LOCATION_CHANGE:
			return {
				...state,
				currNotifications: 0,
				isNotified: false
			}
	  	default:
			return state;
	}
}