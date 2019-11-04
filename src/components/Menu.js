import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./login/Login";
import Register from "./login/Register";

class Menu extends React.Component {
	render() {
		return (
			<div className="menu">
			<Router>
				<nav className="navbar navbar-dark bg-dark">
					<div className="menu-row">
						<Link className="menu-link" to="/">Home</Link>
						<Link className="menu-link" to="/page1">Page1</Link>
						<Link className="menu-link" to="/page2">Page2</Link>
					</div>
					<div className="menu-login">
						<Link className="p-1" to="/register">
							<button type="button" class="btn btn-success">Register</button>
						</Link>
						<Link className="p-1" to="/login">
							<button type="button" class="btn btn-primary">Login</button>
						</Link>
					</div>
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
			</div>
		);
	}
}
export default Menu;