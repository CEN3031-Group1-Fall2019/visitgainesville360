import { ADD_IMAGE, GET_LISTING, BROWSE_LISTINGS} from "./types";
import Axios from "axios";
import history from "../utils/setLoginToken"; 

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

export const createListing = listingData => {
	Axios
	.post("/listings/create", listingData)
	.catch(err => {
		console.log("Error during listing creation: ", listingData);
		console.log(err);
	});
};

export const getSingleListing = () => dispatch => {
	Axios
	.post("/listings/get")
	.then(res => dispatch({
			type: GET_LISTING,
			payload: res.data
		}).catch(err => {
			console.log("Error while adding image", err);
		}))
	.catch(err => {
		console.log("Error getting all listings");
		console.log(err);
	});
};

export const getAdminApproveListings = () => dispatch => {
	Axios
	.post("/listings/admin")
	.then(res => dispatch({
			type: BROWSE_LISTINGS,
			payload: res.data
		}).catch(err => {
			console.log("Error while adding image", err);
		}))
	.catch(err => {
		console.log("Error getting all listings");
		console.log(err);
	});
};

export const getAllListings = () => dispatch => {
	Axios
	.post("/listings/browse")
	.then(res => dispatch({
			type: BROWSE_LISTINGS,
			payload: res.data
		}).catch(err => {
			console.log("Error while adding image", err);
		}))
	.catch(err => {
		console.log("Error getting all listings");
		console.log(err);
	});
};