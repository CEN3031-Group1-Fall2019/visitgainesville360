import React from 'react';
import jwt_decode from "jwt-decode";

import { setUser } from "./actions/login.actions";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from "react-redux";

import setLoginToken from "./utils/setLoginToken";
import Login from './components/login/Login';
import Register from './components/login/Register';
import Menu from './components/Menu';
import Account from './components/Account'
import store from "./store";
import './App.css';

if (localStorage.jwtToken) {
	const token = localStorage.jwtToken;
	setLoginToken(token);
	const decoded = jwt_decode(token);
	store.dispatch(setUser(decoded));
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
						<Route exact path="/account" component={Account} />
					</Switch>
				</div>
				</Router>
		  </Provider>
		);
	}
}
export default App;
