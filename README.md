# Visit Gainesville 360

## Deployment
[visitgainesville360.herokuapp.com/](visitgainesville360.herokuapp.com/)

## Project Features
* Login
* Register
* Create new listings
* Tag listings
* Browse listings
* View individual listing
* Admin console
    * Approve or deny listings
    * Make users admin
    * View a users listings

### Screenshots

#### Landing Page
![Landing](https://raw.githubusercontent.com/CEN3031-Group1-Fall2019/visitgainesville360/master/Screenshots/LandingPage.png)

#### Browse listings
![Browse](https://raw.githubusercontent.com/CEN3031-Group1-Fall2019/visitgainesville360/master/Screenshots/Browse.png)

#### View a listing
![view](https://raw.githubusercontent.com/CEN3031-Group1-Fall2019/visitgainesville360/master/Screenshots/Screen%20Shot%202019-12-13%20at%209.03.31%20PM.png)

#### Login
![Login](https://raw.githubusercontent.com/CEN3031-Group1-Fall2019/visitgainesville360/master/Screenshots/Login.png)

#### Register
![Register](https://raw.githubusercontent.com/CEN3031-Group1-Fall2019/visitgainesville360/master/Screenshots/Register.png)

#### Edit account
![Acct](https://raw.githubusercontent.com/CEN3031-Group1-Fall2019/visitgainesville360/master/Screenshots/EditAccount.png)

#### Create new listings
![Create](https://raw.githubusercontent.com/CEN3031-Group1-Fall2019/visitgainesville360/master/Screenshots/CreateListing.png)

#### Edit a listing
![Edit](https://raw.githubusercontent.com/CEN3031-Group1-Fall2019/visitgainesville360/master/Screenshots/EditListings.png)

#### Tag listings
![Tags](https://raw.githubusercontent.com/CEN3031-Group1-Fall2019/visitgainesville360/master/Screenshots/AddTags.png)

#### Delete a listing
![Delete](https://raw.githubusercontent.com/CEN3031-Group1-Fall2019/visitgainesville360/master/Screenshots/DeleteListings.png)

#### Admin console landing page
![Admin](https://raw.githubusercontent.com/CEN3031-Group1-Fall2019/visitgainesville360/master/Screenshots/Screen%20Shot%202019-12-13%20at%209.00.52%20PM.png)

#### Admin approve or deny new listings
![new listings](https://raw.githubusercontent.com/CEN3031-Group1-Fall2019/visitgainesville360/master/Screenshots/Screen%20Shot%202019-12-13%20at%209.01.26%20PM.png)

#### Look at denied listings (admin)
![denied](https://raw.githubusercontent.com/CEN3031-Group1-Fall2019/visitgainesville360/master/Screenshots/Screen%20Shot%202019-12-13%20at%209.01.53%20PM.png)

#### Admin users
![users](https://raw.githubusercontent.com/CEN3031-Group1-Fall2019/visitgainesville360/master/Screenshots/Screen%20Shot%202019-12-13%20at%209.02.17%20PM.png)

#### View a users listings
![view user listings](https://raw.githubusercontent.com/CEN3031-Group1-Fall2019/visitgainesville360/master/Screenshots/ViewUsersListings.png)

## Get Started

* Clone the repo then run 'npm install' for the dependencies

#### Include your config file

Within `src/server/config` include the following:

```module.exports = {
	db: {
	  	uri: "{YOUR_URI_HERE}"
	},
	port: {YOUR_PORT_HERE},
	keys: "{YOUR_KEYS_HERE}"
};
```

#### How To Run

##### Locally

* **Frontend and backend** `npm run dev`
* **Frontend** `npm run client`
* **Backend** `npm run server`

##### Heroku

1. Change to Heroku branch
2. Log in to Heroku `heroku login`
3. Comit any changes
4. `git push -u heroku heroku`

### How to update database and server connections

The server and database information can be updated through the config file.

```
module.exports = {
	db: {
	  	uri: "{YOUR_URI_HERE}"
	},
	port: {YOUR_PORT_HERE},
	keys: "{YOUR_KEYS_HERE}"
};
```

Alternatively, these can be modified through `src/server/config/app.js` by modifying the server and database routing.

### Credit

* Bootstrap
* Font Awesome
* Axios
* bcryptjs
* milligram
* normalize
* materialize
* redux
* Mongoose
* ReactJS
* Express
