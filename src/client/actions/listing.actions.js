<<<<<<< HEAD
import Axios from "axios";
import {
	POST_ALL_LISTINGS
} from "./types";

export const createListing = (listingData) => () => {
	console.log("Axios to createlisting");
=======
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
>>>>>>> d42cf3f7e16d23594dbff93c15dd964523fa84e6
	Axios
	.post("/listings/create", listingData)
	.catch(err => {
		console.log("Error during listing creation: ", listingData);
		console.log(err);
	});
};

<<<<<<< HEAD
export const getAllListings = () => dispatch => {
	console.log("Axios to createlisting");
	Axios
	.post("/listings/browse")
	.then(res => {
		console.log("GETTING RES", res);
		dispatch(postAllListings(res.data));
	})
	.catch(err => {
		console.log("Error getting all listings");
		console.log(err);
	});
};

export const postAllListings = allListings => {
	return {
		type: POST_ALL_LISTINGS,
	  	payload: allListings
	};
};
=======
export const createTags = (tagData) => () => {
	Axios
	.post("/listings/tag", tagData)
	.catch(err => {
		console.log("Error during listing creation: ", tagData);
		console.log(err);
	});
};
>>>>>>> d42cf3f7e16d23594dbff93c15dd964523fa84e6
