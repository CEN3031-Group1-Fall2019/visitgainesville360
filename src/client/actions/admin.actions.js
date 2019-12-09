import Axios from "axios";

export const acceptListing = (listingData) => () => {
	Axios
	.post("/admin/accept", listingData)
	.catch(err => {
		console.log("Error while accepting listing: ", listingData);
		console.log(err);
	});
};

export const rejectListing = (listingData) => () => {
	Axios
	.post("/admin/reject", listingData)
	.catch(err => {
		console.log("Error while accepting listing: ", listingData);
		console.log(err);
	});
};