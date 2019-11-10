/**
 * DELETE THIS PAGE
 * ONCE THE DASHBOARD 
 * IS PUSHED TO MASTER
 */

import React from 'react';
import {connect} from "react-redux";

class DashboardPlaceholder extends React.Component {

	render() {
		if (!this.props.login.isLoggedIn) {
			console.log("Does not have authentication");
			this.props.history.push("/login");
		}

		return (
			<div className="container">
				<p className="page-header">You are logged in!</p>
        	</div>
		);
	}
}

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps
)(DashboardPlaceholder);