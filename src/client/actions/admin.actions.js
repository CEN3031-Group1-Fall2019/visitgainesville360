import Axios from "axios";

export const updateListing = (updateData) => () => {
	Axios
	.post("/admin/update", updateData)
	.catch(err => {
		console.log("Error while accepting listing: ", updateData);
		console.log(err);
	});
}