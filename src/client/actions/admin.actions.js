import Axios from "axios";
import {NOTIFICATIONS} from "./types";

export const updateListing = (updateData) => () => {
	Axios
	.post("/admin/update", updateData)
	.catch(err => {
		console.log("Error while accepting listing: ", updateData);
		console.log(err);
	});
}

export const getNotifications = (criteria) => dispatch => {
	Axios
	.post("/admin/notification", criteria)
	.then(res => {
		dispatch(notify(res.data));
	})
	.catch(err => {
		console.log("Error while getting notifications: ", criteria);
		console.log(err);
	});
}

export const notify = data => {
	return {
	  	type: NOTIFICATIONS,
	  	payload: data
	};
};