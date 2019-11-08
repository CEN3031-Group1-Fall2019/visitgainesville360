# Visit Gainesville 360

### Get Started

* Clone the repo then run 'npm install'

#### Dependencies

Use `npm install`

* `axios` - Fetch resources and make HTTP requests
* `bcryptjs`- Allows for password hashing
* `body-parser`- Middleware allowing to extract the body of an incoming request
* `bootstrap`- Interface improvement
* `classnames` - Allows for joining of class names
* `concurrently` - Used to run server and client concurrently
* `express`
* `is-empty`
* `jquery`
* `jwt-decode` - Decodes web tokens
* `milligram` - Stylesheet
* `mongoose` - NodeJS modeling for MongoDB
* `morgan` - Middleware that allows for logging
* `passport` - Authentication middleware
* `react`
* `react-dom`
* `react-redux`
* `react-router-dom`
* `redux` - State container
* `redux-thunk`
* `request` - Make HTTP calls
* `typescript`
* `validator` - validates input

### How To Run

* **Frontend and backend** `npm run dev`
* **Frontend** `npm run client`
* **Backend** `npm run server`

#### Include your config file

Within `src/server/config` include the following:

```module.exports = {
	db: {
	  	uri: "{YOUR_URI_HERE}"
	},
	port: {YOUR_PORT_HERE},
	keys: "{YOUR_KEYS_HERE}"
};```
