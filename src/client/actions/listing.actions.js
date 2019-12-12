import Axios from "axios";

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

export const gatherListings = (query) => (listings) => {
	Axios
	.post("/listings/browse", query)
	.then(res => {
		return listings(res.data);
	})
	.catch(err => {
		console.log("Error while getting the listings");
		console.log(err);
	});
};