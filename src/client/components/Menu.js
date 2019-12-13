import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHome } from '@fortawesome/free-solid-svg-icons';
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
				<div className="flex-right">
					<Link className="menu-link" to="/create-listing">Create</Link>
					<Link className="menu-link" to="/create-tags">Tag</Link>
					<Link className="menu-link" to="/delete-listing">Delete</Link>
					<Link className="menu-link" to="/edit-listing">Edit</Link>
					<Link className="menu-link" to="/edit-login">My Account</Link>
					<Link className="menu-link" to="/samplepage">Listings</Link>
					<Link className="menu-link" onClick={this.logoutUser.bind(this)} to="/">
						<FontAwesomeIcon icon={faSignOutAlt}/>
					</Link>
				</div>
			);
		}

		return (
			<div className="flex-left">
				<Link to="/register">
					<button className="button">Register</button>
				</Link>
				<Link to="/login">
					<button type="button" className="button button-transparent ml-3">Login</button>
				</Link>
			</div>
		);
	}

	render() {
		return (
			<div className="menu d-flex flex-row">
				<nav className="navbar">
					<div className="menu-row">
						<Link className="menu-link" to="/"><FontAwesomeIcon icon={faHome}/></Link>
						<Link className="menu-link" to="/browse">Browse</Link>
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