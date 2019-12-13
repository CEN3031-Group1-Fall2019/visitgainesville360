import Axios from "axios";

export var foundUsers;

export const updateListing = (updateData) => () => {
	Axios
	.post("/admin/update", updateData)
	.catch(err => {
		console.log("Error while accepting listing: ", updateData);
		console.log(err);
	});
}

export const gatherUsers = (query) => (res) => {
	return Axios
    	.post("/users/browse", query)
		.then(res => {
			console.log("Found ", res.data)
			foundUsers = res.data;
		})
		.catch(err => {
			console.log("Error while getting the listings");
			console.log(err);
		});
}