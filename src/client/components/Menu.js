import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logoutUser} from "../actions/login.actions";

class Menu extends React.Component {
	logoutUser = e => {
		console.log("Logging out");
		e.preventDefault();
		this.props.logoutUser();
	}

	isLoggedIn = () => {
		var loggedInState = this.props.login.isLoggedIn;
		console.log("Logged in state: ", loggedInState);
		
		if (loggedInState) {
			return  (
				<div className="align-right">
					<Link className="menu-link h3" to="/create">Add a Listing</Link>
					<Link className="menu-link h3" to="/samplepage">Dashboard</Link>
					<Link to="/logout">
						<button 
							className="button menu-button button-outline-gray" 
							onClick={this.logoutUser.bind(this)}>
								Logout
						</button>
					</Link>
				</div>
			);
		}

		return (
			<div className="align-right">
				<Link to="/register">
					<button className="button menu-button button-background">Register</button>
				</Link>
				<Link to="/login">
					<button type="button" className="button menu-button button-outline-gray">Login</button>
				</Link>
			</div>
		);
	}

	render() {
		return (
			<div className="menu">
				<nav className="navbar navbar-dark bg-dark">
					<div className="align-left">
						<Link className="menu-link h3" to="/">Home</Link>
						<Link className="menu-link h3" to="/featured">Featured</Link>
						<Link className="menu-link h3" to="/browse">Browse</Link>
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

Menu.propTypes = {
	logoutUser: PropTypes.func.isRequired
};

export default connect(
	mapStateToProps,
	{logoutUser}
)(Menu);