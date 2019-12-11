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
* Admin approve and deny new listings

## Get Started

* Clone the repo then run 'npm install' for the dependencies

### How To Run

#### Locally

* **Frontend and backend** `npm run dev`
* **Frontend** `npm run client`
* **Backend** `npm run server`

#### Heroku

1. Change to Heroku branch
2. Log in to Heroku `heroku login`
3. Comit any changes
4. `git push -u heroku heroku`

### Include your config file

Within `src/server/config` include the following:

``module.exports = {
	db: {
	  	uri: "{YOUR_URI_HERE}"
	},
	port: {YOUR_PORT_HERE},
	keys: "{YOUR_KEYS_HERE}"
};``

## How to update database and server connections

To be determined

## Credit

* Bootstrap
* Font Awesome
* Axios
* bcryptjs
* milligram
* normalize
* materialize
* other??
