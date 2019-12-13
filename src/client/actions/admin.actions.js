import Axios from "axios";

export var foundUsers;
export var newListings;

/**
 * Updates the variables of a listing
 * 
 * @param {object} updateData 
 *		contains data that should be updated for a listing
 *		MUST include {_id: {listing._id}}
 *      the other paramaters are the ones that will be updated
 */
export const updateListing = (updateData) => () => {
	Axios
	.post("/admin/update", updateData)
	.catch(err => {
		console.log("Error while accepting listing: ", updateData);
		console.log(err);
	});
}

/**
 * Gather all users or users that match a specified query
 * 
 * @param {object} query 
 *      gather users by a specified query
 * 		returns users that match this query
 *      query can be blank ({}), which finds all users
 */
export const gatherUsers = (query) => () => {
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

/**
 * Gets notifications for the admin for new listings
 * TODO: Get notifications for other events (i.e., new users)
 * 
 * @param {object} query 
 * 		query for items to count within listings
 * 
 * 		the current use case is for all listings
 * 		that have the following criteria:
 * 		{isApproved: false
 * 		isDenied: false}
 */
export const getNotifications = (query) => () => {
	return Axios
    	.post("/admin/notificaiton", query)
		.then(res => {
			console.log("Found ", res.data)
			newListings = res.data;
		})
		.catch(err => {
			console.log("Error while getting the listings");
			console.log(err);
		});
}