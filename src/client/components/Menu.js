import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Menu extends React.Component {
	isLoggedIn = () => {
		var loggedInState = this.props.login.isLoggedIn;
		console.log("Logged in state: ", loggedInState);
		
		if (loggedInState) {
			return  (
				<div className="menu-login">
					<Link className="menu-link h3" to="/samplepage">Dashboard</Link>
					<Link className="p-1" to="/logout">
						<button className="button menu-button button-outline-gray">Logout</button>
					</Link>
				</div>
			);
		}

		return (
			<div className="menu-login">
				<Link className="p-1" to="/register">
					<button className="button menu-button button-background">Register</button>
				</Link>
				<Link className="p-1" to="/login">
					<button type="button" className="button menu-button button-outline-gray">Login</button>
				</Link>
			</div>
		);
	}

	render() {
		return (
			<div className="menu">
				<nav className="navbar navbar-dark bg-dark">
					<div className="menu-row">
						<Link className="menu-link h3" to="/">Home</Link>
						<Link className="menu-link h3" to="/pages">Pages</Link>
						<Link className="menu-link h3" to="/places">Places</Link>
					</div>
					<this.isLoggedIn />
				</nav>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps
)(Menu);