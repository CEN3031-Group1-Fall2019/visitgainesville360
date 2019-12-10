import {ADD_IMAGE} from "./types";
import Axios from "axios";

export const addImage = imageData => dispatch => {
	Axios
		.post("/listings/image", imageData)
    	.then(res => dispatch({
				type: ADD_IMAGE,
				payload: res.data
			}).catch(err => {
				console.log("Error while adding image", err);
			})
		)
		.catch(err => {
			console.log(err);
		});
};

export const createListing = (listingData) => () => {
	Axios
	.post("/listings/create", listingData)
	.catch(err => {
		console.log("Error during listing creation: ", listingData);
		console.log(err);
	});
};

export const createTags = (tagData) => () => {
	Axios
	.post("/listings/tag", tagData)
	.catch(err => {
		console.log("Error during listing creation: ", tagData);
		console.log(err);
	});
};
