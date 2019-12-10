const initialState = {
	browse: true,
	browseListing: {},
	isPosted: false
};

export default function(state = initialState, action) {
	console.log("reducing", action.payload);
	switch (action.type) {
	  	default:
			return state;
	}
}