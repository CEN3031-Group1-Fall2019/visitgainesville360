import React from 'react';
import jwt_decode from "jwt-decode";

import { setUser } from "./actions/login.actions";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from "react-redux";

import setLoginToken from "./utils/setLoginToken";
import Login from './components/login/Login';
import Register from './components/login/Register';
import Menu from './components/Menu';
import store from "./store";
import './App.css';

if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setLoginToken(token);
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
	// Set user and isAuthenticated
	store.dispatch(setUser(decoded));
	// Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
	  // Redirect to login
	  window.location.href = "./login";
	}
  }
class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
				<div className="App">
					<Menu />
					<Switch>
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
					</Switch>
				</div>
				</Router>
		  </Provider>
		);
	}
}
export default App;
