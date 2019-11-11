# Visit Gainesville 360

## Heroku Branch

Welcome to the Heroku branch. See the app on Heroku here: https://visitgainesville360.herokuapp.com/

To get started working on the Heroku branch, run the following commands in your `visitgainesville360` directory:

1. `heroku login`
2. `heroku git:remote -a visitgainesville360` (Note: If you currently have a branch named heroku, you should either remove this or change the name of one of the branches)
3. `git add .`
4. `git commit -m "Does something"`
5. `git push heroku local_branch_name:master`
6. The updates should be deployed

<<<<<<< HEAD
If broken try `npm install -g nodemon`
Or try deleting package-lock.json

* `axios` - Fetch resources and make HTTP requests
* `bcryptjs`- Allows for password hashing
* `body-parser`- Middleware allowing to extract the body of an incoming request
* `bootstrap`- Interface improvement
* `classnames` - Allows for joining of class names
* `concurrently` - Used to run server and client concurrently
* `datepicker` - `npm install react-datepicker --save` - Hours of op selectors
* `express`
* `filepond` - `npm install react-filepond filepond --save` - file upload
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
=======
You should test your changes locally first. Updates meant to run in the app should also be made to this branch. You should think of this branch as a prod branch.
>>>>>>> Updates README for Heroku branch
