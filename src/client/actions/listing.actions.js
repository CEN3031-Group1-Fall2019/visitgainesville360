import Axios from "axios";

export var foundListings;

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

export const deleteListing = (listingData) => () => {
	Axios
	.post("/listings/delete", listingData)
	.catch(err => {
		console.log("Error during listing deletion: ", listingData);
		console.log(err);
	});
};

export const gatherListings = (query) => (res) => {
	return Axios
	.post("/listings/browse", query)
	.then(res => {
		console.log("Found ", res.data)
		foundListings = res.data;
	})
	.catch(err => {
		console.log("Error while getting the listings");
		console.log(err);
	});
};
