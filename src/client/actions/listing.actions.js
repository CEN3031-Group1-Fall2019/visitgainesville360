import Axios from "axios";
import {
	POST_ALL_LISTINGS
} from "./types";

export const createListing = (listingData) => () => {
	console.log("Axios to createlisting");
	Axios
	.post("/listings/create", listingData)
	.catch(err => {
		console.log("Error during listing creation: ", listingData);
		console.log(err);
	});
};

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