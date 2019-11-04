import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./login/Login";
import Register from "./login/Register";

class Menu extends React.Component {
	render() {
		return (
			<Router>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<Link className="nav-link" to="/">Home</Link>
					<Link to="/register">
							<button type="button" class="btn btn-success">Register</button>
					</Link>
					<Link className="nav-link" to="/login">
					<button type="button" class="btn btn-primary">Login</button>
					</Link>
				</nav>
	
				<Switch>
				<Route exact path="/">
					<p>TEST</p>
				</Route>
				<Route exact path="/register">
					<Register />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				</Switch>
			</Router>
		);
	}
}
export default Menu;