import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/login.actions";

class Logout extends React.Component {
	render() {
		console.log("Logging out");
		logoutUser();
		return window.location.href = "/";
	}
}
Logout.propTypes = {
	logoutUser: PropTypes.func.isRequired
};

export default connect(
	{logoutUser}
)(Logout);