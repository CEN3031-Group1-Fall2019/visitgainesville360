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
				<div>
					<Link className="menu-link" to="/create-listing">Create</Link>
					<Link className="menu-link" to="/create-tags">Tag</Link>
					<Link className="menu-link" to="/delete-listing">Delete</Link>
					<Link className="menu-link" to="/edit-listing">Edit</Link>
					<Link className="menu-link" to="/edit-login">My Account</Link>
					<Link className="menu-link" to={`/account/listings/${this.props.login.user.id}`}>Listings</Link>
					<Link className="menu-link" onClick={this.logoutUser.bind(this)} to="/">
						<FontAwesomeIcon icon={faSignOutAlt}/>
					</Link>
				</div>
			);
		}

		return (
			<div>
				<Link to="/register">
					<button className="btn btn-info login-button">Register</button>
				</Link>
				<Link to="/login">
					<button type="button" className="btn btn-outline-info login-button ml-3">Login</button>
				</Link>
			</div>
		);
	}

	render() {
		return (
			<div className="container-color">
				<nav className="navbar">
					<div>
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