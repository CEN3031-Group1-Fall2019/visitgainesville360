import React from 'react';
import { Link } from "react-router-dom";

class Menu extends React.Component {
	render() {
		return (
			<div className="menu">
				<nav className="navbar navbar-dark bg-dark">
					<div className="menu-row">
						<Link className="menu-link h3" to="/">Home</Link>
						<Link className="menu-link h3" to="/pages">Pages</Link>
						<Link className="menu-link h3" to="/places">Places</Link>
					</div>
					<div className="menu-login">
						<Link className="p-1" to="/register">
							<button className="button menu-button button-background">Register</button>
						</Link>
						<Link className="p-1" to="/login">
							<button type="button" className="button menu-button button-outline-gray">Login</button>
						</Link>
					</div>
				</nav>
			</div>
		);
	}
}
export default Menu;