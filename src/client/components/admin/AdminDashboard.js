import React from 'react';
import {connect} from "react-redux";

class AdminDashboard extends React.Component {
	render() {
		if (!this.props.login.user.isAdmin) {
			console.log("Does not have authentication");
			this.props.history.push("/login");
		}

		return (
			<div className="jumbotron text-dark d-flex flex-column align-items-center justify-content-center">
				<h1 className="display-4">Welcome to the Admin Console</h1>
				<p className="lead">Here you can approve and deny listings and grant users different features</p>
				<hr />
				<p className="text-dark">To get started, click a menu button on the left</p>
			</div>);
	}
}

const mapStateToProps = state => ({
	login: state.login
});

export default connect(
	mapStateToProps
)(AdminDashboard);